import React, { useState, useCallback, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faUsers,
  faCarCrash,
  faCar,
  faGasPump,
  faShieldAlt,
  faSnowflake,
  faKey,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./DetalleRecomendacion.module.css";
import '@natscale/react-calendar/dist/main.css';
import { baseURL } from "../../../config/config";
import ModalDetalle from "./Modals/ModalDetalle";

const DetalleRecomendacion = () => {
  const params = useParams();
  const [recomendacion, setRecomendacion] = useState({
    modelo: '',
    anno: '',
    precioXDia: ''
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [imagenes, setImagenes] = useState([]);
  const [reservasExistentes, setReservasExistentes] = useState([]);

  // Hook al montar el componente
  useEffect(() => {
    // Efectos secundarios para obtener el auto y sus imagenes
    obtenerVehiculo(params.id);
  }, []);

  // Función para obtener el auto
  const obtenerVehiculo = (id) => {
    fetch(`${baseURL}/autos/${id}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setRecomendacion(data);
      obtenerImagenes(data);
      obtenerReservas(data);
    });
  };

  // Función para obtener las imagenes del auto
  const obtenerImagenes = (vehiculo) => {
    const imagenes = vehiculo.imagenes;

    for (let imagen of imagenes) {
      fetch(`${baseURL}/autos/${vehiculo.id}/imagenes/${imagen.id}`)
      .then((res) => {
        return res.blob();
      })
      .then((blob) => {
        const data = URL.createObjectURL(blob);
        setImagenes(imagenes => [...imagenes, data]);
      });
    }
  }

  // Función para obtener las reservas existentes
  const obtenerReservas = (vehiculo) => {
    fetch(`${baseURL}/reservas/autos/${vehiculo.id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setReservasExistentes(data);
        setIsLoading(false);
      });
  }

  if (isLoading) {
    return (
      <div>
        <h1>Cargando...</h1>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.titulo}>
        {/* <h2>{recomendaciones[Params.id - 1].marca}</h2> */}
        <h1>{recomendacion.modelo.toUpperCase()}</h1>
        <Link to="/">
          <button>Volver</button>
        </Link>
      </div>
      <div className={styles.imagenesWrapper}>
        <img
          src={imagenes[0]}
          alt="Primera Imagen"
          className={styles.primerImagen}
        />
        <div className={styles.segundaImagen}>
          <div className={styles.imagenGridTop}>
            {imagenes.slice(1, 3).map((imagen, index) => (
              <img
                key={index}
                src={imagen}
                alt={`Imagen ${index + 1}`}
                className={`${styles.imagen} ${styles.imagenGrilla}`}
              />
            ))}
          </div>
          <div className={styles.imagenGridBottom}>
            {imagenes.slice(3).map((imagen, index) => (
              <img
                key={index}
                src={imagen}
                alt={`Imagen ${index + 1}`}
                className={`${styles.imagen} ${styles.imagenGrilla}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.descriptionColumn}>
          <div className={styles.info}>
            <h3 style={{ textAlign:"center" }}>Descripción</h3>
            <p className={styles.texto}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              <br />
              <br />
            </p>
            <div className={styles.price}>
              {recomendacion.precioXDia}
            </div>
            <br />
            <ModalDetalle open = {isOpen} close = { () => setIsOpen(false)} reservasExistentes = {reservasExistentes} />
            <div className={styles.botonAlquilar}>
              <button onClick = {() => setIsOpen(true)}>Alquilar ahora</button>
            </div>
          </div>
          <br />
        </div>
        <div className={styles.infoColumn}>
          <br />
          <div>
            <h3 style={{ textAlign:"center" }}>Características</h3>
          </div>
          <div className={styles.infoBox}>
            <div className={styles.iconContainer}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faShieldAlt} />
                <p>Seguro vehicular</p>
              </div>
              <br />
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faCarCrash} />
                <p>Airbag</p>
              </div>
              <br />
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faKey} />
                <p>Cierre centralizado</p>
              </div>
            </div>
            <h2>
              <FontAwesomeIcon icon={faCalendarAlt} /> Año:{" "}
              {recomendacion.anno}
            </h2>
            {/* <h2>
              <FontAwesomeIcon icon={faUsers} />{" "}
              {recomendaciones[Params.id - 1].personas}
            </h2> */}
            <h2>
              <FontAwesomeIcon icon={faCar} /> 5 puertas
            </h2>
            <h2>
              <FontAwesomeIcon icon={faSnowflake} />{" Aire Acondicionado"}
              {/* {recomendaciones[Params.id - 1].aireAcondicionado} */}
            </h2>
            <h2>
              <FontAwesomeIcon icon={faGasPump} /> Nafta
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalleRecomendacion;
