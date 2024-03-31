import React, { useState, useEffect } from 'react';
import CardRecomendacion from '../Recomendaciones/Cards/CardRecomendacion';
import resultadosStyles from '../Resultados/Resultados.module.css';
import { baseURL } from '../../config/config';
import DetalleRecomendacion from '../Recomendaciones/Detalle/DetalleRecomendacion';

const Resultados = ({ modeloFiltrado }) => {
  const [mostrarDetalle, setMostrarDetalle] = useState(false);
  const [autos, setAutos] = useState([]);

  useEffect(() => {
    // Evitar la llamada a la API si el modelo filtrado está vacío
    // if (!modeloFiltrado) {
    //   setAutos([]);
    //   return;
    // }

    const obtenerAutosFiltrados = async () => {
      try {
        const response = await fetch(`${baseURL}/autos`);
        if (!response.ok) {
          throw new Error('Error al obtener los datos de los autos');
        }
        const data = await response.json();
        let autosFiltrados = data;

        if (modeloFiltrado) {
          // Filtrar autos por modelo si hay un modelo filtrado
          autosFiltrados = data.filter(auto =>
            auto.modelo.toLowerCase().includes(modeloFiltrado.toLowerCase())
          );
        }

        setAutos(autosFiltrados);
      } catch (error) {
        console.error(error);
      }
    };

    obtenerAutosFiltrados();
  }, [modeloFiltrado]);

  const toggleDetalle = (recomendacion) => {
    setRecomendacionSeleccionada(recomendacion);
    setMostrarDetalle(true);
  };

  // Renderizar resultados solo si hay autos y el modelo filtrado no está vacío
  return (
    <div>
      <br />
      <h2 className={resultadosStyles.h2}>{ modeloFiltrado ? modeloFiltrado : "Conocé nuestra flota" }</h2>
      <div className={resultadosStyles.container}>
        {autos.map(autos => (
          <CardRecomendacion
            key={autos.id}
            recomendacion={autos}
            onVerDetalle={() => toggleDetalle(autos)}
          />
        ))}
      </div>
      {mostrarDetalle && (
        <DetalleRecomendacion/>
      )}
    </div>
  );
};

export default Resultados;
