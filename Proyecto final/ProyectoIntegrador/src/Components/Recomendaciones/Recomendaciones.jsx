import React, { useState, useEffect } from 'react';
import recomendacionesStyles from '../Recomendaciones/Recomendaciones.module.css';
import { CardRecomendacion } from '../Cards/AutosCategoria/CardRecomendacion/CardRecomendacion';
import DetalleRecomendacion from '../DetalleRecomendacion/DetalleRecomendacion';
import Imagenes from '../Imagenes.jsx/Imagenes';

const Recomendaciones = () => {
  const [mostrarDetalle, setMostrarDetalle] = useState(false);
  const [recomendacionSeleccionada, setRecomendacionSeleccionada] = useState(null);
  const [recomendaciones, setRecomendaciones] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const recomendacionesPorPagina = 10;

  // Hook al montar el componente
  useEffect(() => {
    // Efecto secundario para obtener los autos
    obtenerRecomendaciones();
    // Efecto secundario para barajar las recomendaciones
    barajarRecomendaciones();
  }, []);

  const recomendacionesMock = [
    { id: 1, modelo: 'Corolla', anno: 2022, aireAcondicionado: 'Aire acondicionado', imagenes: Imagenes.Toyota },
    { id: 2, modelo: 'Civic', anno: 2021, aireAcondicionado: 'Aire acondicionado', imagenes: Imagenes.Honda },
    { id: 3, modelo: 'Mustang', anno: 2023, aireAcondicionado: 'Aire acondicionado', imagenes: Imagenes.Ford },
    { id: 4, modelo: 'Camaro', anno: 2020, aireAcondicionado: 'Aire acondicionado', imagenes: Imagenes.Chevrolet },
    { id: 5, modelo: 'Golf', anno: 2022, aireAcondicionado: 'Aire acondicionado', imagenes: Imagenes.Golf },
    { id: 6, modelo: 'Serie 3', anno: 2021, aireAcondicionado: 'Aire acondicionado', imagenes: Imagenes.BMW },
    { id: 7, modelo: 'Clase C', anno: 2024, aireAcondicionado: 'Aire acondicionado', imagenes: Imagenes.Mercedes },
    { id: 8, modelo: 'A4', anno: 2020, aireAcondicionado: 'Aire acondicionado', imagenes: Imagenes.Audi },
    { id: 9, modelo: 'Altima', anno: 2023, aireAcondicionado: 'Aire acondicionado', imagenes: Imagenes.Nissan },
    { id: 10, modelo: 'Elantra', anno: 2022, aireAcondicionado: 'Aire acondicionado', imagenes: Imagenes.Hyundai },
    { id: 11, modelo: 'Elantra', anno: 2022, aireAcondicionado: 'Aire acondicionado', imagenes: Imagenes.Hyundai },
  ];

  // Función para obtener los autos
  const obtenerRecomendaciones = () => {
    fetch('http://localhost:8080/autos')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data) {
          setRecomendaciones(data);
        } else {
          setRecomendaciones(recomendacionesMock);
        }
      });
  }

  // Función para barajar las recomendaciones de forma aleatoria
  const barajarRecomendaciones = () => {
    const recomendacionesBarajadas = [...recomendaciones];
    for (let i = recomendacionesBarajadas.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [recomendacionesBarajadas[i], recomendacionesBarajadas[j]] = [
        recomendacionesBarajadas[j],
        recomendacionesBarajadas[i],
      ];
    }
    setRecomendaciones(recomendacionesBarajadas);
  };

  const toggleDetalle = (recomendacion) => {
    setRecomendacionSeleccionada(recomendacion);
    setMostrarDetalle(true);
  };

  const cerrarDetalle = () => {
    setRecomendacionSeleccionada(null);
    setMostrarDetalle(false);
  };

  // Lógica para paginar 
  const indiceUltimaRecomendacion = paginaActual * recomendacionesPorPagina;
  const indicePrimeraRecomendacion = indiceUltimaRecomendacion - recomendacionesPorPagina;
  const recomendacionesActuales = recomendaciones.slice(indicePrimeraRecomendacion, indiceUltimaRecomendacion);

  const handleClickSiguiente = () => {
    setPaginaActual(paginaActual + 1);
  };

  const handleClickAtras = () => {
    if (paginaActual > 1) {
      setPaginaActual(paginaActual - 1);
    }
  };

  return (
    <div>
      <br />
      <h2 className={recomendacionesStyles.h2}>Recomendaciones</h2>
      <div className={recomendacionesStyles.container}>
        {recomendacionesActuales.map((recomendacion) => (
          <CardRecomendacion
            key={recomendacion.id}
            recomendacion={recomendacion}
            onVerDetalle={() => toggleDetalle(recomendacion)}
          />
        ))}
      </div>

      <div className={recomendacionesStyles.paginacion}>
        <button onClick={handleClickAtras} disabled={paginaActual === 1}>
          &#8249; 
        </button>
        <span>Página {paginaActual}</span>
        <button onClick={handleClickSiguiente} disabled={indiceUltimaRecomendacion >= recomendaciones.length}>
          &#8250; 
        </button>
      </div>  
      {mostrarDetalle && (
        <DetalleRecomendacion recomendacion={recomendacionSeleccionada} onClose={cerrarDetalle} />
      )}
    </div>
  );
};

export default Recomendaciones;