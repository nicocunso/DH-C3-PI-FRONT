import React from 'react';
import cardCategoriaStyle from './CardCategoria.module.css';
import { Link } from 'react-router-dom';

const CardCategoria = ({ categoria }) => {
  return (
    <div className={cardCategoriaStyle.contenedor}>
      <Link to={`/categorias/${categoria.id}/autos`}>
        <h3 className={cardCategoriaStyle.h3}>{categoria.tipo_auto}</h3>
      </Link>
    </div>
  );
};

export default CardCategoria;