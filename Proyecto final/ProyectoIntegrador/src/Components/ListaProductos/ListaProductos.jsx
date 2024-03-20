import React, { useState, useEffect } from 'react';
import listaProductosStyle from './ListaProductos.module.css'
import panelAdminStyles from '../../Pages/AgregarProductos/panelAdmin/PanelAdmin';
import { Link } from 'react-router-dom';

const ListaProductos = () => {
  const [productos, setProductos] = useState([]);

  // Hook al montar el componente
  useEffect(() => {
    // Efecto secundario para obtener los autos
    obtenerProductos();
  }, []);

  // Función para obtener los autos
  const obtenerProductos = () => {
    fetch('http://localhost:8080/autos')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProductos(data);
      });
  }

  // Función para eliminar los autos
  const eliminarProductos = (id) => {
    fetch(`http://localhost:8080/autos/${id}`, { method: 'DELETE' })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProductos(data);
      });
  }

  const productosPorPagina = 6;
  const [paginaActual, setPaginaActual] = useState(1);

  const handleEliminarProducto = (id) => {
    const confirmacion = window.confirm('¿Estás seguro de que quieres eliminar este producto?');
    if (confirmacion) {
      eliminarProductos(id);
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

  let redir = (productoId) => {
    window.location.href = `/admin/actualizarProductos/${productoId}`;
  }

  return (
    <div className={listaProductosStyle.container}>
      <h2>Lista de Productos</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Modelo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productosActuales.map(producto => (
            <tr key={producto.id}>
              <td>{producto.id}</td>
              <td>{producto.modelo}</td>
              <td>
                {/* <Link to="/admin/actualizarProductos"> */}
                  <button className={listaProductosStyle.eliminar} onClick={() => redir(producto.id)}>Actualizar</button>
                {/* </Link> */}
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


