import React, {useState, useEffect} from 'react';
import recomendacionesStyles from '../Recomendaciones/Recomendaciones.module.css';
import { CardRecomendacion } from './Cards/CardRecomendacion';
import DetalleRecomendacion from './Detalle/DetalleRecomendacion';
import { baseURL } from '../../config/config';

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
  }

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
    console.log('Mostrar detalle:', mostrarDetalle);
  };

  const cerrarDetalle = () => {
    setRecomendacionSeleccionada(null);
    setMostrarDetalle(false);
  };

  return (
    <div>
      <br />
      <h2 className={recomendacionesStyles.h2}>Recomendaciones</h2>
      <div className={recomendacionesStyles.container}>
        {recomendaciones.map(recomendacion => (
          <CardRecomendacion
            key={recomendacion.id}
            recomendacion={recomendacion}
            onVerDetalle={() => toggleDetalle(recomendacion)}
          />
        ))}
      </div>
      {mostrarDetalle && (
        <DetalleRecomendacion
          recomendacion={recomendacionSeleccionada}
          onClose={cerrarDetalle}
        />
      )}
    </div>
  )
}

export default Recomendaciones