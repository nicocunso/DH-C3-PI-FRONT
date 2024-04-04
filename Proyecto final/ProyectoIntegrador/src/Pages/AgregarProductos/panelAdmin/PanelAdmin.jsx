import React, { useState } from 'react';
import panelAdminStyles from './PanelAdmin.module.css';
import ListaProductos from '../../../Components/ListaProductos/ListaProductos';
import ListaUsuarios from '../../../Components/ListaUsuarios/ListaUsuarios';
import Footer from '../../../Components/Footer/Footer';
import { Link } from 'react-router-dom';

const PanelAdmin = () => {
  const [mostrarListaProductos, setMostrarListaProductos] = useState(false);
  const [mostrarListaUsuarios, setMostrarListaUsuarios] = useState(false);
  const handleToggleListaProductos = () => {
    setMostrarListaProductos(!mostrarListaProductos);
  };
  const handleToggleListaUsuarios = () => {
    setMostrarListaUsuarios(!mostrarListaUsuarios);
  };

  return (
    <div className={panelAdminStyles.padre}>
      <div className={panelAdminStyles.container}>
        <div className={panelAdminStyles.containernav}>
          <Link className={panelAdminStyles.link} to="/admin/agregarProductos">
            <button className={panelAdminStyles.button}>Agregar Productos</button>
          </Link>
          <button className={panelAdminStyles.button} onClick={handleToggleListaProductos}>
            Listar Productos
          </button>
          <button className={panelAdminStyles.button} onClick={handleToggleListaUsuarios}>
            Listar Usuarios
          </button>
        </div>
        {mostrarListaProductos && !mostrarListaUsuarios && <ListaProductos />}
        {mostrarListaUsuarios && !mostrarListaProductos && <ListaUsuarios />}
      </div>
      <Footer />
    </div>
  );
};

export default PanelAdmin;
