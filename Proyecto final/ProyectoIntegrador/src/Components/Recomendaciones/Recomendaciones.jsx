import React, {useState, useEffect} from 'react';
import recomendacionesStyles from '../Recomendaciones/Recomendaciones.module.css';
import { CardRecomendacion } from './Cards/CardRecomendacion';
import DetalleRecomendacion from './Detalle/DetalleRecomendacion';
import { baseURL } from '../../config/config';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Recomendaciones = () => {
  const [mostrarDetalle, setMostrarDetalle] = useState(false);
  const [recomendacionSeleccionada, setRecomendacionSeleccionada] = useState(null);
  const [recomendaciones, setRecomendaciones] = useState([]);

  useEffect(() => {
    obtenerRecomendaciones();
    barajarRecomendaciones();
  }, []);

  const obtenerRecomendaciones = () => {
    fetch(`${baseURL}/autos`)
      .then((res) => {
        return res.json();
      })
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
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    //variableWidth: true
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
        <DetalleRecomendacion/>
      )}
    </div>
  );
};

export default Recomendaciones;
