import React from 'react'
import imglogo from '../../assets/logo.png'
import headerinicioStyles from './HeaderInicio.module.css'
import { Link } from 'react-router-dom';


const HeaderInicio = () => {

    return (
        <div className={headerinicioStyles.header}>
            <img className={headerinicioStyles.logo} src={imglogo} alt="Imagen logo" />
            <div className={headerinicioStyles.lineaVertical}></div> 
            <p className={headerinicioStyles.lema}>Explorá sin límites</p>
            <p>Bienvenido Usuario</p>
            <Link to= "/"><button>Cerrar Sesion</button></Link>
            <div className={headerinicioStyles.lineaHorizontal}></div> 
            </div>
        
    )
}

export default HeaderInicio