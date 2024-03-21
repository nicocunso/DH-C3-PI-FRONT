import React, {useState, useEffect} from 'react'
import recomendacionesStyles from '../Recomendaciones/Recomendaciones.module.css'
import { CardRecomendacion } from '../Cards/AutosCategoria/CardRecomendacion/CardRecomendacion';
import DetalleRecomendacion from '../DetalleRecomendacion/DetalleRecomendacion';

const Recomendaciones = () => {
  const [mostrarDetalle, setMostrarDetalle] = useState(false);
  const [recomendacionSeleccionada, setRecomendacionSeleccionada] = useState(null);
  const [recomendaciones, setRecomendaciones] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const recomendacionesPorPagina = 10;

  // Hook al montar el componente
  useEffect(() => {
    // Efecto secundario para obtener los autos
    obtenerRecomendaciones();
    // Efecto secundario para barajar las recomendaciones
    barajarRecomendaciones();
  }, []);

  // Función para obtener los autos
  const obtenerRecomendaciones = () => {
    fetch('http://localhost:8080/autos')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRecomendaciones(data);
      });
  }

  // Función para barajar las recomendaciones de forma aleatoria
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