import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/signup.css";
import SignupImg from "../imagenes/Registroimg.png";
import Person from "../icons/person-fill.svg";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

const Registro = () => {
  //datos para los alumnos 
  const [name, setName] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  //estado de error por, por si el usuarios ya existe
  const [dataError, setdataError] = useState(false);
  const [NewUser, setNewUser]= useState("");
  //estado para la redireccion al login
  const navigate = useNavigate()

  const handleInputChange = () => {
    //no me sirve esta parte aun 
  };

  const handleSubmit = (evnt) => {
    evnt.preventDefault();
    console.log('Subiendo datos');
    axios.post('https://api-lost-pets-prod-f456370d7007.herokuapp.com/api/v1/users/new', { name: name, lastname: lastname, email: email, password: password, cellphone: phoneNumber })
      .then(token => {
        console.log('token', token);
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
            <div className="bg-white p-5 rounded-5 text-secondary">
              <div className="d-flex justify-content-center">
                <img src={Person} className="Person" alt="Icono de nueusuario" />
              </div>
              <div className="text-center fs-1 fw-bold">Registro</div>
              {
                dataError == true? (
                  <div className="alert alert-danger" role="alert">
                    Correo electronico ya existente
                  </div>
                ):null
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
                    onChange={evnt => setPassword(evnt.target.value)}
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
                    onChange={evnt => setPhoneNumber(evnt.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-secondary w-100 mt-3">
                  Registrarse
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registro;
