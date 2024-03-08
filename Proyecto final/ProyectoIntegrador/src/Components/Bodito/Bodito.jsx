import React from 'react'
import Buscador from '../Buscador/Buscador';
import Categorias from '../Categorias/Categorias';
import Footer from '../Footer/Footer'
import Recomendaciones from '../Recomendaciones/Recomendaciones';
import boditostyles from './Bodito.module.css'
import HeaderInicio from '../HeaderInicio/HeaderInicio';

const Bodito = () => {
  return (
    <div className={boditostyles.body}>
      <HeaderInicio/>
      <Buscador/>
      <Categorias/>
      <Recomendaciones/>
      <Footer/>

    </div>
  )
}

export default Bodito