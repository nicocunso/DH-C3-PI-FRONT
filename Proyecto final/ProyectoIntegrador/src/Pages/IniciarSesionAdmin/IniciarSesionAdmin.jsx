import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import iniciarsesionadminstyles from './IniciarSesionAdmin.module.css'

const IniciarSesionAdmin = () => {
  const [credencialesAdmin, setCredencialesAdmin] = useState({
    email: '',
    contrasenia: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();
  

  const validarInicioSesionAdmin = () => {
    
    const usuarioRegistrado = {
      email: 'usuarioadmin@gmail.com',
      contrasenia: '123456',
    };

    if (
      credencialesAdmin.email === usuarioRegistrado.email &&
      credencialesAdmin.contrasenia === usuarioRegistrado.contrasenia
      
    ) {
      
      setError('');
      console.log('Inicio de sesión exitoso');
      navigate('/admin')
    } else {
      
      setError('Los datos proporcionados son incorrectos');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validarInicioSesionAdmin();
    
  };

  return (
    <div className={iniciarsesionadminstyles.container}>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
        <label>
          Email:
          <input
            type="email"
            value={credencialesAdmin.email}
            onChange={(e) => setCredencialesAdmin({ ...credencialesAdmin, email: e.target.value })}
          />
        </label>
        <br />
        <label>
          Contraseña:
          <input
            type="password"
            value={credencialesAdmin.contrasenia}
            onChange={(e) => setCredencialesAdmin({ ...credencialesAdmin, contrasenia: e.target.value })}
          />
        </label>
        <br />
        <button className={iniciarsesionadminstyles.button} type="submit">Iniciar Sesión</button>
      </form>
      {error && <p style={{ textAlign:'center', color: 'red' }}>{error}</p>}
    </div>
  );
};

export default IniciarSesionAdmin;