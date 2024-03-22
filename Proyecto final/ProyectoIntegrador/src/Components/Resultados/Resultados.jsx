import React, { useState, useEffect } from 'react';
import CardRecomendacion from '../Cards/AutosCategoria/CardRecomendacion/CardRecomendacion';

const Resultados = ({ modeloFiltrado }) => {
  const [autos, setAutos] = useState([]);

  useEffect(() => {
    // Evitar la llamada a la API si el modelo filtrado está vacío
    if (!modeloFiltrado) {
      setAutos([]);
      return;
    }

    const obtenerAutosFiltrados = async () => {
      try {
        const response = await fetch('http://localhost:8080/autos');
        if (!response.ok) {
          throw new Error('Error al obtener los datos de los autos');
        }
        const data = await response.json();

        // Filtrar autos por modelo si hay un modelo filtrado
        const autosFiltrados = data.filter(auto =>
          auto.modelo.toLowerCase().includes(modeloFiltrado.toLowerCase())
        );
        setAutos(autosFiltrados);
      } catch (error) {
        console.error(error);
      }
    };

    obtenerAutosFiltrados();
  }, [modeloFiltrado]);

  // Renderizar resultados solo si hay autos y el modelo filtrado no está vacío
  return (
    <div>
      {autos.length > 0 && modeloFiltrado && (
        <div>
          <h2>Resultados</h2>
          <div>
            {autos.map(auto => (
              <CardRecomendacion key={auto.id} recomendacion={auto} />
            ))}
          </div>
        </div>
      )}

      

      
    </div>
  );
};

export default Resultados;
