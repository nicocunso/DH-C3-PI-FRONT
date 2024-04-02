import React, { useState } from "react";
import bodyStyles from "./Body.module.css";
import Buscador from "../Buscador/Buscador";
import Categorias from "../Categorias/Categorias";
import Footer from "../Footer/Footer";
import Recomendaciones from "../Recomendaciones/Recomendaciones";
import Header from "../Header/Header";
import Resultados from "../Resultados/Resultados";
import Whatsapp from "../whatsapp/Whatsapp";

const Body = () => {
  const [modeloFiltrado, setModeloFiltrado] = useState("");

  const buscarAutosPorModelo = (modelo) => {
    setModeloFiltrado(modelo);
  };

  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      buscarAutosPorModelo(event.target.value);
    }
  };

  return (
    <div className={bodyStyles.body}>
      <Header />
      <Buscador
        onBuscar={buscarAutosPorModelo}
        onEnterPress={handleEnterPress}
      />
      <Categorias />
      <Recomendaciones />
      <Whatsapp />
      <Resultados modeloFiltrado={modeloFiltrado} />
      <Footer />
    </div>
  );
};

export default Body;
