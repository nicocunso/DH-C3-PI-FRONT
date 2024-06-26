import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AgregarProductosStyles from './AgregarProductos.module.css';
import { baseURL } from '../../config/config';

const AgregarProducto = () => {
  const navigate = useNavigate();

  const [imagenes, setImagenes] = useState([]);
  const [vehiculo, setVehiculo] = useState({
    matricula: '',
    modelo: '',
    anno: '',
    tipoCombustible: '',
    kilometraje: '',
    precioXDia: '',
    estado: '',
    numeroPuertas: '',
    aireAcondicionado: 0,
    tipo: {
      id: ''
    }
  });

  // Función para agregar imagenes
  async function agregarImagenes (e) {
    setImagenes(e.target.files);
  };

  // Función para obtener los autos
  const agregarVehiculo = (vehiculo, imagenes) => {
    const data = new FormData();

    data.append('auto', JSON.stringify(vehiculo));
    for (let imagen of imagenes) {
      data.append('imageFiles', imagen);
    }

    const options = {
      method: 'POST',
      body: data
    };

    fetch(`${baseURL}/autos`, options);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Agrego vehiculo
    agregarVehiculo(vehiculo, imagenes);
    console.log('Datos enviados:', vehiculo);

    navigate('/admin');
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setVehiculo((prevVehiculo) => ({
      ...prevVehiculo,
      [name]:
        type === 'checkbox'
          ? 1
          : name === 'tipo'
            ? { id: value }
            : value
    }));
  };

  return (
    
    <div className={AgregarProductosStyles.container}>
      <div className={AgregarProductosStyles.titleAndButton}>
        <h2>Agregar Vehículo</h2>
        <div className={AgregarProductosStyles.backButton} onClick={() => navigate('/admin')}>
          <button>Atras</button>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Categoría:</label>
          <select name="tipo" onChange={handleChange}>
            <option selected disabled>Selecciona una categoría</option>
            <option value="1">Urbano</option>
            <option value="2">Sedan</option>
            <option value="3">Coupe</option>
            <option value="4">Deportivo</option>
            <option value="5">Todoterreno</option>
            <option value="6">SUV</option>
          </select>
        </div>
        <br />
        <div>
          <label>Modelo:</label>
          <input type="text" name="modelo" value={vehiculo.modelo} onChange={handleChange} />
        </div>
        <br />
        <div>
          <label>Año de Fabricación:</label>
          <input type="text" name="anno" value={vehiculo.anno} onChange={handleChange} />
        </div>
        <br />
        <label for="imagenes">
          Imagenes:
          {/* <input type="text" name="imagenes" value={vehiculo.imagenes} onChange={handleChange} /> */}
          <input
            type="file"
            // id="imagenes"
            // name="imagenes[]"
            accept="image/png, image/jpeg"
            multiple
            onChange={agregarImagenes}/>
        </label>
        <br />
        <div>
          <label>Matrícula:</label>
          <input type="text" name="matricula" value={vehiculo.matricula} onChange={handleChange} />
        </div>
        <br />
        <div>
          <label>Tipo de Combustible:</label>
          <input type="text" name="tipoCombustible" value={vehiculo.tipoCombustible} onChange={handleChange} />
        </div>
        <br />
        <div>
          <label>Kilometraje:</label>
          <input type="text" name="kilometraje" value={vehiculo.kilometraje} onChange={handleChange} />
        </div>
        <br />
        <div>
          <label>Precio por Día:</label>
          <input type="text" name="precioXDia" value={vehiculo.precioXDia} onChange={handleChange} />
        </div>
        <br />
        <div>
          <label>Estado:</label>
          <input type="text" name="estado" value={vehiculo.estado} onChange={handleChange} />
        </div>
        <br />
        <div>
          <label>Número de Puertas:</label>
          <input type="text" name="numeroPuertas" value={vehiculo.numeroPuertas} onChange={handleChange} />
        </div>
        <br />
        <button type="submit">Agregar Producto</button>
      </form>

      
    </div>
  );
};

export default AgregarProducto;
