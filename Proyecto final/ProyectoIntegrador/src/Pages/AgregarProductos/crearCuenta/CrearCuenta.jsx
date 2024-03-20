

import React, { useState } from 'react';
import crearcuentastyles from './CrearCuenta.module.css'
import { useNavigate } from 'react-router-dom';


const Registro = () => {
  const [nuevoUsuario, setNuevoUsuario] = useState({
    nombre: '',
    apellido: '',
    email: '',
    contrasena: '',
  });

  const registrarUsuario = (usuario) => {
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(usuario),
    };

    fetch('http://localhost:8080/usuarios', options);
  };

  const [errores, setErrores] = useState({});
  const navigate = useNavigate();

  const validarFormulario = () => {
    const nuevosErrores = {};

    if (!nuevoUsuario.nombre.trim()) {
      nuevosErrores.nombre = 'El nombre es obligatorio';
    }

    if (!nuevoUsuario.apellido.trim()) {
      nuevosErrores.apellido = 'El apellido es obligatorio';
    }

    if (!nuevoUsuario.email.trim()) {
      nuevosErrores.email = 'El email es obligatorio';
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(nuevoUsuario.email)) {
      nuevosErrores.email = 'Formato de email inválido';
    }

    if (!nuevoUsuario.contrasena.trim()) {
      nuevosErrores.contrasena = 'La contraseña es obligatoria';
    } else if (nuevoUsuario.contrasena.length < 6) {
      nuevosErrores.contrasena = 'La contraseña debe tener al menos 6 caracteres';
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validarFormulario()) {
      // Aquí puedes agregar la lógica para manejar los datos del formulario
      registrarUsuario(nuevoUsuario);
      console.log('Datos del formulario:', nuevoUsuario);
      navigate('/');
    }
  };

  return (
    <div className={crearcuentastyles.container}>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
        <label>
          Nombre:
          <input type="text" value={nuevoUsuario.nombre} onChange={(e) => setNuevoUsuario({ ...nuevoUsuario, nombre: e.target.value })} />
          
        </label>
        {errores.nombre && <span style={{marginTop:'10px', fontSize: '15px', color: 'red' }}>{errores.nombre}</span>}
        <br />
        <label>
          Apellido:
          <input type="text" value={nuevoUsuario.apellido} onChange={(e) => setNuevoUsuario({ ...nuevoUsuario, apellido: e.target.value })} />
          
        </label>
        {errores.apellido && <span style={{marginTop:'10px', fontSize: '15px', color: 'red' }}>{errores.apellido}</span>}
        <br />
        <label>
          Email:
          <input type="email" value={nuevoUsuario.email} onChange={(e) => setNuevoUsuario({ ...nuevoUsuario, email: e.target.value })} />
          
        </label>
        {errores.email && <span style={{marginTop:'10px', fontSize: '15px', color: 'red' }}>{errores.email}</span>}
        <br />
        <label>
          Contraseña:
          <input type="password" value={nuevoUsuario.contrasena} onChange={(e) => setNuevoUsuario({ ...nuevoUsuario, contrasena: e.target.value })} />
          
        </label>
        {errores.contrasena && <span style={{ marginTop:'10px', fontSize: '15px', color: 'red' }}>{errores.contrasena}</span>}
        <br />
        <button className ={crearcuentastyles.button} type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Registro;

