import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardRecomendacion from '../Cards/AutosCategoria/CardRecomendacion/CardRecomendacion';
import resultadosstyles from '../Resultados/Resultados.module.css';

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

  // Configuración del carrusel
  const settings = {
    dots: true,
    infinite: false, // Hacer el carrusel finito
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  // Renderizar resultados solo si hay autos y el modelo filtrado no está vacío
  return (
    <div>
      {autos.length > 0 && modeloFiltrado && (
        <div>
          <h2 className={resultadosstyles.h2}>Resultados</h2>
          <Slider {...settings}>
            {autos.map((auto, index) => (
              <div key={auto.id}>
                <CardRecomendacion recomendacion={auto} />
                {/* Mostrar un div vacío si es la última tarjeta */}
                {index === autos.length - 1 && <div />}
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default Resultados;
