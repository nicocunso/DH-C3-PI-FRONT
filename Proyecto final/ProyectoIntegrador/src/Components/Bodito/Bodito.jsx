import React from 'react'
import Buscador from '../Buscador/Buscador';
import Categorias from '../Categorias/Categorias';
import Footer from '../Footer/Footer'
import Recomendaciones from '../Recomendaciones/Recomendaciones';
import boditostyles from './Bodito.module.css'
import Header from '../Header/Header';

const Bodito = () => {
  return (
    <div className={boditostyles.body}>
      <Header/>
      <Buscador/>
      <Categorias/>
      <Recomendaciones/>
      <Footer/>
    </div>
  )
}

export default Bodito