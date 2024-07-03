import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CSpinner } from "@coreui/react";
import { loginUser } from "../../api/users";
import { authUserStore } from "../../context/globalContext";
import { saveDataLocalStorage } from "../../localstorage/sesionLocalStorage";

// Importaciones de imagenes
import Loginimg from "../../imagenes/LoginDesingPet1 1.png";
import logoPet from "../../imagenes/LogoPet.png"

//importaciones de estilos CSS
import '../../css/login.css'

import jwtDecode from "jwt-decode";

const Login = () => {

  const navigate = useNavigate();

  const { login, isAuthenticated } = authUserStore();

  const [dataUserLogin, setDataUserLogin] = useState({
    email: "",
    password: ""
  })

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
      return;
    }
  }, [isAuthenticated]);


  const handleLogin = async () => {

    setIsLoading(true);

    if (dataUserLogin.password.trim() === "" || dataUserLogin.password.trim() === "") {
      setIsLoading(false);
      setError("Correo y contraseña son necesarios!!");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }

    const response = await loginUser(dataUserLogin);

    if (response.error) {

      setIsLoading(false);

      setError(response.error);

      setTimeout(() => {
        setError("");
      }, 3000);

      return;
    }

    // Decodificar el token
    const dataToken = await jwtDecode(response.data.token);

    // Objeto que guarda los datos de la sesion
    const dataSesion = {
      email: dataUserLogin.email,
      dataToken: response.data,
      role: dataToken.role
    }

    // Guardar los datos en el estado global
    login(dataSesion);

    // Guardar los datos en local storage
    saveDataLocalStorage(dataSesion);

    setDataUserLogin({ email: "", password: "" });
    setIsLoading(false);
    navigate('/');

    return;
  };

  return (
    <div className="login-container">
      <div className="imgFromLog">
        <img src={Loginimg} alt="imagen del formulario" className="imgFromLog" />
      </div>

      <div className="form-section"> 
        <div className="logo-section">
          <img src={logoPet} alt="logo pet" className="logoPet"></img>
          <h4>PET</h4>
          <h2>Iniciar sesión</h2>
          <h6 className="welcome-title">Bienvenido!</h6>
        </div>
        {
          // agregar contenedor vacio
          error !== "" ? (
            <div>
              {error}
            </div>

          ) : (
            <div></div>
          )
        }

        <div className="form-group">
          <label htmlFor="email">Ingrese su email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="@Ingresa el email"
            className="form-control"
            required
            value={dataUserLogin.email}
            onChange={evt => setDataUserLogin({ ...dataUserLogin, email: evt.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Ingrese su contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="*Introduce tu contraseña"
            className="form-control"
            required
            value={dataUserLogin.password}
            onChange={evt => setDataUserLogin({ ...dataUserLogin, password: evt.target.value })}
          />
        </div>

        <button
          type="submit"
          onClick={handleLogin}
          className="buttonLog"
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
  );
};

export default Login;
