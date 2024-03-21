import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const Autenticador = ({ children }) => {
    const userJson = localStorage.getItem('user');
    const user = userJson ? JSON.parse(userJson) : "";
    const location = useLocation();
    const role =
      location.pathname.includes('admin')
        ? 'ROLE_ADMIN'
        : 'ROLE_USER';
    const redirect =
      role === 'ROLE_ADMIN'
        ? '/admin/iniciarSesion'
        : '/iniciarSesion';
  
    return user && user.rol === role
      ? children
      : <Navigate to={redirect} replace />;
}

export default Autenticador;