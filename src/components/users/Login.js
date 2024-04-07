import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CSpinner } from "@coreui/react";
import { loginUser } from "../../api/users";
import { authUserStore } from "../../context/globalContext";
import { saveDataLocalStorage } from "../../localstorage/sesionLocalStorage";

// Importaciones de imagenes
import Loginimg from "../../imagenes/Loginimg.png";
import Person from "../../icons/person-fill.svg";
import Lock from "../../icons/lock-fill.svg";
import Envelope from "../../icons/envelope-fill.svg";

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
    <div>


      <div>
        <img
          src={Loginimg}
          alt="Descripción de la imagen"
        />
      </div>



      <div>

        <div>
          <img src={Person} alt="imagen de persona"></img>
        </div>

        <h2>Iniciar Sesión</h2>

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
        
        <div>
          <div>
            <img src={Envelope} alt="Imagen Envolpe"></img>
          </div>

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Introduce tu email"
            required
            value={dataUserLogin.email}
            onChange={evt => setDataUserLogin({ ...dataUserLogin, email: evt.target.value })}
          />
        </div>

        <div>
          <div>
            <img src={Lock} alt="Imagen Lock"></img>
          </div>

          <input
            type="password"
            id="password"
            name="password"
            placeholder="Introduce tu contraseña"
            required
            value={dataUserLogin.password}
            onChange={evt => setDataUserLogin({ ...dataUserLogin, password: evt.target.value })}
          />
        </div>

        <button
          type="button"
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
  );
};

export default Login;
