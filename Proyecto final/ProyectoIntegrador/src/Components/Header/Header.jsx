import React from 'react'
import imglogo from '../../assets/logo.png'
import headerStyles from './Header.module.css'

console.log(headerStyles);

const Header = () => {

    const botones = ['Crear cuenta', 'Iniciar sesión']

    return (
        <div className={headerStyles.header}>
            <img className={headerStyles.logo} src={imglogo} alt="Imagen logo" />
            <div className={headerStyles.lineaVertical}></div> 
            <p className={headerStyles.lema}>Explorá sin límites</p>
            <div className={headerStyles.botones}>
                {botones.map((boton, index) => {
                return <button key={index}>{boton}</button>
                })}
            <div className={headerStyles.lineaHorizontal}></div> 
            </div>
        </div>
    )
}

export default Header
