import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link to="/" className={headerStyles.logoLink}>
                <img className={headerStyles.logo} src={imglogo} alt="Imagen logo" />
            </Link>
            <div className={headerStyles.lineaVertical}></div> 
            <p className={headerStyles.lema}>Explorá sin límites</p>
            { acceder && !user && <Link to= "/crearCuenta"><button>Crear Cuenta</button></Link> }
            { acceder && !user && <Link to="/iniciarSesion"><button>Iniciar Sesión</button></Link> }
            { user && <button onClick={() => cerrarSesion()}>Cerrar Sesion</button> }
            <div className={headerStyles.lineaHorizontal}></div> 
        </div>
    )
}

export default Header
