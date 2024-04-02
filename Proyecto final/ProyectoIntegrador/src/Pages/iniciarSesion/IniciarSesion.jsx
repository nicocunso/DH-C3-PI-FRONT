import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import iniciarsesionstyles from "./IniciarSesion.module.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { MsgSuccess } from "../../helpers/MsgSuccess";
import { MsgError } from "../../helpers/MsgError";
import "react-toastify/dist/ReactToastify.css";

const IniciarSesion = () => {
  const location = useLocation();
  const [credenciales, setCredenciales] = useState({
    email: "",
    contrasena: "",
    rol: location.pathname.includes("admin")
      ? 1 // ADMIN_ROLE
      : 0, // USER_ROLE
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const identificarUsuario = async (credenciales) => {
    try {
      const res = fetch("http://localhost:8080/usuarios/identificar", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(credenciales),
      });

      if (res.status == 200) {
        const data = await res.json();

        localStorage.setItem("user", JSON.stringify(data));

        MsgSuccess(`Usuario logueado correctamente!!`);

        setTimeout(() => {
          location.pathname.includes("admin")
            ? navigate("/admin")
            : navigate("/inicio");
        }, 4000);
      } else {
        MsgError("Los datos proporcionados son incorrectos");
      }
    } catch (e) {
      throw new Error(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    identificarUsuario(credenciales);
  };

  return (
    <div className={iniciarsesionstyles.container}>
      <h5>Iniciar Sesión</h5>
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: "400px", margin: "auto" }}
      >
        <label>
          <h3>Email</h3>
          <input
            type="email"
            value={credenciales.email}
            onChange={(e) =>
              setCredenciales({ ...credenciales, email: e.target.value })
            }
          />
        </label>
        <br />
        <label>
          <h3>Contraseña</h3>
          <input
            type="password"
            value={credenciales.contrasena}
            onChange={(e) =>
              setCredenciales({ ...credenciales, contrasena: e.target.value })
            }
          />
        </label>
        <br />
        <button className={iniciarsesionstyles.buttoniden} type="submit">
          Iniciar Sesión
        </button>
      </form>
      {error && <p style={{ textAlign: "center", color: "red" }}>{error}</p>}
    </div>
  );
};

export default IniciarSesion;
