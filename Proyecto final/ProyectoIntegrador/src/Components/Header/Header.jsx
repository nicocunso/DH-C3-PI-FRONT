import React from 'react';
import imglogo from '../../assets/logo.png';
import headerStyles from './Header.module.css';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const user = localStorage.getItem('user');
    const location = useLocation();
    const isAdminUrl = location.pathname.includes('admin');

    function cerrarSesion() {
        const redirect =
            isAdminUrl
                ? '/admin/iniciarSesion'
                : '/';
        localStorage.removeItem('user');
        window.location.href = redirect
    };

    return (
        <div className={headerStyles.header}>
            <div className= {headerStyles.logoLink}>
                <Link to="/">
                    <img className={headerStyles.logo} src={imglogo} alt="Imagen logo" />
                </Link>
                <p className={headerStyles.lema}>Explorá sin límites</p>
            </div>
            <div className= {headerStyles.login}>
                { !user && !isAdminUrl && <Link to= "/crearCuenta"><button>Crear Cuenta</button></Link> }
                { !user && !isAdminUrl && <Link to="/iniciarSesion"><button>Iniciar Sesión</button></Link> }
                <div style={{ display:"flex" }}>
                    { user && <p>Bienvenido Usuario</p> }
                    { user && <button onClick={() => cerrarSesion()}>Cerrar Sesion</button> }
                </div>
            </div>
        </div>
    )
}

export default Header
