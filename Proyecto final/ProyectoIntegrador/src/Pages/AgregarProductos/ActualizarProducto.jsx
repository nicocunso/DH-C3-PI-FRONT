import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import AgregarProductosStyles from './AgregarProductos.module.css';

const ActualizarProducto = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [vehiculo, setVehiculo] = useState({
    id: '',
    kilometraje: '',
    precioXDia: '',
    estado: '',
    aireAcondicionado: 0,
    tipo: {
      id: ''
    }
  });

  // Hook al montar el componente
  useEffect(() => {
    // Efecto secundario para obtener el auto
    obtenerVehiculo(params.id);
  }, []);

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
  const obtenerVehiculo = (id) => {
    fetch(`http://localhost:8080/autos/${id}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setVehiculo(data);
    });
  };

  // Función para actualizar los autos
  const actualizarVehiculo = (vehiculo) => {
    // const formData = new FormData();

    // // formData.append('imageFiles', imagenes);
    // formData.append('auto', vehiculo);

    const options = {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(vehiculo),
    };

    fetch(`http://localhost:8080/autos`, options);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Agrego vehiculo
    actualizarVehiculo(vehiculo);
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
      <h2>Actualizar Producto</h2>
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
          <select name="estado" onChange={handleChange}>
            <option selected disabled>Selecciona una categoría</option>
            <option value="activo">Activo</option>
            <option value="inactivo">Inactivo</option>
          </select>
        </label>
        <br />
        <label>
          Aire Acondicionado:
          <input type="checkbox" name="aireAcondicionado" checked={vehiculo.aireAcondicionado} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Actualizar Producto</button>
      </form>

      
    </div>
  );
};

export default ActualizarProducto;