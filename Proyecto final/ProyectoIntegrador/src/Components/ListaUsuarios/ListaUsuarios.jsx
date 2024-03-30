import React, { useState, useEffect } from 'react';
import listaUsuariosStyle from './ListaUsuarios.module.css'
import { baseURL } from '../../config/config';

const ListaUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  // Hook al montar el componente
  useEffect(() => {
    // Efecto secundario para obtener los usuarios
    obtenerUsuarios();
  }, []);

  // Función para obtener los usuarios no admin
  const obtenerUsuarios = () => {
    fetch(`${baseURL}/usuarios/roles/0`) // 0 => ROLE_USER | 1 => ROLE_ADMIN
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsuarios(data);
      });
  }

  // Función para actualizar rol de cliente a administrador
  const actualizarRol = (id) => {
    fetch(`${baseURL}/usuarios/${id}`, { method: 'PUT' })
      .then((res) => {
        return res;
      })
      .then(() => {
        obtenerUsuarios();
      });
  }

  const usuariosPorPagina = 6;
  const [paginaActual, setPaginaActual] = useState(1);

  const handleActualizarRol = (id) => {
    const confirmacion = window.confirm('¿Estás seguro de que quieres otorgar permisos a este usuario?');
    if (confirmacion) {
      actualizarRol(id);
    }
  };

  const indiceUltimoUsuarios = paginaActual * usuariosPorPagina;
  const indicePrimerUsuarios = indiceUltimoUsuarios - usuariosPorPagina;
  const usuariosActuales = usuarios.slice(indicePrimerUsuarios, indiceUltimoUsuarios);

  const handleClickSiguiente = () => {
    setPaginaActual(paginaActual + 1);
  };

  const handleClickAtras = () => {
    if (paginaActual > 1) {
      setPaginaActual(paginaActual - 1);
    }
  };

  return (
    <div className={listaUsuariosStyle.container}>
      <h2>Lista de Usuarios</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuariosActuales.map(usuario => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.email}</td>
              <td>
                <button className={listaUsuariosStyle.eliminar} onClick={() => handleActualizarRol(usuario.id)}>Otorgar Permisos</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={listaUsuariosStyle.paginacion}>
        <button onClick={handleClickAtras}>{'<'}</button>
        <button onClick={handleClickSiguiente}>{'>'}</button>
      </div>
    </div>
  );
};

export default ListaUsuarios;


