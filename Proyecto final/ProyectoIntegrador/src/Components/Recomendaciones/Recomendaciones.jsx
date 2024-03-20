import React, { useState, useEffect } from 'react';
import recomendacionesStyles from '../Recomendaciones/Recomendaciones.module.css';
import { CardRecomendacion } from '../Cards/AutosCategoria/CardRecomendacion/CardRecomendacion';
import DetalleRecomendacion from '../DetalleRecomendacion/DetalleRecomendacion';

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

  // Función para obtener los autos
  const obtenerRecomendaciones = () => {
    fetch('http://localhost:8080/autos')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRecomendaciones(data);
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