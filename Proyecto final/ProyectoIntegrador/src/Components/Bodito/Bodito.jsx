import React from 'react'
import Buscador from '../Buscador/Buscador';
import Categorias from '../Categorias/Categorias';
import Footer from '../Footer/Footer'
import Recomendaciones from '../Recomendaciones/Recomendaciones';
import boditostyles from './Bodito.module.css'
import Resultados from '../Resultados/Resultados';

const Bodito = () => {
  const [modeloFiltrado, setModeloFiltrado] = useState('');

  const buscarAutosPorModelo = modelo => {
    setModeloFiltrado(modelo);
  };

  return (
    <div className={boditostyles.body}>
      <Buscador onBuscar={buscarAutosPorModelo} />
      <Categorias/>
      <Recomendaciones/>
      <Resultados modeloFiltrado={modeloFiltrado} />
      <Footer/>
    </div>
  )
}

export default Bodito