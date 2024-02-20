import React from 'react'
import recomendacionesStyles from '../Recomendaciones/Recomendaciones.module.css'
import { CardRecomendacion } from '../Cards/AutosCategoria/CardRecomendacion/CardRecomendacion';
import Categorias from '../Categorias/Categorias';
import toyota from '../../assets/toyotacorolla.jpg'
import nissan from '../../assets/nissan.webp'
import honda from '../../assets/honda-civic-2021-4.jpg'
import ford from '../../assets/ford-mustang-2023.webp'
import chevrolet from '../../assets/2020-chevrolet-camarolt1-003.jpg'
import golf from '../../assets/golf.jpg'
import bmw from '../../assets/bmw.png'
import mercedes from '../../assets/mercedez.webp'
import audi from '../../assets/audi.jpeg'
import hyundai from '../../assets/hyundai.jpg'


const Recomendaciones = () => {

  let recomendaciones = [
  { id: 1, marca: 'Toyota', modelo: 'Corolla', anio: 2022, imagen: toyota },
  { id: 2, marca: 'Honda', modelo: 'Civic', anio: 2021, imagen: nissan },
  { id: 3, marca: 'Ford', modelo: 'Mustang', anio: 2023, imagen: honda },
  { id: 4, marca: 'Chevrolet', modelo: 'Camaro', anio: 2020, imagen: ford },
  { id: 5, marca: 'Volkswagen', modelo: 'Golf', anio: 2022, imagen: chevrolet },
  { id: 6, marca: 'BMW', modelo: 'Serie 3', anio: 2021, imagen: golf },
  { id: 7, marca: 'Mercedes-Benz', modelo: 'Clase C', anio: 2024, imagen: bmw },
  { id: 8, marca: 'Audi', modelo: 'A4', anio: 2020, imagen: mercedes },
  { id: 9, marca: 'Nissan', modelo: 'Altima', anio: 2023, imagen: audi },
  { id: 10, marca: 'Hyundai', modelo: 'Elantra', anio: 2022, imagen: hyundai },
];
  
  return (
    <div>
      <br />
      <h2 className={recomendacionesStyles.h2}>Recomendaciones</h2>
        <div className={recomendacionesStyles.container}>
          {recomendaciones.map(recomendacion => {
            return <CardRecomendacion key={recomendacion.id} recomendacion={recomendacion}/>
          })}
        </div>
    </div>
  )
}

export default Recomendaciones