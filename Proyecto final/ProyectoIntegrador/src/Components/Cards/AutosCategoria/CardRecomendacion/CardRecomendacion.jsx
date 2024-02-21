import React, { useState } from 'react';
import cardRecomendacionesStyles from './CardRecomendacion.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCarCrash, faWind, faDoorClosed, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export const CardRecomendacion = ({ recomendacion, onVerDetalle }) => {
  const [mostrarDetalle, setMostrarDetalle] = useState(false);
  const [indiceImagen, setIndiceImagen] = useState(0);

  const toggleDetalle = () => {
    setMostrarDetalle(!mostrarDetalle);
  };

  const cambiarImagen = (indice) => {
    const newIndice = (indice + recomendacion.imagen.length) % recomendacion.imagen.length;
    setIndiceImagen(newIndice);
  };

  const imagenActual = recomendacion.imagen[indiceImagen];

  return (
    <div className={cardRecomendacionesStyles.container}>
      <br />
      <h2>{recomendacion.marca}</h2>
      <div className={cardRecomendacionesStyles.imageContainer}>
        <img className={cardRecomendacionesStyles.img} src={imagenActual} alt="" style={{ marginLeft: '10px' }} />
        <FontAwesomeIcon
          className={cardRecomendacionesStyles.arrowRight}
          icon={faChevronRight}
          onClick={() => cambiarImagen(indiceImagen + 1)}
        />
      </div>
      <h3>{recomendacion.modelo}</h3>
      <h3>{recomendacion.anio}</h3>
      {mostrarDetalle && (
        <div>
          <h3><FontAwesomeIcon icon={faUser} /> {recomendacion.personas}</h3>
          <h3><FontAwesomeIcon icon={faCarCrash} /> {recomendacion.airbag}</h3>
          <h3><FontAwesomeIcon icon={faWind} /> {recomendacion.aire}</h3>
          <h3><FontAwesomeIcon icon={faDoorClosed} /> {recomendacion.cierre}</h3>
        </div>
      )}
      <button onClick={toggleDetalle}>
        {mostrarDetalle ? 'Ocultar Detalle' : 'Ver Detalle'}
      </button>
    </div>
  );
};
