import React, { useState, useEffect } from "react";
import '../css/components/Login.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/login.css";
import Loginimg from "../imagenes/Loginimg.png";
import Person from "../icons/person-fill.svg";
import Lock from "../icons/lock-fill.svg";
import Envelope from "../icons/envelope-fill.svg";
import { useUserContext } from "../context/contextUser/ContextUser";
import { useNavigate } from "react-router-dom";
import { login } from "../api/authUsuario";
import { ScaleLoader } from "react-spinners";

const Login = () => {
  const Navigate = useNavigate();
  const { globalContext, dispatch } = useUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log(globalContext.usuario)
    if (!globalContext.usuario.autenticado) {
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

  const handleLogin = async () => {
    setIsLoading(true);
    const data = {
      email: email,
      password: password,
    };
    console.log(data);

    try {
      const dataUsuario = await login(email, password);
      dispatch({ type: "LOGIN", payload: dataUsuario.token })
      window.localStorage.setItem('userPET', JSON.stringify(dataUsuario))
      Navigate('/Mascotas-Perdidas');
    } catch (error) {
      const errorCodeStatus = error.response.request.status;
      console.log(errorCodeStatus);
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 2000);
    }
    setIsLoading(false);

  };

  return (
    <div>
      <div style={{ backgroundColor: "#715523" }} class="text-bg p-3"></div>
      <div className="container login-container mt-md-1">
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
                <img src={Person} className="Person" alt="imagen de persona"></img>
              </div>
              <div className="text-center fs-1 fw-bold">Iniciar Sesión</div>
              <div
                className={`alert alert-danger ${error ? "alert--show" : "alert--hidden"}`}
                role="alert"
              >
                Usuario o contraseña incorrectos
              </div>
              <div className="input-group mt-5">
                <div className="input-group-text bg-brown">
                  <img src={Envelope} className="Envelope" alt="Imagen Envolpe"></img>
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
                  <img src={Lock} className="Lock" alt="Imagen Lock"></img>
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
                {
                  !isLoading ? (
                    "Iniciar Sesión"
                  ) :
                    (
                      <ScaleLoader
                        color="#36D7B7"
                        height={14}
                      />
                    )
                }
              </button>


            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#715523" }} class="text-bg p-4"></div>
    </div>
  );
};

export default Login;
