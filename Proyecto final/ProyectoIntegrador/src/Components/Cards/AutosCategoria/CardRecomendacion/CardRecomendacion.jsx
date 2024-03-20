import React, { useState, useEffect } from 'react';
import cardRecomendacionesStyles from './CardRecomendacion.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCarCrash, faWind, faDoorClosed, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import imagenes from '../../../Imagenes.jsx/Imagenes';

export const CardRecomendacion = ({ recomendacion, onVerDetalle }) => {
  const [mostrarDetalle, setMostrarDetalle] = useState(false);
  const [indiceImagen, setIndiceImagen] = useState(0);
  const [imagenActual, setImagenActual] = useState(undefined);

  useEffect(() => {
    obtenerImagen(indiceImagen);
  }, []);

  const toggleDetalle = () => {
    setMostrarDetalle(!mostrarDetalle);
  };

  const cambiarImagen = (indice) => {
    const newIndice = (indice + recomendacion.imagenes.length) % recomendacion.imagenes.length;
    setIndiceImagen(newIndice);
    obtenerImagen(newIndice);
  };

  const obtenerImagen = (indiceImagen) => {
    if (!recomendacion.imagenes[indiceImagen]) {
      setImagenActual(imagenes[0]);
    } else {
      fetch(`http://localhost:8080/autos/${recomendacion.id}/imagenes/${recomendacion.imagenes[indiceImagen].id}`)
      .then((res) => {
        return res.blob();
      })
      .then((blob) => {
        const data = URL.createObjectURL(blob);
        if (imagenActual) {
          URL.revokeObjectURL(imagenActual)
        }
        setImagenActual(data);
      });
    }
  }

  return (
    <div className={cardRecomendacionesStyles.container}>
      <br />
      {/* <h2>{recomendacion.marca}</h2> */}
      <div className={cardRecomendacionesStyles.imageContainer}>
        <img className={cardRecomendacionesStyles.img} src={imagenActual} alt="" style={{ marginLeft: '10px' }} />
        <FontAwesomeIcon
          className={cardRecomendacionesStyles.arrowRight}
          icon={faChevronRight}
          onClick={() => cambiarImagen(indiceImagen + 1)}
        />
      </div>
      <h3>{recomendacion.modelo}</h3>
      <h3>{recomendacion.anno}</h3>
      {mostrarDetalle && (
        <div>
          <h3><FontAwesomeIcon icon={faUser} /> {recomendacion.cantidadPuertas}</h3>
          {/* <h3><FontAwesomeIcon icon={faCarCrash} /> {recomendacion.airbag}</h3> */}
          <h3><FontAwesomeIcon icon={faWind} /> {recomendacion.aireAcondicionado}</h3>
          {/* <h3><FontAwesomeIcon icon={faDoorClosed} /> {recomendacion.cierre}</h3> */}
        </div>
      )}
      <button onClick={toggleDetalle}>
        {mostrarDetalle ? 'Ocultar Detalle' : 'Ver Detalle'}
      </button>
    </div>
  );
};
