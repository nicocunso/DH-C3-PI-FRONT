import React from 'react';
import categoriasStyle from './Categorias.module.css';
import AutosCategoria from '../Cards/AutosCategoria/Autoscategoria'


const Categorias = () => {
  let categorias = [
    { id: 1, tipo_auto: 'URBANO' },
    { id: 2, tipo_auto: 'SEDAN' },
    { id: 3, tipo_auto: 'COUPE' },
    { id: 4, tipo_auto: 'DEPORTIVO' },
    { id: 5, tipo_auto: 'TODOTERRENO' },
    { id: 6, tipo_auto: 'SUV' },
    { id: 7, tipo_auto: 'PICKUP' },
    { id: 8, tipo_auto: 'FURGONETA' }
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