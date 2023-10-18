import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/login.css";
import Loginimg from "../imagenes/Loginimg.png";
import Person from "../icons/person-fill.svg";
import Lock from "../icons/lock-fill.svg";
import Envelope from "../icons/envelope-fill.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleLogin = () => {
    if (email === "usuario@example.com" && password === "contraseña") {
      alert("Inicio de sesión exitoso");
    } else {
      setErrorMessage("Correo o Contraseña Incorrectos.");
    }
  };

  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center align-items-center black-bg">
          <div className="image-container">
            <img
              src={Loginimg}
              className="Login-img"
              alt="Descripción de la imagen"
              style={{
                maxHeight: "650px",
                maxWidth: "100%",
                width: "600px",
                height: "auto",
              }}
            />
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center cream-bg">
          <div className="bg-white p-5 rounded-5 text-secondary">
            <div className="d-flex justify-content-center">
              <img src={Person} className="Person"></img>
            </div>
            <div className="text-center fs-1 fw-bold">Iniciar Sesión</div>
            <div className="input-group mt-5">
              <div className="input-group-text bg-brown">
                <img src={Envelope} className="Envelope"></img>
              </div>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Introduce tu email"
                required
                value={email}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-group mt-5">
              <div className="input-group-text bg-brown">
                <img src={Lock} className="Lock"></img>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                placeholder="Introduce tu contraseña"
                required
                value={password}
                onChange={handleInputChange}
              />
            </div>
            <button
              type="button"
              className="btn btn-secondary w-100 mt-3"
              onClick={handleLogin}
            >
              Iniciar Sesión
            </button>
            {errorMessage && (
              <div className="text-danger mt-3">{errorMessage}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
