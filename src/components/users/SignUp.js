import { useState } from "react";

// Importaciones de imagenes
import SignupImg from "../../imagenes/Registroimg.png";
import Person from "../../icons/person-fill.svg";

import { createAccount } from "../../api/users";
import { CSpinner } from "@coreui/react";

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
    <div>
      <div>
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

      <div>
        <div>
          <img src={Person} alt="Icono de nuevo usuarios" />
        </div>
      
        <div>Registro</div>
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
          <div>
            <label htmlFor="textName">
              Nombre:
            </label>
            <input
              type="text"
              id="textName"
              name="name"
              placeholder="Ej: Juan José"
              required
              value={newUser.name}
              onChange={evt => setNewUser({ ...newUser, name: evt.target.value })}
            />
          </div>

          <div>
            <label htmlFor="lastname">
              Apellido:
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Ej: Pérez López"
              required
              value={newUser.lastname}
              onChange={evt => setNewUser({ ...newUser, lastname: evt.target.value })}
            />
          </div>

          <div>
            <label htmlFor="email">
              Correo Electrónico:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ej: example@example.com"
              required
              value={newUser.email}
              onChange={evt => setNewUser({ ...newUser, email: evt.target.value })}
            />
          </div>

          <div>
            <label htmlFor="password">
              Contraseña:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Introduce tu contraseña"
              required
              value={newUser.password}
              onChange={evt => setNewUser({ ...newUser, password: evt.target.value })}
            />
          </div>

          <div>
            <label htmlFor="phoneNumber">
              Número de Teléfono:
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Ej: 1234567890"
              required
              value={newUser.phoneNumber}
              onChange={evt => setNewUser({ ...newUser, phoneNumber: evt.target.value })}
            />
          </div>

          <div>
            {
              loading ? (
                <div>
                  <CSpinner color="primary" />
                </div>
              ) : (
                <button type="submit">
                  Registrarse
                </button>
              )
            }
          </div>

        </form>
      
      </div>
    
    </div>
  );
};

export default Signup;