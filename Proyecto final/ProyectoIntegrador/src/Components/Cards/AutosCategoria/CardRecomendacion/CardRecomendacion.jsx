import React from 'react'
import cardRecomendacionesStyles from './CardRecomendacion.module.css'


export const CardRecomendacion = ({recomendacion}) => {
  return (
    <div className={cardRecomendacionesStyles.container}>
        <br />
        <h2>{recomendacion.marca}</h2>
        <img className={cardRecomendacionesStyles.img} src={recomendacion.imagen} alt="" />
        <h3>{recomendacion.modelo}</h3>
        <h3>{recomendacion.anio}</h3>

    </div>
  ) 
}
