import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Body from './Components/Body/Body';
import DetalleRecomendacion from './Components/Recomendaciones/Detalle/DetalleRecomendacion';
import Header from './Components/Header/Header'; 
import PanelAdmin from './Pages/AgregarProductos/panelAdmin/panelAdmin'
import AgregarProducto from './Pages/AgregarProductos/AgregarProducto';
import ActualizarProducto from './Pages/AgregarProductos/ActualizarProducto'
import CrearCuenta from './Pages/AgregarProductos/crearCuenta/CrearCuenta'
import IniciarSesion from './Pages/AgregarProductos/iniciarSesion/IniciarSesion'
import Bodito from './Components/Bodito/Bodito'
import Autenticador from './Components/Autenticador/Autenticador';
import AutosCategorias from './Components/Categorias/Autos/AutosCategorias';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Body/>} />
        <Route path="/categorias/:id/autos" element={<AutosCategorias />} />
        <Route path="/administración" element={<AgregarProducto />} />
        <Route path="/detalle/:id" element={<DetalleRecomendacion/>} />
        <Route path='/' element={<Body/>}/>
        <Route path='/inicio' element = {<Bodito/>}></Route>
        <Route path='/crearCuenta' element= {<CrearCuenta/>}></Route>
        <Route path='/iniciarSesion' element= {<IniciarSesion/>}></Route>
        <Route path='/admin/iniciarSesion' element= {<IniciarSesion/>}></Route>
        <Route path='/admin' element={
          <Autenticador>
            <PanelAdmin/>
          </Autenticador>
        }/>
        <Route path='/admin/agregarProductos' element={
          <Autenticador>
            <AgregarProducto/>
          </Autenticador>
        }/>
        <Route path='/admin/actualizarProductos/:id' element={
          <Autenticador>
            <ActualizarProducto/>
          </Autenticador>
        }/>
      </Routes>
    </>
  );
}

export default App;
