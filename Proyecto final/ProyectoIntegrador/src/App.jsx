import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Body from './Components/Body/Body';
import AgregarProducto from './Pages/AgregarProductos/AgregarProducto';
import DetalleRecomendacion from './Components/DetalleRecomendacion/DetalleRecomendacion';
import Header from './Components/Header/Header'; 
import PanelAdmin from './Pages/AgregarProductos/panelAdmin/panelAdmin'
import CrearCuenta from './Pages/AgregarProductos/crearCuenta/CrearCuenta'
import IniciarSesion from './Pages/AgregarProductos/iniciarSesion/IniciarSesion'
import IniciarSesionAdmin from './Pages/AgregarProductos/IniciarSesionAdmin/IniciarSesionAdmin'
import Bodito from './Components/Bodito/Bodito'



function App() {
  const [recomendacionSeleccionada, setRecomendacionSeleccionada] = useState();

  const handleCloseDetalle = () => {
    setRecomendacionSeleccionada(null);
  };

  const handleSeleccionarRecomendacion = (recomendacion) => {
    setRecomendacionSeleccionada(recomendacion);
  };

  return (
    <>
      <Header /> 
      <Routes>
        <Route path="/" element={<Body handleSeleccionarRecomendacion={handleSeleccionarRecomendacion} />} />
        <Route path="/administración" element={<AgregarProducto />} />
        <Route path="/Detail/:id" element={<DetalleRecomendacion onClose={handleCloseDetalle} />} />
        <Route path='/' element={<Body/>}/>
        <Route path='/admin' element={<PanelAdmin/>}/>
        <Route path='/admin/agregarProductos' element={<AgregarProducto/>}/>
        <Route path='/crearCuenta' element= {<CrearCuenta/>}></Route>
        <Route path='/iniciarSesion' element= {<IniciarSesion/>}></Route>
        <Route path='/iniciarSesionAdmin' element= {<IniciarSesionAdmin/>}></Route>
        <Route path='/inicio' element = {<Bodito/>}></Route>
        
      </Routes>
    </>
  );
}

export default App;
