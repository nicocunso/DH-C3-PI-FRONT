import React, { useState, useEffect } from 'react';
import recomendacionesStyles from '../Recomendaciones/Recomendaciones.module.css';
import { CardRecomendacion } from '../Cards/AutosCategoria/CardRecomendacion/CardRecomendacion';
import DetalleRecomendacion from '../DetalleRecomendacion/DetalleRecomendacion';
import Imagenes from '../Imagenes.jsx/Imagenes';

const Recomendaciones = () => {
  const [mostrarDetalle, setMostrarDetalle] = useState(false);
  const [recomendacionSeleccionada, setRecomendacionSeleccionada] = useState(null);
  const [recomendaciones, setRecomendaciones] = useState([
    { id: 1, marca: 'Toyota', modelo: 'Corolla', anio: 2022, personas: '4 Personas', airbag: 'Air bag', aire: 'Aire acondicionado', cierre: 'Cierre centralizado', imagen: Imagenes.Toyota },
    { id: 2, marca: 'Honda', modelo: 'Civic', anio: 2021, personas: '4 Personas', airbag: 'Air bag', aire: 'Aire acondicionado', cierre: 'Cierre centralizado', imagen: Imagenes.Honda },
    { id: 3, marca: 'Ford', modelo: 'Mustang', anio: 2023, personas: '5 Personas', airbag: 'Air bag', aire: 'Aire acondicionado', cierre: 'Cierre centralizado', imagen: Imagenes.Ford },
    { id: 4, marca: 'Chevrolet', modelo: 'Camaro', anio: 2020, personas: '5 Personas', airbag: 'Air bag', aire: 'Aire acondicionado', cierre: 'Cierre centralizado', imagen: Imagenes.Chevrolet },
    { id: 5, marca: 'Volkswagen', modelo: 'Golf', anio: 2022, personas: '5 Personas', airbag: 'Air bag', aire: 'Aire acondicionado', Cierre: 'Cierre centralizado', imagen: Imagenes.Golf },
    { id: 6, marca: 'BMW', modelo: 'Serie 3', anio: 2021, personas: '5 Personas', airbag: 'Air bag', aire: 'Aire acondicionado', cierre: 'Cierre centralizado', imagen: Imagenes.BMW },
    { id: 7, marca: 'Mercedes-Benz', modelo: 'Clase C', anio: 2024, personas: '5 Personas', airbag: 'Air bag', aire: 'Aire acondicionado', cierre: 'Cierre centralizado', imagen: Imagenes.Mercedes },
    { id: 8, marca: 'Audi', modelo: 'A4', anio: 2020, personas: '5 Personas', airbag: 'Air bag', aire: 'Aire acondicionado', cierre: 'Cierre centralizado', imagen: Imagenes.Audi },
    { id: 9, marca: 'Nissan', modelo: 'Altima', anio: 2023, personas: '5 Personas', airbag: 'Air bag', aire: 'Aire acondicionado', cierre: 'Cierre centralizado', imagen: Imagenes.Nissan },
    { id: 10, marca: 'Hyundai', modelo: 'Elantra', anio: 2022, personas: '5 Personas', airbag: 'Air bag', aire: 'Aire acondicionado', cierre: 'Cierre centralizado', imagen: Imagenes.Hyundai },
    { id: 11, marca: 'Hyundai', modelo: 'Elantra', anio: 2022, personas: '5 Personas', airbag: 'Air bag', aire: 'Aire acondicionado', cierre: 'Cierre centralizado', imagen: Imagenes.Hyundai },
  ]);
  
  const [paginaActual, setPaginaActual] = useState(1);
  const recomendacionesPorPagina = 10;

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

  // Efecto secundario para barajar las recomendaciones al montar el componente
  useEffect(() => {
    barajarRecomendaciones();
  }, []);

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