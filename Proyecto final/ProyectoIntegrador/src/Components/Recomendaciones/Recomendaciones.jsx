import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import recomendacionesStyles from '../Recomendaciones/Recomendaciones.module.css';
import { CardRecomendacion } from '../Cards/AutosCategoria/CardRecomendacion/CardRecomendacion';
import DetalleRecomendacion from '../DetalleRecomendacion/DetalleRecomendacion';

const Recomendaciones = () => {
  const [mostrarDetalle, setMostrarDetalle] = useState(false);
  const [recomendacionSeleccionada, setRecomendacionSeleccionada] = useState(null);
  const [recomendaciones, setRecomendaciones] = useState([]);

  useEffect(() => {
    obtenerRecomendaciones();
    barajarRecomendaciones();
  }, []);

  const obtenerRecomendaciones = () => {
    fetch('http://localhost:8080/autos')
      .then((res) => res.json())
      .then((data) => {
        setRecomendaciones(data);
      });
  };

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

  // Configuración del carrusel
  const settings = {
    dots: true,
    infinite: false, // Hacer el carrusel finito
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div className={recomendacionesStyles.container}>
      <br />
      <h2 className={recomendacionesStyles.h2}>Recomendaciones</h2>
      <Slider {...settings}>
        {recomendaciones.map(recomendacion => (
          <div key={recomendacion.id}>
            <CardRecomendacion
              recomendacion={recomendacion}
              onVerDetalle={() => toggleDetalle(recomendacion)}
            />
          </div>
        ))}
      </Slider>
      {mostrarDetalle && (
        <DetalleRecomendacion
          recomendacion={recomendacionSeleccionada}
          onClose={cerrarDetalle}
        />
      )}
    </div>
  );
};

export default Recomendaciones;
