import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/login.css";
import Loginimg from "../imagenes/Loginimg.png";
import Person from "../icons/person-fill.svg";
import Lock from "../icons/lock-fill.svg";
import Envelope from "../icons/envelope-fill.svg";

import jwtDecode from "jwt-decode";
import axios from "axios";

import { useUserContext } from "../context/contextUser/ContextUser";
import { BASE_PATH } from "../utilities/constAPI";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const Navigate = useNavigate();
  const [user, setUser] = useUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!user) {
      Navigate("/Login");
    }
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleLogin = () => {
    const data = {
      email: email,
      password: password,
    };

    console.log(data);

    axios
      .post(`${BASE_PATH}/users/login/`, data)
      .then((response) => {
        const token = response.data;
        const tokenDecoded = jwtDecode(token);
        const userObject = {
          id: tokenDecoded.id,
          token: token,
        };
        console.log(userObject);
        window.localStorage.setItem("userPET", JSON.stringify(userObject));
        setUser(userObject);
        Navigate("/Reportar-Mascotas");
      })
      .catch((error) => {
        console.log(error);
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 3000);
      });
  };

  return (
    <div className="container login-container mt-md-5">
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
            {error ? (
              <div className="alert alert-danger" role="alert">
                Usuario o contraseña incorrectos
              </div>
            ) : null}
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
            <div className="input-group mt-5 mb-3">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
