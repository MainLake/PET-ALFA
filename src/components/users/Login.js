import { useState, useEffect } from "react";

import '../../css/components/Login.css';
import "../../css/login.css";

import Loginimg from "../../imagenes/Loginimg.png";
import Person from "../../icons/person-fill.svg";
import Lock from "../../icons/lock-fill.svg";
import Envelope from "../../icons/envelope-fill.svg";

import { useNavigate } from "react-router-dom";
import { CSpinner } from "@coreui/react";
import { loginUser } from "../../api/users";
import { authUserStore } from "../../context/globalContext";
import { saveDataLocalStorage } from "../../localstorage/sesionLocalStorage";

import Footer from "../Footer";

const Login = () => {

  const { login, isAuthenticated } = authUserStore();

  const navigate = useNavigate();

  const [dataUserLogin, setDataUserLogin] = useState({
    email: "",
    password: ""
  })

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log(isAuthenticated)
    if(isAuthenticated) {
      navigate('/');
      return;
    }
  }, [isAuthenticated]);


  const handleLogin = async () => {

    setIsLoading(true);


    if (dataUserLogin.password.trim() === "" || dataUserLogin.password.trim() === "") {
      setIsLoading(false);
      setError("Correo y contrasena son necesarios!!");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }

    const response = await loginUser(dataUserLogin);
    setIsLoading(false);

    if (response.error) {
      console.log(response.error);
      setError(response.error);
      setTimeout(() => {
        setError("");
      }, 3000);

      return;
    }

    const dataSesion = {
      email: dataUserLogin.email,
      dataToken: response.data
    }

    // Guardar los datos en el estado global
    login(dataSesion);

    // Guardar los datos en local storage
    saveDataLocalStorage(dataSesion);
    setDataUserLogin({email:"", password:""});
    navigate('/');
    return;
  };

  return (

    <div>
      <div className="container login-container mt-md-0">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center black-bg">
            <div className="image-container">
              <img
                src={Loginimg}
                className="Login-img"
                alt="Descripción de la imagen"
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
                <img src={Person} className="Person" alt="imagen de persona"></img>

              </div>
              <div className="text-center fs-1 fw-bold">Iniciar Sesión</div>
              {
                // agregar contenedor vacio
                error !== "" ? (
                  <div className="alert alert-danger mt-3">
                    {error}
                  </div>

                ) : (
                  <div className="mt-3"></div>
                )
              }

              <div className="input-group mt-2">
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
                  value={dataUserLogin.email}
                  onChange={evt => setDataUserLogin({ ...dataUserLogin, email: evt.target.value })}
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
                  value={dataUserLogin.password}
                  onChange={evt => setDataUserLogin({ ...dataUserLogin, password: evt.target.value })}
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
                      <CSpinner color="primary" />
                    )
                }
              </button>


            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
