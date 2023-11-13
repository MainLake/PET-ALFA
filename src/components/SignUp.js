import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/signup.css";
import SignupImg from "../imagenes/Registroimg.png";
import Person from "../icons/person-fill.svg";
import axios from "axios";
import { useNavigate } from 'react-router-dom'

const Registro = () => {
  //datos para los alumnos 
  const [name, setName] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  //estado de error por, por si el usuarios ya existe
  const [dataError, setdataError] = useState(false);
  const [NewUser, setNewUser] = useState("");
  //estado para la redireccion al login
  const navigate = useNavigate()
  //el estado para ver contraseña
  const [ShowPSW, setShowPSW] = useState(false)
  //para cargar el cargador de datos
  const [loading, setLoading] = useState(false)

  const handleInputChange = () => {
    //no me sirve esta parte aun 
  };

  const handleSubmit = (evnt) => {
    evnt.preventDefault();
    setLoading(true)
    console.log('Subiendo datos');
    axios.post('https://api-lost-pets-prod-f456370d7007.herokuapp.com/api/v1/users/new', { name: name, lastname: lastname, email: email, password: password, cellphone: phoneNumber })
      .then(token => {
        console.log('token', token);
        setLoading(false)
        setNewUser("Usuario creado exitosamente");
        setTimeout(() => {
          setNewUser("");
          setName("");
          setlastname("");
          setEmail("");
          setPassword("");
          setPhoneNumber("");
          navigate("/Login")
        }, 5000);
      })
      .catch(error => {
        console.log('error', error);
        setLoading(false)
        setdataError(true)
        setTimeout(() => {
          setdataError(false)
        }, 5000);

      })
  };

  return (
    <>
      <div className="container registro-container">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center black-bg">
            <div className="image-container">
              <img
                src={SignupImg}
                alt="Imagen de nuevo usuario"
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
            <div className="bg-white p-5 rounded-5 text-secondary row g-2">
              <div className="d-flex justify-content-center">
                <img src={Person} className="Person" alt="Icono de nueusuario" />
              </div>
              <div className="text-center fs-1 fw-bold">Registro</div>
              {
                dataError === true ? (
                  <div className="alert alert-danger" role="alert">
                    Correo electronico ya existente
                  </div>
                ) : null
              }
              {
                NewUser && (
                  <div className="alert alert-success" role="alert">
                    {NewUser}
                  </div>
                )
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
                    placeholder="Introduce tu nombre"
                    required
                    value={name}
                    onChange={evnt => setName(evnt.target.value)}
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
                    placeholder="Introduce tus apellidos"
                    required
                    value={lastname}
                    onChange={evnt => setlastname(evnt.target.value)}
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
                    onChange={evnt => setEmail(evnt.target.value)}
                  />
                </div>
                <div className="">
                  <label htmlFor="password" className="form-label">
                    Contraseña:
                  </label>
                  <div className="input-group">
                    <input
                      type={ShowPSW ? "text" : "password"}
                      id="password"
                      name="password"
                      className="form-control"
                      placeholder="Introduce tu contraseña"
                      required
                      value={password}
                      onChange={evnt => setPassword(evnt.target.value)}
                    />
                    <span className="input-group-text" onClick={() => setShowPSW(!ShowPSW)}>
                      {
                        ShowPSW ? (
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
                            <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                            <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                            <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                          </svg>
                        )
                      }
                    </span>
                  </div>
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
                    onChange={evnt => setPhoneNumber(evnt.target.value)}
                  />
                </div>
                
                <button type="submit" className="btn btn-secondary w-100 mt-3">
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true">
                        {" "} Enviando...
                      </span>
                    </>
                  ):"Registrate"}
                </button>
              </form>
            </div>
          </div>
        </div >
      </div >
    </>
  );
};

export default Registro;