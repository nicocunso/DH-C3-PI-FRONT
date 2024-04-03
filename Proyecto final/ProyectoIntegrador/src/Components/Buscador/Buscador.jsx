import React, { useState } from 'react';
import buscadorStyles from './Buscador.module.css';
import imglupa from '../../assets/Lupa.png';
import imgcalendario from '../../assets/calendario.png';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Buscador = () => {
  const [searchString, setSearchString] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  let redir = (searchString) => {
    if (!searchString) {
      window.alert('Por favor ingresar el modelo deseado para la busqueda');
      return;
    }
    window.location.href = `/busqueda/${searchString}`;
  }

  const handleDateChange = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const handleStringChange = e => {
    setSearchString(e.target.value);
  };

  return (
    <div className={buscadorStyles.container}>
      <h2 className={buscadorStyles.h2}>Busca tu mejor opción</h2>
      <div className={buscadorStyles.otroContainer}>
        <div className={buscadorStyles.input}>
          <img src={imglupa} alt="logo lupa" className={buscadorStyles.logo} />
          <input
            className={buscadorStyles.inputContainer}
            type="text"
            placeholder='  Buscar auto'
            onChange={handleStringChange}
          />
        </div>
        <div className={buscadorStyles.input}>
          <img src={imgcalendario} alt="logo calendario" className={buscadorStyles.logo} />
          <ReactDatePicker
            className={buscadorStyles.inputContainer}
            selected={startDate}
            onChange={handleDateChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            placeholderText="  Elegir rango de fechas"
          />
        </div>
        <button className={buscadorStyles.button} onClick={() => redir(searchString)}>Buscar</button>
      </div>
    </div>
  );
};

export default Buscador;
