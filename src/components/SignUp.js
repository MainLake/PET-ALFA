import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/signup.css";
import SignupImg from "../imagenes/Registroimg.png";
import Person from "../icons/person-fill.svg";
import Footer from "./Footer";


import { createAccount } from "../api/request/users";
import { CSpinner } from "@coreui/react";

const Registro = () => {

  const [newUser, setNewUser] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    phoneNumber: "",
  })

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (evt) => {

    evt.preventDefault();

    // Validar que sea un numero de telefono
    const phoneRegExp = /^[0-9]{10}$/;
    if (!phoneRegExp.test(newUser.phoneNumber)) {
      setError("El número de teléfono debe contener 10 dígitos");
      setTimeout(() => {

        setError("");

      }, 3000);
      return;
    }

    // Validar que sea un nombre y apellidos validos
    const nameRegExp = /^[a-zA-Z\s]*$/;
    if (!nameRegExp.test(newUser.name) || !nameRegExp.test(newUser.lastname)) {
      setError("El nombre y apellidos solo pueden contener letras");
      setTimeout(() => {

        setError("");

      }, 3000);
      return;
    }

    // Contrasena de al menos 6 caracteres, una letra mayuscula y un numero
    const passwordRegExp = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{6,}$/;
    if (!passwordRegExp.test(newUser.password)) {
      setError("La contraseña debe contener al menos 6 caracteres, una letra mayúscula y un número");
      setTimeout(() => {

        setError("");

      }, 3000);
      return;
    }

    setLoading(true);

    const response = await createAccount(newUser);

    setLoading(false);
    console.log(response)

    if (response.error) {

      console.log("seteando error")

      setError(response.error);
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }

    setSuccess("Usuario creado exitosamente");
    setTimeout(() => {
      setSuccess("");
    }, 3000);


  };

  return (

    <>
      <div className="container registro-container mt-4">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center black-bg">
            <div className="image-container">
              <img
                src={SignupImg}
                alt="Imagen de que contiene el logo de la página y un perro"
                style={{
                  maxHeight: "700px",
                  maxWidth: "100%",
                  width: "600px",
                  height: "auto",
                }}
              />

            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center custom-bg">
            <div className="bg-white p-5 rounded-5 text-secondary">
              <div className="d-flex justify-content-center">
                <img src={Person} className="Person" alt="Icono de nueusuario" />
              </div>
              <div className="text-center fs-1 fw-bold">Registro</div>
              {
                error !== "" ? (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                ) : null
              }

              {
                success !== "" ? (
                  <div className="alert alert-success" role="alert">
                    {success}
                  </div>
                ) : null
              }
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
                    placeholder="Ej: Juan José"
                    required
                    value={newUser.name}
                    onChange={evt => setNewUser({ ...newUser, name: evt.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="lastname" className="form-label">
                    Apellido:
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    className="form-control"
                    placeholder="Ej: Pérez López"
                    required
                    value={newUser.lastname}
                    onChange={evt => setNewUser({ ...newUser, lastname: evt.target.value })}
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
                    placeholder="Ej: example@example.com"
                    required
                    value={newUser.email}
                    onChange={evt => setNewUser({ ...newUser, email: evt.target.value })}
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
                    value={newUser.password}
                    onChange={evt => setNewUser({ ...newUser, password: evt.target.value })}
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
                    placeholder="Ej: 1234567890"
                    required
                    value={newUser.phoneNumber}
                    onChange={evt => setNewUser({ ...newUser, phoneNumber: evt.target.value })}
                  />
                </div>
                <div>
                  {
                    loading ? (
                      <div className="d-flex justify-content-center mt-3">
                        <CSpinner color="primary" />
                      </div>
                    ) : (
                      <button type="submit" className="btn btn-secondary w-100 mt-3">
                        Registrarse
                      </button>
                    )
                  }

                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Registro;