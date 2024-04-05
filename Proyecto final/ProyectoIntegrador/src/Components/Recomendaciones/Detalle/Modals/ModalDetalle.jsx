import React, { useCallback, useState } from 'react';
import styles from "./ModalDetalle.module.css";
import { Calendar } from '@natscale/react-calendar';
import { useParams } from 'react-router-dom';
import { baseURL } from '../../../../config/config';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const ModalDetalle = ({open, close, reservasExistentes}) => {
    const [selectedDate, setSelectedDate] = useState([]);
    const params = useParams();
    const userJson = localStorage.getItem('user');
    const user = userJson ? JSON.parse(userJson) : "";

    const handleDateChange = useCallback((date) => {
        setSelectedDate(date);
    }, [setSelectedDate]);

    const isDisabled = useCallback((date) => {
        const dateFormatted = `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${("0" + date.getDate()).slice(-2)}`;
        for (let reservaExistente of reservasExistentes) {
            // disable wednesdays and any date that is divisible by 5
            if (dateFormatted == reservaExistente) {
                return true;
            }
        }
    }, []);

    const reservar = () => {
        if (!user) {
            window.location.href= '/iniciarSesion'
        }

        const startDate = `${selectedDate[0].getFullYear()}-${("0" + (selectedDate[0].getMonth() + 1)).slice(-2)}-${("0" + selectedDate[0].getDate()).slice(-2)}`;
        const finalDate = `${selectedDate[1].getFullYear()}-${("0" + (selectedDate[1].getMonth() + 1)).slice(-2)}-${("0" + selectedDate[1].getDate()).slice(-2)}`;
        const reserva = {
            fechaInicio: startDate,
            fechaDevolucion: finalDate,
            auto: {
                id: params.id
            }
        };

        const options = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify(reserva),
          };

          console.log(options);
      
          fetch(`${baseURL}/reservas/registrar`, options)
          .then(res => {
            showSwal(res.status);
          })
          .catch(e => {
            showSwal();
          })
    };

    const showSwal = (status) => {
        if (status === 200) {
            withReactContent(Swal).fire({
                title: 'Reserva completada con exito!',
                icon: 'success',
            })
            .then(() => {
                window.location.href= '/'
            })
        } else {
            withReactContent(Swal).fire({
                title: 'Hubo un error con la reserva',
                icon: 'error',
            })
        }
    };

    if (!open) return null

    return (
        <>
            <div className={styles.overlay} />
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                    <button onClick={close}>Volver</button>
                    <h2 style={{ textAlign:"center" }}>Reservas</h2>
                </div>
                <div className={styles.calendarContainer}>
                    <div className={styles.calendarWrapper}>
                        <div style={{display:"flex", justifyContent:"space-around"}}>
                            <h3 style={{ textAlign:"center" }}>Desde</h3>
                            <h3 style={{ textAlign:"center" }}>Hasta</h3>
                        </div>
                        <Calendar
                            hideAdjacentDates
                            showDualCalendar
                            isRangeSelector
                            isDisabled={isDisabled}
                            value={selectedDate}
                            onChange={handleDateChange}
                            />
                    </div>
                </div>
                <div className={styles.bookContainer}>
                    <button onClick={reservar}>Reservar</button>
                </div>
            </div>
        </>
    )
}

export default ModalDetalle;