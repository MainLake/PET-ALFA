import { useState } from "react";
import { createAccount } from "../../api/users";
import { CSpinner } from "@coreui/react";


// Importaciones de imagenes
import SignupImg from "../../imagenes/SingUpDesingPet1.png";
import SingUpLogo from "../../imagenes/SingUpImg.png";

//exportacion de estilos
import "../../css/signup.css"

// Expresiones regulares
const nameRegExp = /^[a-zA-Z\s]*$/;
const phoneRegExp = /^[0-9]{10}$/;
const passwordRegExp = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{6,}$/;


const Signup = () => {

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
    setLoading(true);
    evt.preventDefault();

    if (!phoneRegExp.test(newUser.phoneNumber)) {
      setError("El número de teléfono debe contener 10 dígitos");
      setTimeout(() => {
        setLoading(false);
        setError("");

      }, 3000);
      return;
    }

    if (!nameRegExp.test(newUser.name) || !nameRegExp.test(newUser.lastname)) {
      setError("El nombre y apellidos solo pueden contener letras");
      setLoading(false);
      setTimeout(() => {

        setError("");

      }, 3000);
      return;
    }

    if (!passwordRegExp.test(newUser.password)) {
      setError("La contraseña debe contener al menos 6 caracteres, una letra mayúscula y un número");
      setLoading(false);
      setTimeout(() => {

        setError("");

      }, 3000);
      return;
    }

    const response = await createAccount(newUser);

    if (response.error) {

      setError(response.error);
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }

    setSuccess("Usuario creado exitosamente");
    setLoading(false);
    setTimeout(() => {
      setSuccess("");
    }, 3000);


  };

  return (
    <div className="register-container">
      <div className="form-container">
        {
          error !== "" ? (
            <div role="alert">
              {error}
            </div>
          ) : null
        }

        {
          success !== "" ? (
            <div role="alert">
              {success}
            </div>
          ) : null
        }
        <form onSubmit={handleSubmit}>
          <div className="logo-section">
            <img src={SingUpLogo} alt="Icono de nuevo usuarios" />
            <h4>Registrate</h4>
            <h6 className="welcome-title">Bienvenido!</h6>
          </div>
          <div className="input-group">
            <div className="form-group">
              <label htmlFor="textName">
                Nombre:
              </label>
              <input
                type="text"
                id="textName"
                name="name"
                placeholder="Introduce tu nombre"
                required
                value={newUser.name}
                onChange={evt => setNewUser({ ...newUser, name: evt.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastname">
                Apellido:
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Introduce tus apellidos"
                required
                value={newUser.lastname}
                onChange={evt => setNewUser({ ...newUser, lastname: evt.target.value })}
              />
            </div>
          </div>
          <div className="input-group">
            <div className="form-group">
              <label htmlFor="email">
                Correo Electrónico:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Introduce tu correo electronico"
                required
                value={newUser.email}
                onChange={evt => setNewUser({ ...newUser, email: evt.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">
                Contraseña:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="*Cree una contraseña"
                required
                value={newUser.password}
                onChange={evt => setNewUser({ ...newUser, password: evt.target.value })}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">
              Número de Teléfono:
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Introduce tu telefono"
              required
              value={newUser.phoneNumber}
              onChange={evt => setNewUser({ ...newUser, phoneNumber: evt.target.value })}
            />
          </div>

          <div className="button-container">
            {
              loading ? (
                <div>
                  <CSpinner color="primary" />
                </div>
              ) : (
                
                <button type="submit" className="buttonSing">
                  Registrarse
                </button>
              )
            }
          </div>
        </form>
      </div>
      <div className="img-container">
        <img
          src={SignupImg}
          alt="Imagen de que contiene el logo de la página y un perro"
          className="register-img"
        />
      </div>
    </div>
  );
};

export default Signup;