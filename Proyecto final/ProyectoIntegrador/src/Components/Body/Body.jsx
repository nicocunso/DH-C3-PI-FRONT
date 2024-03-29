import React from 'react';
import bodyStyles from './Body.module.css'; 
import Buscador from '../Buscador/Buscador';
import Categorias from '../Categorias/Categorias';
import Footer from '../Footer/Footer'
import Recomendaciones from '../Recomendaciones/Recomendaciones';
import Header from '../Header/Header';

const Body = () => {
  return (
    <div className={bodyStyles.body}>
      <Header/>
      <Buscador/>
      <Categorias/>
      <Recomendaciones/>
      <Footer/>
    </div>
  );
}

export default Body;