import React, { useEffect, useState } from 'react';
import categoriasStyle from './Categorias.module.css';
import CardCategoria from './Cards/CardCategoria';
import { baseURL } from '../../config/config';

const Categorias = () => {
  const [categorias, setCategorias] = useState([]);

  // Hook al montar el componente
  useEffect(() => {
    // Efecto secundario para obtener las categorias
    obtenerCategorias();
  }, []);
  
  // Función para obtener las categorias
  const obtenerCategorias = () => {
    fetch(`${baseURL}/categorias`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCategorias(data);
      });
  }

  return (
    <div>
      <br />
      <h2 className={categoriasStyle.h2}>Categorias</h2>
      <div className={categoriasStyle.contenedor}>
      {categorias.map(categoria => {
        return <CardCategoria key={categoria.id} categoria={categoria}/>
      })}
      </div>
    </div>
  );
};

export default Categorias;