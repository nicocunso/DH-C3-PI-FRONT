import React, { useState } from 'react';
import listaProductosStyle from './ListaProductos.module.css'

const ListaProductos = () => {
  const [productos, setProductos] = useState([
    { id: 1, nombre: 'Toyota' },
    { id: 2, nombre: 'Honda' },
    { id: 3, nombre: 'Ford' },
    { id: 4, nombre: 'Chevrolet' },
    { id: 5, nombre: 'Volkswagen' },
    { id: 6, nombre: 'BMW' },
    { id: 7, nombre: 'Mercedes-Benz' },
    { id: 8, nombre: 'Audi' },
    { id: 9, nombre: 'Nissan' },
    { id: 10, nombre: 'Hyundai' },
    { id: 11, nombre: 'Hyundai' },
  ]);

  const productosPorPagina = 6;
  const [paginaActual, setPaginaActual] = useState(1);

  const handleEliminarProducto = (id) => {
    const confirmacion = window.confirm('¿Estás seguro de que quieres eliminar este producto?');
    if (confirmacion) {
      const nuevaListaProductos = productos.filter(producto => producto.id !== id);
      setProductos(nuevaListaProductos);
    }
  };

  const indiceUltimoProducto = paginaActual * productosPorPagina;
  const indicePrimerProducto = indiceUltimoProducto - productosPorPagina;
  const productosActuales = productos.slice(indicePrimerProducto, indiceUltimoProducto);

  const handleClickSiguiente = () => {
    setPaginaActual(paginaActual + 1);
  };

  const handleClickAtras = () => {
    if (paginaActual > 1) {
      setPaginaActual(paginaActual - 1);
    }
  };

  return (
    <div className={listaProductosStyle.container}>
      <h2>Lista de Productos</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productosActuales.map(producto => (
            <tr key={producto.id}>
              <td>{producto.id}</td>
              <td>{producto.nombre}</td>
              <td>
                <button className={listaProductosStyle.eliminar} onClick={() => handleEliminarProducto(producto.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={listaProductosStyle.paginacion}>
        <button onClick={handleClickAtras}>{'<'}</button>
        <button onClick={handleClickSiguiente}>{'>'}</button>
      </div>
    </div>
  );
};

export default ListaProductos;


