  import React, { useState, useEffect } from 'react';
  import { Link } from 'react-router-dom';
  import cardRecomendacionesStyles from './CardRecomendacion.module.css';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faUser, faCarCrash, faWind, faDoorClosed, faChevronRight } from '@fortawesome/free-solid-svg-icons';
  import imagenes from '../../../Imagenes.jsx/Imagenes';

  export const CardRecomendacion = ({ recomendacion, onVerDetalle }) => {
    const [indiceImagen, setIndiceImagen] = useState(0);
    const [imagenActual, setImagenActual] = useState(undefined);

    useEffect(() => {
      obtenerImagen(indiceImagen);
    }, []);

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
      <div>
        <div className={cardRecomendacionesStyles.container}>
          {/* <h2>{recomendacion.marca}</h2> */}
          <div className={cardRecomendacionesStyles.imageContainer}>
            <img className={cardRecomendacionesStyles.img} src={imagenActual} alt="" style={{ marginLeft: '10px' }} />
            <FontAwesomeIcon
              className={cardRecomendacionesStyles.arrowRight}
              icon={faChevronRight}
              onClick={() => cambiarImagen(indiceImagen + 1)}
            />
          </div>
          <div className={cardRecomendacionesStyles.cardDetails}>
            <h3>{recomendacion.modelo}</h3>
            <h3>{recomendacion.anno}</h3>
            <Link to={`/Detail/${recomendacion.id}`} className={cardRecomendacionesStyles.link}>
              <button className={cardRecomendacionesStyles.buttoncard}>Ver Detalle</button>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  export default CardRecomendacion
