import React from 'react'
import buscadorStyles from './Buscador.module.css'
import imglupa from '../../assets/Lupa.png'
import imgcalendario from '../../assets/calendario.png'
import ReactDatePicker from 'react-datepicker' 



const Buscador = () => {
  return (
    <div className={buscadorStyles.container}>
      <h2 className={buscadorStyles.h2}>Busca tu mejor opción</h2>
      <div className={buscadorStyles.otroContainer}>
          <div className= {buscadorStyles.input}>
            <img src={imglupa} alt="logo lupa" className={buscadorStyles.logo}/>
            <input className={buscadorStyles.inputContainer} type="text" placeholder='Buscar auto'/>
          </div>
          <div className= {buscadorStyles.input}>
              <img src={imgcalendario} alt="logo calendario" className={buscadorStyles.logo}/>
              <input className={buscadorStyles.inputContainer} type="date" placeholder='Elegir fecha'/>
          </div>
        <button className={buscadorStyles.button}>Buscar</button>
      </div>
    </div>
  )
}
  
export default Buscador