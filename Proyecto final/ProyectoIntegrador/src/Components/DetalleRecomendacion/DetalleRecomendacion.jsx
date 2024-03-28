import React from "react";
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

import toyota from "../../assets/toyotacorolla.jpg";
import Toyota1 from "../../assets/ToyotaCorolla/Toyota1.png";
import Toyota2 from "../../assets/ToyotaCorolla/Toyota2.jpeg";
import Toyota3 from "../../assets/ToyotaCorolla/Toyota3.jpeg";
import Toyota4 from "../../assets/ToyotaCorolla/Toyota4.jpeg";

import nissan1 from "../../assets/Nissan/nissan1.jpg";
import nissan2 from "../../assets/Nissan/nissan2.png";
import nissan3 from "../../assets/Nissan/nissan3.png";
import nissan4 from "../../assets/Nissan/nissan4.webp";
import nissan5 from "../../assets/Nissan/nissan5.jpg";

import civic from "../../assets/HondaCivic/civic.jpg";
import HCivic1 from "../../assets/HondaCivic/HCivic1.jpg";
import HCivic2 from "../../assets/HondaCivic/HCivic2.jpg";
import HCivic3 from "../../assets/HondaCivic/HCivic3.jpg";
import HCivic4 from "../../assets/HondaCivic/HCivic4.jpg";

import ford from "../../assets/FordMustang/ford.png";
import Mustang1 from "../../assets/FordMustang/Mustang1.jpg";
import Mustang2 from "../../assets/FordMustang/Mustang2.jpg";
import Mustang3 from "../../assets/FordMustang/Mustang3.jpg";
import Mustang4 from "../../assets/FordMustang/Mustang4.jpg";

import camaro from "../../assets/ChevroletCamaro/camaro.jpg";
import camaro1 from "../../assets/ChevroletCamaro/camaro1.jpg";
import camaro2 from "../../assets/ChevroletCamaro/camaro2.png";
import camaro3 from "../../assets/ChevroletCamaro/camaro3.jpg";
import camaro4 from "../../assets/ChevroletCamaro/camaro4.jpg";

import golf from "../../assets/golf.jpg";
import golf1 from "../../assets/Golf/golf1.jpg";
import golf2 from "../../assets/Golf/golf2.jpg";
import golf3 from "../../assets/Golf/golf3.jpg";
import golf4 from "../../assets/Golf/golf4.jpg";

import bmw from "../../assets/bmw/bmw.png";
import bmw1 from "../../assets/bmw/bmw1.jpg";
import bmw2 from "../../assets/bmw/bmw2.jpg";
import bmw3 from "../../assets/bmw/bmw3.png";
import bmw4 from "../../assets/bmw/bmw4.jpg";

import mercedes0 from "../../assets/Mercedes/mercedes0.png";
import mercedes2 from "../../assets/Mercedes/mercedes2.jpg";
import mercedes3 from "../../assets/Mercedes/mercedes3.webp";
import mercedes4 from "../../assets/Mercedes/mercedes4.png";
import mercedes5 from "../../assets/Mercedes/mercedes5.jpeg";

import audi1 from "../../assets/Audi/audi1.png";
import audi2 from "../../assets/Audi/audi2.jpg";
import audi3 from "../../assets/Audi/audi3.jpg";
import audi4 from "../../assets/Audi/audi4.jpg";
import audi5 from "../../assets/Audi/audi5.jpg";

import hyundai1 from "../../assets/Hyundai/hyundai1.jpg";
import hyundai2 from "../../assets/Hyundai/hyundai2.jpg";
import hyundai3 from "../../assets/Hyundai/hyundai3.jpg";
import hyundai4 from "../../assets/Hyundai/hyundai4.jpg";
import hyundai5 from "../../assets/Hyundai/hyundai5.jpg";

const DetalleRecomendacion = ({ recomendacion, onClose }) => {
  const Params = useParams();

  let recomendaciones = [
    {
      id: 1,
      marca: "Toyota",
      modelo: "Corolla",
      anio: 2022,
      personas: "4 Personas",
      airbag: "Air bag",
      aire: "Aire acondicionado",
      precio: "US$ 200",
      imagen: [toyota, Toyota1, Toyota2, Toyota3, Toyota4],
    },
    {
      id: 2,
      marca: "Honda",
      modelo: "Civic",
      anio: 2021,
      personas: "4 Personas",
      airbag: "Air bag",
      aire: "Aire acondicionado",
      precio: "US$ 200",
      imagen: [civic, HCivic1, HCivic2, HCivic3, HCivic4],
    },
    {
      id: 3,
      marca: "Ford",
      modelo: "Mustang",
      anio: 2023,
      personas: "5 Personas",
      airbag: "Air bag",
      aire: "Aire acondicionado",
      precio: "US$ 230",
      imagen: [ford, Mustang1, Mustang2, Mustang3, Mustang4],
    },
    {
      id: 4,
      marca: "Chevrolet",
      modelo: "Camaro",
      anio: 2020,
      personas: "5 Personas",
      airbag: "Air bag",
      aire: "Aire acondicionado",
      precio: "US$ 250",
      imagen: [camaro, camaro1, camaro2, camaro3, camaro4],
    },
    {
      id: 5,
      marca: "Volkswagen",
      modelo: "Golf",
      anio: 2022,
      personas: "5 Personas",
      airbag: "Air bag",
      aire: "Aire acondicionado",
      precio: "US$ 100",
      imagen: [golf1, golf, golf2, golf3, golf4],
    },
    {
      id: 6,
      marca: "BMW",
      modelo: "Serie 3",
      anio: 2021,
      personas: "5 Personas",
      airbag: "Air bag",
      aire: "Aire acondicionado",
      precio: "US$ 300",
      imagen: [bmw, bmw1, bmw2, bmw3, bmw4],
    },
    {
      id: 7,
      marca: "Mercedes-Benz",
      modelo: "Clase C",
      anio: 2024,
      personas: "5 Personas",
      airbag: "Air bag",
      aire: "Aire acondicionado",
      precio: "US$ 300",
      imagen: [mercedes0, mercedes2, mercedes3, mercedes4, mercedes5],
    },
    {
      id: 8,
      marca: "Audi",
      modelo: "A4",
      anio: 2020,
      personas: "5 Personas",
      airbag: "Air bag",
      aire: "Aire acondicionado",
      precio: "US$ 300",
      imagen: [audi1, audi2, audi3, audi4, audi5],
    },
    {
      id: 9,
      marca: "Nissan",
      modelo: "Altima",
      anio: 2023,
      personas: "5 Personas",
      airbag: "Air bag",
      aire: "Aire acondicionado",
      precio: "US$ 250",
      imagen: [nissan1, nissan2, nissan3, nissan4, nissan5],
    },
    {
      id: 10,
      marca: "Hyundai",
      modelo: "Elantra",
      anio: 2022,
      personas: "5 Personas",
      airbag: "Air bag",
      aire: "Aire acondicionado",
      precio: "US$ 250",
      imagen: [hyundai1, hyundai2, hyundai3, hyundai4, hyundai5],
    },
  ];

  const recomendacionActual = recomendaciones.find(
    (rec) => rec.id.toString() === Params.id
  );

  return (
    <div className={styles.container}>
      
      <div className={styles.buttonContainer}>
      <Link to="/">
        <button className={styles.botondetalle}>Volver</button>
      </Link>
    </div>
      <div className={styles.titulo}>
        <h2>{recomendaciones[Params.id - 1].marca}</h2>
        <h2>{recomendaciones[Params.id - 1].modelo}</h2>
      </div>
      <div className={styles.imagenesWrapper}>
        <div className={styles.divauto}>
        <img 
          src={recomendacionActual.imagen[0]}
          alt="Primera Imagen"
          className={styles.primerImagen}
        />
        </div>
        <div className={styles.cuadricula}>
        <div className={styles.imagenGridTop}>
  {recomendacionActual.imagen.slice(1, 3).map((imagen, index) => (
    <img
      key={index}
      src={imagen}
      alt={`Imagen ${index + 1}`}
      className={`${styles.imagen} ${styles.imagenGrilla}`}
    />
  ))}
</div>
<div className={styles.imagenGridBottom}>
  {recomendacionActual.imagen.slice(3).map((imagen, index) => (
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
            <h3 className={styles.h3}>Descripción</h3>
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
              {recomendaciones[Params.id - 1].precio}
            </div>
            <br />
            <div className={styles.botonAlquilar}>
              <button className={styles.botondetalle}>Alquilar</button>
            </div>
          </div>
          <br />
        </div>
        <div className={styles.infoColumn}>
          <br />
          <div>
            <h3 className={styles.h3}>Características</h3>
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
              {recomendaciones[Params.id - 1].anio}
            </h2>
            <h2>
              <FontAwesomeIcon icon={faUsers} />{" "}
              {recomendaciones[Params.id - 1].personas}
            </h2>
            <h2>
              <FontAwesomeIcon icon={faCar} /> 5 puertas
            </h2>
            <h2>
              <FontAwesomeIcon icon={faSnowflake} />{" "}
              {recomendaciones[Params.id - 1].aire}
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
