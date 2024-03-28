import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import iniciarsesionstyles from './IniciarSesion.module.css'
import { useNavigate } from 'react-router-dom';

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

    fetch('http://localhost:8080/usuarios/identificar', options)
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
        : navigate('/inicio')
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    identificarUsuario(credenciales);
  };

  return (
    <div className={iniciarsesionstyles.container}>
      <h5>Iniciar Sesión</h5>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
        <label>
          <h3>Email</h3>
          <input
            type="email"
            value={credenciales.email}
            onChange={(e) => setCredenciales({ ...credenciales, email: e.target.value })}
          />
        </label>
        <br />
        <label>
          <h3>Contraseña</h3>
          <input
            type="password"
            value={credenciales.contrasena}
            onChange={(e) => setCredenciales({ ...credenciales, contrasena: e.target.value })}
          />
        </label>
        <br />
        <button className={iniciarsesionstyles.buttoniden} type="submit">Iniciar Sesión</button>
      </form>
      {error && <p style={{ textAlign:'center', color: 'red' }}>{error}</p>}
    </div>
  );
};

export default IniciarSesion;
