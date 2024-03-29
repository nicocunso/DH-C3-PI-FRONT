import React from 'react';
import categoriasStyle from './Categorias.module.css';
import imgauto from '../../assets/Auto.png';
import imgsuv from '../../assets/Suv.png';
import AutosCategoria from '../Cards/AutosCategoria/Autoscategoria'


const Categorias = () => {
  let categorias = [
    { id: 1, tipo: 'Autos', img: imgauto, texto: 'Mas información' },
    { id: 2, tipo: 'SUVs', img: imgsuv, texto: 'Mas información' },
    
  ];

  return (
    <div>
      <h2 className={categoriasStyle.h2}>Categorias</h2>
      <div className={categoriasStyle.contenedor}>
      {categorias.map(categoria => {
        return <AutosCategoria key={categoria.id} categoria={categoria}/>
      })}
      </div>
    </div>
  );
};

export default Categorias;