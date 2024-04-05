import React, { useState, useEffect } from 'react';
import finalizadasStyle from './Finalizadas.module.css';
import { baseURL } from '../../../../config/config';

const Finalizadas = () => {
  const [reservas, setReservas] = useState([]);
  const userJson = localStorage.getItem('user');
  const user = userJson ? JSON.parse(userJson) : "";

  // Hook al montar el componente
  useEffect(() => {
    // Efecto secundario para obtener las reservas
    obtenerReservas();
  }, []);

  // Función para obtener las reservas
  const obtenerReservas = () => {
    const options = {
        headers: {
            'Authorization': `Bearer ${user.token}`
        }
    };

    fetch(`${baseURL}/reservas/usuarios`, options)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const fechaActual = new Date();
        const fechaActualFormatted = `${fechaActual.getFullYear()}-${("0" + (fechaActual.getMonth() + 1)).slice(-2)}-${("0" + fechaActual.getDate()).slice(-2)}`;
        console.log(fechaActualFormatted);

        let reservasFiltradas = data.filter(reserva =>
          Date.parse(reserva.fechaDevolucion) > Date.parse(fechaActualFormatted)
        );
        setReservas(reservasFiltradas);
      });
  }

  const reservasPorPagina = 6;
  const [paginaActual, setPaginaActual] = useState(1);

  const indiceUltimoReserva = paginaActual * reservasPorPagina;
  const indicePrimerReserva = indiceUltimoReserva - reservasPorPagina;
  const reservasActuales = reservas.slice(indicePrimerReserva, indiceUltimoReserva);

  const handleClickSiguiente = () => {
    setPaginaActual(paginaActual + 1);
  };

  const handleClickAtras = () => {
    if (paginaActual > 1) {
      setPaginaActual(paginaActual - 1);
    }
  };

  return (
    <div className={finalizadasStyle.container}>
      <h2>Lista de Reservas</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>fecha de Inicio</th>
            <th>fecha de Finalizacion</th>
          </tr>
        </thead>
        <tbody>
          {reservasActuales.map(reserva => (
            <tr key={reserva.id}>
              <td>{reserva.id}</td>
              <td>{reserva.fechaInicio}</td>
              <td>{reserva.fechaDevolucion}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={finalizadasStyle.paginacion}>
        <button onClick={handleClickAtras}>{'<'}</button>
        <button onClick={handleClickSiguiente}>{'>'}</button>
      </div>
    </div>
  );
};

export default Finalizadas;