import React, { useState } from 'react';
import iniciarsesionstyles from './IniciarSesion.module.css'
import { useNavigate } from 'react-router-dom';

const IniciarSesion = () => {
  const [credenciales, setCredenciales] = useState({
    email: '',
    contrasenia: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validarInicioSesion = () => {
    
    const usuarioRegistrado = {
      email: 'usuario@gmail.com',
      contrasenia: '123456',
    };

    if (
      credenciales.email === usuarioRegistrado.email &&
      credenciales.contrasenia === usuarioRegistrado.contrasenia
      
    ) {
      
      setError('');
      console.log('Inicio de sesión exitoso');
      navigate('/inicio')
    } else {
      
      setError('Los datos proporcionados son incorrectos');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validarInicioSesion();
    
  };

  return (
    <div className={iniciarsesionstyles.container}>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
        <label>
          Email:
          <input
            type="email"
            value={credenciales.email}
            onChange={(e) => setCredenciales({ ...credenciales, email: e.target.value })}
          />
        </label>
        <br />
        <label>
          Contraseña:
          <input
            type="password"
            value={credenciales.contrasenia}
            onChange={(e) => setCredenciales({ ...credenciales, contrasenia: e.target.value })}
          />
        </label>
        <br />
        <button className={iniciarsesionstyles.button} type="submit">Iniciar Sesión</button>
      </form>
      {error && <p style={{ textAlign:'center', color: 'red' }}>{error}</p>}
    </div>
  );
};

export default IniciarSesion;
