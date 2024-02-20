import React from 'react';
import autocategoriaStyle from './Autoscategoria.module.css'

const AutosCategoria = ({ categoria }) => {
  return (
    <div className={autocategoriaStyle.contenedor}>
      <img src={categoria.img} alt="" />
      <h3 className={autocategoriaStyle.h3}>{categoria.tipo}</h3>
      <h4 className={autocategoriaStyle.h4}>{categoria.texto}</h4>
    </div>
  );
};

export default AutosCategoria;