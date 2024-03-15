import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cardRecomendacionesStyles from './CardRecomendacion.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCarCrash, faWind, faDoorClosed } from '@fortawesome/free-solid-svg-icons';

export const CardRecomendacion = ({ recomendacion }) => {
  const [mostrarDetalle, setMostrarDetalle] = useState(false); 

  const toggleDetalle = () => {
    setMostrarDetalle(!mostrarDetalle);
  };

  const imagenActual = recomendacion.imagen[0]; // Solo muestra la primera imagen

  return (
    <div>
      <Link to={`/Detail/${recomendacion.id}`} className={cardRecomendacionesStyles.link}>
        <div className={cardRecomendacionesStyles.container}>
          <br />
          <h2>{recomendacion.marca}</h2>
          <div className={cardRecomendacionesStyles.imageContainer}>
            <img className={cardRecomendacionesStyles.img} src={imagenActual} alt="" style={{ marginLeft: '10px' }} />
          </div>
          <h3>{recomendacion.modelo}</h3>
          <h3>{recomendacion.anio}</h3>
          {mostrarDetalle && (
            <div className={cardRecomendacionesStyles.detalle}>
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
      </Link>
    </div>
  );
};
