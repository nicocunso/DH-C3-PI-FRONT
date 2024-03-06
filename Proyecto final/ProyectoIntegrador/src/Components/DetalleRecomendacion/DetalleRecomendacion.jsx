import React, {useState} from 'react';

const DetalleRecomendacion = ({ recomendacion, onClose }) => {
  if (!recomendacion) {
    return null; 
  }

  return (
    <div>
      {/* <h2>{recomendacion.marca}</h2> */}
      <img src={recomendacion.imagenes} alt={recomendacion.modelo} />
      <h3>{recomendacion.modelo}</h3>
      <h3>{recomendacion.anno}</h3>
      {/* <h3>{recomendacion.personas}</h3> */}
      {/* <h3>{recomendacion.airbag}</h3> */}
      <h3>{recomendacion.aireAcondicionado}</h3>
      {/* <h3>{recomendacion.cierre}</h3> */}
      <button onClick={onClose}>Cerrar detalle</button> 
    </div>
  );
};

export default DetalleRecomendacion;
