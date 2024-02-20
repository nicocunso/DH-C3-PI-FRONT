import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AgregarProductosStyles from './AgregarProductos.module.css'

const AgregarProducto = () => {
  const navigate = useNavigate();
  const [categoria, setCategoria] = useState('');
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [anioFabricacion, setAnioFabricacion] = useState('');
  const [imagenURL, setImagenURL] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Agrego vehiculo
    console.log('Datos enviados:', { categoria, marca, modelo, anioFabricacion, imagenURL });
    // Redirig a la página principal 
    navigate('/');
  };

  return (
    <div className={AgregarProductosStyles.container}>
      <h2>Agregar Producto</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Categoría del Vehículo:
          <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
            <option value="">Selecciona una categoría</option>
            <option value="auto">Auto</option>
            <option value="suvs">SUVs</option>
            <option value="moto">Moto</option>
            <option value="camion">Camión</option>
          </select>
        </label>
        <br />
        <label>
          Marca vehiculo:
          <input type="text" value={marca} onChange={(e) => setMarca(e.target.value)} />
        </label>
        <br />
        <label>
          Modelo vehiculo:
          <input type="text" value={modelo} onChange={(e) => setModelo(e.target.value)} />
        </label>
        <br />
        <label>
          Año de Fabricación:
          <input type="text" value={anioFabricacion} onChange={(e) => setAnioFabricacion(e.target.value)} />
        </label>
        <br />
        <label>
          URL de la Imagen:
          <input type="text" value={imagenURL} onChange={(e) => setImagenURL(e.target.value)} />
        </label>
        <br />
        <button type="submit">Agregar Producto</button>
      </form>
    </div>
  );
};

export default AgregarProducto;