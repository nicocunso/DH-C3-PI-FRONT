import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import AgregarProductosStyles from './AgregarProductos.module.css';

const AgregarProducto = () => {
  const navigate = useNavigate();

  const [imagenes, setImagenes] = useState(undefined);
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
  // async function agregarImagenes (e) {
  //   let image = e.currentTarget.files[0];
  //   const buffer = await image.arrayBuffer();
  //   let byteArray = new Int8Array(buffer);
  //   setImagenes(byteArray);
    // const fileReader = new FileReader();
    // const file = e.currentTarget.files[0];
    // fileReader.readAsArrayBuffer(file);
    // const fileByte = getAsByteArray(file);
    // setImagenes(fileByte)
    // const buffer = file.arrayBuffer();
    // let byteArray = 
    // fr.readAsArrayBuffer(file)
    // fr.onload = function() {
    //   // you can keep blob or save blob to another position
    //   setImagenes(new Blob([fr.result]));

    //   // url for download
    //   // setImagenes(URL.createObjectURL(blob, {type: "image/png"}));
    // }
  // };

  // Función para obtener los autos
  const agregarVehiculo = (vehiculo) => {
    // const formData = new FormData();

    // formData.append('imageFiles', imagenes);
    // formData.append('auto', vehiculo);

    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(vehiculo),
    };

    fetch('http://localhost:8080/autos', options);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Agrego vehiculo
    agregarVehiculo(vehiculo);
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
      <div className={AgregarProductosStyles.backButton} onClick={() => navigate('/admin')}>
        <FontAwesomeIcon icon={faArrowLeft} className={AgregarProductosStyles.backIcon} />
      </div>
      <h2>Agregar Producto</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Categoría del Vehículo:
          <select name="tipo" onChange={handleChange}>
            <option selected disabled>Selecciona una categoría</option>
            <option value="1">Urbano</option>
            <option value="2">Sedan</option>
            <option value="3">Coupe</option>
            <option value="4">Deportivo</option>
            <option value="5">Todoterreno</option>
            <option value="6">SUV</option>
          </select>
        </label>
        <br />
        <label>
          Modelo :
          <input type="text" name="modelo" value={vehiculo.modelo} onChange={handleChange} />
        </label>
        <br />
        <label>
          Año de Fabricación:
          <input type="text" name="anno" value={vehiculo.anno} onChange={handleChange} />
        </label>
        {/* <br />
        <label for="imagenes">
          Imagenes: */}
          {/* <input type="text" name="imagenes" value={vehiculo.imagenes} onChange={handleChange} /> */}
          {/* <input
            type="file"
            id="imagenes"
            name="imagenes[]"
            accept="image/png, image/jpeg"
            multiple
            onChange={agregarImagenes}/>
        </label> */}
        <br />
        <label>
          Matrícula:
          <input type="text" name="matricula" value={vehiculo.matricula} onChange={handleChange} />
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
          <input type="text" name="precioXDia" value={vehiculo.precioXDia} onChange={handleChange} />
        </label>
        <br />
        <label>
          Estado:
          <input type="text" name="estado" value={vehiculo.estado} onChange={handleChange} />
        </label>
        <br />
        <label>
          Número de Puertas:
          <input type="text" name="numeroPuertas" value={vehiculo.numeroPuertas} onChange={handleChange} />
        </label>
        <br />
        <label>
          Aire Acondicionado:
          <input type="checkbox" name="aireAcondicionado" checked={vehiculo.aireAcondicionado} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Agregar Producto</button>
      </form>

      
    </div>
  );
};

export default AgregarProducto;