import React from 'react';
import bodyStyles from './Body.module.css'; 
import Buscador from '../Buscador/Buscador';
import Categorias from '../Categorias/Categorias';
import Footer from '../Footer/Footer'
import Recomendaciones from '../Recomendaciones/Recomendaciones';
import Resultados from '../Resultados/Resultados';
import Whatsapp from "../whatsapp/Whatsapp";

const Body = () => {

  return (
    <div className={bodyStyles.body}>
      <Buscador />
      <Categorias />
      <Whatsapp />
      <Recomendaciones />
      <Resultados />
      <Footer />
    </div>
  );
};

export default Body;
