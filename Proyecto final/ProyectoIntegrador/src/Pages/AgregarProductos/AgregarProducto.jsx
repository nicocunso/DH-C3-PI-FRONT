import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';
import { faArrowLeft } from '@fontawesome/free-solid-svg-icons';
import AgregarProductosStyles from './AgregarProductos.module.css';

const AgregarProducto = () => {
  const navigate = useNavigate();

  const [vehiculo, setVehiculo] = useState({
    id:'',
    categoria: '',
    marca: '',
    modelo: '',
    anioFabricacion: '',
    imagenURL: '',
    matricula: '',
    placa: '',
    color: '',
    tipoCombustible: '',
    kilometraje: '',
    precioPorDia: '',
    estado: '',
    numPuertas: '',
    aireAcondicionado: false,
    tipoMaleta: '',
    actualizado: '',
    creadoPor: '',
    actualizadoPor: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Agrego vehiculo
    console.log('Datos enviados:', vehiculo);
    
    navigate('/admin');  
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setVehiculo((prevVehiculo) => ({
      ...prevVehiculo,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div className={AgregarProductosStyles.container}>
      <div className={AgregarProductosStyles.backButton} onClick={() => navigate('/admin')}>
        <FontAwesomeIcon icon={faArrowLeft} className={AgregarProductosStyles.backIcon} />
      </div>
      <h2>Agregar Producto</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Categoría del Vehículo:
          <select name="categoria" value={vehiculo.categoria} onChange={handleChange}>
            <option value="">Selecciona una categoría</option>
            <option value="auto">Auto</option>
            <option value="suvs">SUVs</option>
          </select>
        </label>
        <br />
        <label>
          id :
          <input type="text" name="id" value={vehiculo.id} onChange={handleChange} />
        </label>
        <br />
        <label>
          Marca :
          <input type="text" name="marca" value={vehiculo.marca} onChange={handleChange} />
        </label>
        <br />
        <label>
          Modelo :
          <input type="text" name="modelo" value={vehiculo.modelo} onChange={handleChange} />
        </label>
        <br />
        <label>
          Año de Fabricación:
          <input type="text" name="anioFabricacion" value={vehiculo.anioFabricacion} onChange={handleChange} />
        </label>
        <br />
        <label>
          URL de la Imagen:
          <input type="text" name="imagenURL" value={vehiculo.imagenURL} onChange={handleChange} />
        </label>
        <br />
        
        <label>
          Matrícula:
          <input type="text" name="matricula" value={vehiculo.matricula} onChange={handleChange} />
        </label>
        <br />
        <label>
          Placa:
          <input type="text" name="placa" value={vehiculo.placa} onChange={handleChange} />
        </label>
        <br />
        <label>
          Color:
          <input type="text" name="color" value={vehiculo.color} onChange={handleChange} />
        </label>
        <br />
        <label>
          Tipo de Combustible:
          <input type="text" name="tipoCombustible" value={vehiculo.tipoCombustible} onChange={handleChange} />
        </label>
        <br />
        <label>
          Kilometraje:
          <input type="text" name="kilometraje" value={vehiculo.kilometraje} onChange={handleChange} />
        </label>
        <br />
        <label>
          Precio por Día:
          <input type="text" name="precioPorDia" value={vehiculo.precioPorDia} onChange={handleChange} />
        </label>
        <br />
        <label>
          Estado:
          <input type="text" name="estado" value={vehiculo.estado} onChange={handleChange} />
        </label>
        <br />
        <label>
          Número de Puertas:
          <input type="text" name="numPuertas" value={vehiculo.numPuertas} onChange={handleChange} />
        </label>
        <br />
        <label>
          Aire Acondicionado:
          <input type="checkbox" name="aireAcondicionado" checked={vehiculo.aireAcondicionado} onChange={handleChange} />
        </label>
        <br />
        <label>
          Tipo de Maleta:
          <input type="text" name="tipoMaleta" value={vehiculo.tipoMaleta} onChange={handleChange} />
        </label>
        <br />
        <label>
          Actualizado:
          <input type="text" name="actualizado" value={vehiculo.actualizado} onChange={handleChange} />
        </label>
        <br />
        <label>
          Creado por:
          <input type="text" name="creadoPor" value={vehiculo.creadoPor} onChange={handleChange} />
        </label>
        <br />
        <label>
          Actualizado por:
          <input type="text" name="actualizadoPor" value={vehiculo.actualizadoPor} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Agregar Producto</button>
      </form>

      
    </div>
  );
};

export default AgregarProducto;
