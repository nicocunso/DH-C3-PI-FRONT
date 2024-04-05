import React, { useState } from 'react';
import misReservasStyles from './MisReservas.module.css';
import Pendientes from './categorias/Pendientes';
import Activas from './categorias/Activas';
import Finalizadas from './categorias/Finalizadas';
import Footer from '../../../Components/Footer/Footer';

const MisReservas = () => {
  const [mostrarPendientes, setMostrarPendientes] = useState(false);
  const [mostrarActivas, setMostrarActivas] = useState(false);
  const [mostrarFinalizadas, setMostrarFinalizadas] = useState(false);

  const handleTogglePendientes = () => {
    setMostrarPendientes(!mostrarPendientes);
  };

  const handleToggleActivas = () => {
    setMostrarActivas(!mostrarActivas);
  };

  const handleToggleFinalizadas = () => {
    setMostrarFinalizadas(!mostrarFinalizadas);
  };

  return (
    <div className={misReservasStyles.padre}>
      <div className={misReservasStyles.container}>
        <div className={misReservasStyles.containernav}>
          <button className={misReservasStyles.button} onClick={handleTogglePendientes}>
            Pendientes
          </button>
          <button className={misReservasStyles.button} onClick={handleToggleActivas}>
            Activas
          </button>
          <button className={misReservasStyles.button} onClick={handleToggleFinalizadas}>
            Finalizadas
          </button>
        </div>
        {mostrarPendientes && !mostrarActivas && !mostrarFinalizadas && <Pendientes />}
        {mostrarActivas && !mostrarPendientes && !mostrarFinalizadas && <Activas />}
        {mostrarFinalizadas && !mostrarPendientes && !mostrarActivas && <Finalizadas />}
      </div>
      <Footer />
    </div>
  );
};

export default MisReservas;
