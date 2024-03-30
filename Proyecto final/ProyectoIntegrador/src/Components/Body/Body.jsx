import React, { useState } from 'react';
import bodyStyles from './Body.module.css'; 
import Buscador from '../Buscador/Buscador';
import Categorias from '../Categorias/Categorias';
import Footer from '../Footer/Footer'
import Recomendaciones from '../Recomendaciones/Recomendaciones';
import Resultados from '../Resultados/Resultados';

const Body = () => {
  const [modeloFiltrado, setModeloFiltrado] = useState('');

  const buscarAutosPorModelo = modelo => {
    setModeloFiltrado(modelo);
  };

  return (
    <div className={bodyStyles.body}>
      <Buscador onBuscar={buscarAutosPorModelo} />
      <Categorias/>
      <Recomendaciones/>
      <Resultados modeloFiltrado={modeloFiltrado} />
      <Footer/>
    </div>
  );
}

export default Body;
