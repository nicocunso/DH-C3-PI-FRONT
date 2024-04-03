import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import iniciarsesionstyles from './IniciarSesion.module.css'
import { useNavigate } from 'react-router-dom';
import { baseURL } from '../../../config/config';

const IniciarSesion = () => {
  const location = useLocation();
  const [credenciales, setCredenciales] = useState({
    email: '',
    contrasena: '',
    rol:
      location.pathname.includes('admin')
        ? 1 // ADMIN_ROLE
        : 0 // USER_ROLE
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const identificarUsuario = (credenciales) => {
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(credenciales),
    };

    fetch(`${baseURL}/usuarios/identificar`, options)
    .then((res) => {
      if (res.status == 200) {
        setError('');
        return res.json();
      } else {
        setError('Los datos proporcionados son incorrectos');
      }
    })
    .then((data) => {
      if (!data) {
        return;
      }
      console.log('Inicio de sesión exitoso');
      localStorage.setItem('user', JSON.stringify(data));
      location.pathname.includes('admin')
        ? navigate('/admin')
        : navigate('/')
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    identificarUsuario(credenciales);
  };

  return (
    <div className={iniciarsesionstyles.container}>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={credenciales.email}
            onChange={(e) => setCredenciales({ ...credenciales, email: e.target.value })}
          />
        </div>
        <br />
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={credenciales.contrasena}
            onChange={(e) => setCredenciales({ ...credenciales, contrasena: e.target.value })}
          />
        </div>
        <br />
        <button className={iniciarsesionstyles.button} type="submit">Iniciar Sesión</button>
      </form>
      {error && <p style={{ textAlign:'center', color: 'red' }}>{error}</p>}
    </div>
  );
};

export default IniciarSesion;
