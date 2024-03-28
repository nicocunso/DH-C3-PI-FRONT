import React from 'react';
import imglogo from '../../assets/logo.png';
import headerStyles from './Header.module.css';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ acceder = true }) => {
    const user = localStorage.getItem('user');
    const location = useLocation();

    function cerrarSesion() {
        const redirect =
            location.pathname.includes('admin')
            ? '/admin/iniciarSesion'
            : '/';
        localStorage.removeItem('user');
        window.location.href = redirect
    };

    return (
        <div className={headerStyles.header}>
            <div className={headerStyles.divlogo}>
            <Link to="/" className={headerStyles.logoLink}>
                <img className={headerStyles.logo} src={imglogo} alt="Imagen logo" />
            </Link>
            
            <p className={headerStyles.lema}>Explorá sin límites</p>
            </div>
            <div className={headerStyles.botonesdiv}>
            { acceder && !user && <Link to= "/crearCuenta"><button className={headerStyles.buttonh}>Crear Cuenta</button></Link> }
            { acceder && !user && <Link to="/iniciarSesion"><button className={headerStyles.buttonh}>Iniciar Sesión</button></Link> }
            { user && <button onClick={() => cerrarSesion()}>Cerrar Sesion</button> }
            </div>
            
        </div>
    )
}

export default Header
