import React, { useState } from 'react';
import Header from '../../../Components/Header/Header';
import panelAdminStyles from './PanelAdmin.module.css';
import ListaProductos from '../../../Components/ListaProductos/ListaProductos';
import Footer from '../../../Components/Footer/Footer';
import { Link, useNavigate } from 'react-router-dom';

const PanelAdmin = () => {
  const [mostrarListaProductos, setMostrarListaProductos] = useState(false);
  
  

  const handleToggleListaProductos = () => {
    setMostrarListaProductos(!mostrarListaProductos);
  };
  
    
  

  return (
    <div className={panelAdminStyles.padre}>
      <Header mostrarbotones={false} dirigir={false} />
      <div className={panelAdminStyles.container}>
        <div className={panelAdminStyles.containernav}>
          <Link className={panelAdminStyles.link} to="/admin/agregarProductos">
            <button className={panelAdminStyles.button}>Agregar Productos</button>
          </Link>
          <button className={panelAdminStyles.button} onClick={handleToggleListaProductos}>
            Listar Productos
          </button>
        </div>

        {mostrarListaProductos && <ListaProductos />}

      </div>

      <Footer />

    </div>
  );
};

export default PanelAdmin;
