import React from 'react'
import imglogo from '../../assets/logo.png'
import headerStyles from './Header.module.css'
import { Link } from 'react-router-dom';

console.log(headerStyles);

const Header = ({mostrarbotones = true, dirigir=true}) => {

    

    return (
        <div className={headerStyles.header}>
            <img className={headerStyles.logo} src={imglogo} alt="Imagen logo" />
            <div className={headerStyles.lineaVertical}></div> 
            <p className={headerStyles.lema}>Explorá sin límites</p>
            { mostrarbotones &&
            <Link to= "/crearCuenta"><button>Crear Cuenta</button></Link>
        }

            {dirigir ? (<Link to="/iniciarSesion"><button>Iniciar Sesión</button></Link>)
             : (<Link to="/iniciarSesionAdmin"><button>Iniciar Sesión</button></Link>
)}
            <div className={headerStyles.lineaHorizontal}></div> 
            </div>
        
    )
}

export default Header
