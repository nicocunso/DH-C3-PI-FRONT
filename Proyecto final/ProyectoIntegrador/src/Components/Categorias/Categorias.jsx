import React from 'react';
import categoriasStyle from './Categorias.module.css';
import imgauto from '../../assets/Auto.png';
import imgcamion from '../../assets/Camion.png';
import imgsuv from '../../assets/Suv.png';
import imgmoto from '../../assets/Moto.png';
import AutosCategoria from '../Cards/AutosCategoria/Autoscategoria'
import { Link } from 'react-router-dom';

const Categorias = () => {
 
  let categorias = [
    { id: 1, tipo: 'Autos', img: imgauto, texto: 'Mas información' },
    { id: 2, tipo: 'SUVs', img: imgsuv, texto: 'Mas información' },
    { id: 3, tipo: 'Camiones', img: imgcamion, texto: 'Mas información' },
    { id: 4, tipo: 'Motos', img: imgmoto, texto: 'Mas información' },
  ];

  return (
    <div>
      <div className={categoriasStyle.contenedor2}>
        <Link className={categoriasStyle.link} to= '/agregarproductos'><button className={categoriasStyle.button}> <span>+</span>Agregar Producto</button></Link>
        <h2 className={categoriasStyle.h2}>Categorias</h2>
      </div>
      <div className={categoriasStyle.contenedor}>
      {categorias.map(categoria => {
        return <AutosCategoria key={categoria.id} categoria={categoria}/>
      })}
      </div>
    </div>
  );
};

export default Categorias;