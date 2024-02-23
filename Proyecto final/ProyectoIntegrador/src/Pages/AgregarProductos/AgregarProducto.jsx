import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import AgregarProductosStyles from './AgregarProductos.module.css';

const AgregarProducto = () => {
  const navigate = useNavigate();
  const [categoria, setCategoria] = useState('');
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [anioFabricacion, setAnioFabricacion] = useState('');
  const [imagenURL, setImagenURL] = useState('');
  const [matricula, setMatricula] = useState('');
  const [placa, setPlaca] = useState('');
  const [color, setColor] = useState('');
  const [tipoCombustible, setTipoCombustible] = useState('');
  const [kilometraje, setKilometraje] = useState('');
  const [precioPorDia, setPrecioPorDia] = useState('');
  const [estado, setEstado] = useState('');
  const [numPuertas, setNumPuertas] = useState('');
  const [aireAcondicionado, setAireAcondicionado] = useState(false); // Cambiado a booleano
  const [tipoMaleta, setTipoMaleta] = useState('');
  const [creado, setCreado] = useState('');
  const [actualizado, setActualizado] = useState('');
  const [creadoPor, setCreadoPor] = useState('');
  const [actualizadoPor, setActualizadoPor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Agrego vehiculo
    console.log('Datos enviados:', {
      categoria,
      marca,
      modelo,
      anioFabricacion,
      imagenURL,
      matricula,
      placa,
      color,
      tipoCombustible,
      kilometraje,
      precioPorDia,
      estado,
      numPuertas,
      aireAcondicionado,
      tipoMaleta,
      creado,
      actualizado,
      creadoPor,
      actualizadoPor
    });
    // Redirig a la página principal 
    navigate('/');
  };

  return (
    <div className={AgregarProductosStyles.container}>
      <div className={AgregarProductosStyles.backButton} onClick={() => navigate('/')}>
        <FontAwesomeIcon icon={faArrowLeft} className={AgregarProductosStyles.backIcon} />
      </div>
      <h2>Agregar Producto</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Categoría del Vehículo:
          <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
            <option value="">Selecciona una categoría</option>
            <option value="auto">Auto</option>
            <option value="suvs">SUVs</option>
          </select>
        </label>
        <br />
        <label>
          Marca :
          <input type="text" value={marca} onChange={(e) => setMarca(e.target.value)} />
        </label>
        <br />
        <label>
          Modelo :
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
        {/* Nuevos campos */}
        <label>
          Matrícula:
          <input type="text" value={matricula} onChange={(e) => setMatricula(e.target.value)} />
        </label>
        <br />
        <label>
          Placa:
          <input type="text" value={placa} onChange={(e) => setPlaca(e.target.value)} />
        </label>
        <br />
        <label>
          Color:
          <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
        </label>
        <br />
        <label>
          Tipo de Combustible:
          <input type="text" value={tipoCombustible} onChange={(e) => setTipoCombustible(e.target.value)} />
        </label>
        <br />
        <label>
          Kilometraje:
          <input type="text" value={kilometraje} onChange={(e) => setKilometraje(e.target.value)} />
        </label>
        <br />
        <label>
          Precio por Día:
          <input type="text" value={precioPorDia} onChange={(e) => setPrecioPorDia(e.target.value)} />
        </label>
        <br />
        <label>
          Estado:
          <input type="text" value={estado} onChange={(e) => setEstado(e.target.value)} />
        </label>
        <br />
        <label>
          Número de Puertas:
          <input type="text" value={numPuertas} onChange={(e) => setNumPuertas(e.target.value)} />
        </label>
        <br />
        <label>
          Aire Acondicionado:
          <input type="checkbox" checked={aireAcondicionado} onChange={() => setAireAcondicionado(!aireAcondicionado)} />
        </label>
        <br />
        <label>
          Tipo de Maleta:
          <input type="text" value={tipoMaleta} onChange={(e) => setTipoMaleta(e.target.value)} />
        </label>
        <br />
        <label>
          Creado:
          <input type="text" value={creado} onChange={(e) => setCreado(e.target.value)} />
        </label>
        <br />
        <label>
          Actualizado:
          <input type="text" value={actualizado} onChange={(e) => setActualizado(e.target.value)} />
        </label>
        <br />
        <label>
          Creado por:
          <input type="text" value={creadoPor} onChange={(e) => setCreadoPor(e.target.value)} />
        </label>
        <br />
        <label>
          Actualizado por:
          <input type="text" value={actualizadoPor} onChange={(e) => setActualizadoPor(e.target.value)} />
        </label>
        <br />
        <button type="submit">Agregar Producto</button>
      </form>
    </div>
  );
};

export default AgregarProducto