import React, { useState, useEffect } from 'react';
import autosCategoriasStyles from '../Autos/AutosCategorias.module.css';
import { CardRecomendacion } from '../../Recomendaciones/Cards/CardRecomendacion';
import DetalleRecomendacion from '../../Recomendaciones/Detalle/DetalleRecomendacion';
import { useParams } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import { baseURL } from '../../../config/config';
import Buscador from '../../Buscador/Buscador';
import Resultados from '../../Resultados/Resultados';

const AutosCategorias = () => {
  const params = useParams();
  const [mostrarDetalle, setMostrarDetalle] = useState(false);
  const [autosCategoriasSeleccionada, setAutosCategoriasSeleccionada] = useState(null);
  const [autosCategorias, setAutosCategorias] = useState([]);
  const [modeloFiltrado, setModeloFiltrado] = useState('');

  useEffect(() => { 
    obtenerAutosCategorias(params.id);
    barajarAutosCategorias();
  }, []);

  const obtenerAutosCategorias = (id) => {
    fetch(`${baseURL}/autos/categorias/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAutosCategorias(data);
      });
  }

  const barajarAutosCategorias = () => {
    const autosCategoriasBarajadas = [...autosCategorias];
    for (let i = autosCategoriasBarajadas.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [autosCategoriasBarajadas[i], autosCategoriasBarajadas[j]] = [
        autosCategoriasBarajadas[j],
        autosCategoriasBarajadas[i],
      ];
    }
    setAutosCategorias(autosCategoriasBarajadas);
  };

  const toggleDetalle = (autosCategorias) => {
    setAutosCategoriasSeleccionada(autosCategorias);
    setMostrarDetalle(true);
    console.log('Mostrar detalle:', mostrarDetalle);
  };

  const cerrarDetalle = () => {
    setAutosCategoriasSeleccionada(null);
    setMostrarDetalle(false);
  };

  const buscarAutosPorModelo = modelo => {
    setModeloFiltrado(modelo);
  };

  return (
    <div>
      <Buscador />
      <br />
      <h2 className={autosCategoriasStyles.h2}>Resultados</h2>
      <div className={autosCategoriasStyles.container}>
        {autosCategorias.map(autosCategoria => (
          <CardRecomendacion
            key={autosCategoria.id}
            recomendacion={autosCategoria}
            onVerDetalle={() => toggleDetalle(autosCategoria)}
          />
        ))}
      </div>
      {mostrarDetalle && (
        <DetalleRecomendacion
          recomendacion={autosCategoriasSeleccionada}
          onClose={cerrarDetalle}
        />
      )}
      <Resultados modeloFiltrado={modeloFiltrado} />
      <Footer/>
    </div>
  )
}

export default AutosCategorias;