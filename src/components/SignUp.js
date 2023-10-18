import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/signup.css";
import SignupImg from "../imagenes/Registroimg.png";
import Person from "../icons/person-fill.svg";

const Registro = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "phoneNumber") {
      setPhoneNumber(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //Validaciones Robercito
    console.log("Datos de registro:", { name, email, password, phoneNumber });
  };

  return (
    <div className="container registro-container">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center align-items-center black-bg">
          <div className="image-container">
            <img
              src={SignupImg}
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
              <img src={Person} className="Person" alt="Icono de usuario" />
            </div>
            <div className="text-center fs-1 fw-bold">Registro</div>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="textName" className="form-label">
                  Nombre:
                </label>
                <input
                  type="text"
                  id="textName"
                  name="name"
                  className="form-control"
                  placeholder="Introduce tu nombre"
                  required
                  value={name}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="email" className="form-label">
                  Correo Electrónico:
                </label>
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
              <div>
                <label htmlFor="password" className="form-label">
                  Contraseña:
                </label>
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
              <div>
                <label htmlFor="phoneNumber" className="form-label">
                  Número de Teléfono:
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="form-control"
                  placeholder="Introduce tu número de teléfono"
                  required
                  value={phoneNumber}
                  onChange={handleInputChange}
                />
              </div>
              <button type="submit" className="btn btn-secondary w-100 mt-3">
                Registrarse
              </button>
            </form>
            {/* Mensaje de error */}
            {errorMessage && (
              <div className="text-danger mt-3">{errorMessage}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registro;
