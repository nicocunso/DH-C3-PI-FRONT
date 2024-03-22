import React from 'react';
import autocategoriaStyle from './Autoscategoria.module.css';
import { Link } from 'react-router-dom';

const AutosCategoria = ({ categoria }) => {
  return (
    <div className={autocategoriaStyle.contenedor}>
      <Link to={`/categorias/${categoria.id}/autos`}>
        <h3 className={autocategoriaStyle.h3}>{categoria.tipo_auto}</h3>
      </Link>
    </div>
  );
};

export default AutosCategoria;