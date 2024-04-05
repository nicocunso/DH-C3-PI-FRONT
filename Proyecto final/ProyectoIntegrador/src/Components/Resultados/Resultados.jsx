import React, { useState, useEffect } from 'react';
import CardRecomendacion from '../Recomendaciones/Cards/CardRecomendacion';
import resultadosStyles from '../Resultados/Resultados.module.css';
import { baseURL } from '../../config/config';
import DetalleRecomendacion from '../Recomendaciones/Detalle/DetalleRecomendacion';
import { useParams } from 'react-router-dom';
import Buscador from '../Buscador/Buscador';
import Categorias from '../Categorias/Categorias';
import Footer from '../Footer/Footer';
import Recomendaciones from '../Recomendaciones/Recomendaciones';

const Resultados = () => {
  const [mostrarDetalle, setMostrarDetalle] = useState(false);
  const [autos, setAutos] = useState([]);
  const params = useParams();
  const searchString = params && params.searchString ? params.searchString.split(";") : "";
  const modeloFiltrado = searchString ? searchString[0] : "";
  const fechaInicio = searchString ? searchString[1] : "";
  const fechaFin = searchString ? searchString[2] : "";

  useEffect(() => {
    const obtenerAutosFiltrados = async () => {
      try {
        let autosFiltrados;

        if (modeloFiltrado && fechaInicio && fechaFin) {
          const responseReservas = await fetch(`${baseURL}/reservas/${fechaInicio}/${fechaFin}`);
          if (!responseReservas.ok) {
            throw new Error('Error al obtener las reservas');
          }

          const dataReservas = await responseReservas.json();
          let reservas = dataReservas;

          const responseAutos = await fetch(`${baseURL}/autos`);
          if (!responseAutos.ok) {
            throw new Error('Error al obtener los autos');
          }

          const dataAutos = await responseAutos.json();
          let autos = dataAutos;
          console.log("autosFiltrados modelo filtrado antes de filtrar");
          console.log(autos);

          // Filtrar autos por modelo si hay un modelo filtrado
          autosFiltrados = autos.filter(auto =>
            auto.modelo.toLowerCase().includes(modeloFiltrado.toLowerCase()) && 
            reservas.every(reserva => auto.id != reserva)
          );
        } else {
          const response = await fetch(`${baseURL}/autos`);

          if (!response.ok) {
            throw new Error('Error al obtener los datos de los autos');
          }

          const data = await response.json();
          autosFiltrados = data;
        }

        setAutos(autosFiltrados);
      } catch (error) {
        console.error(error);
      }
    };

    obtenerAutosFiltrados();
  }, [modeloFiltrado]);

  const toggleDetalle = (recomendacion) => {
    setRecomendacionSeleccionada(recomendacion);
    setMostrarDetalle(true);
  };

  // Renderizar resultados solo si hay autos y el modelo filtrado no está vacío
  return (
    <div>
      { modeloFiltrado && <Buscador/> }
      { modeloFiltrado && <Categorias/> }
      <br />
      <h2 className={resultadosStyles.h2}>{ modeloFiltrado ? modeloFiltrado : "Conocé nuestra flota" }</h2>
      <div className={resultadosStyles.container}>
        {autos.map(autos => (
          <CardRecomendacion
            key={autos.id}
            recomendacion={autos}
            onVerDetalle={() => toggleDetalle(autos)}
          />
        ))}
      </div>
      {mostrarDetalle && (
        <DetalleRecomendacion/>
      )}
      { modeloFiltrado && <Footer/> }
    </div>
  );
};

export default Resultados;
