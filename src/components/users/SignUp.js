import { useState } from "react";

// Importaciones de API
import { createAccount } from "../../api/users";

// Importaciones de imagenes
import SignupImg from "../../imagenes/Registroimg.png";
import Person from "../../icons/users/signUp/usuario.png";
import Button from "../componentsCommon/Button";

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
    <div className="flex-col justify-center m-auto lg:flex-row">

      <div className="flex justify-center">
        <img
          className="w-3/5"
          src={SignupImg}
          alt="Imagen de que contiene el logo de la página y un perro"
        />
      </div>

      <div className="flex flex-col gap-10 border-2 border-gray-300 rounded-md p-5 shadow-sm shadow-black lg:w-full">
        {/* <div>
          <img src={Person} alt="Icono de nuevo usuarios" />
        </div> */}

        <div>
          <h1 className="font-bold text-3xl text-center">Crea tu cuenta</h1>
        </div>

        <div role="alert" className="">
          {
            error === "" ? (
              null
            ) : (
              error
            )
          }
        </div>

        {
          success !== "" ? (
            <div role="alert">
              {success}
            </div>
          ) : null
        }
        <form onSubmit={handleSubmit} className="flex flex-col gap-7">
          <div className="flex flex-col gap-2">
            <label htmlFor="textName" className="text-lg text">
              Nombre:
            </label>
            <input
              className="w-full h-8 text-lg pl-2 border-2 border-gray-300 rounded-md"
              type="text"
              id="textName"
              name="name"
              placeholder="Ej: Juan José"
              required
              value={newUser.name}
              onChange={evt => setNewUser({ ...newUser, name: evt.target.value })}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="lastname" className="text-lg">
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

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-lg">
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

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-lg">
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

          <div className="flex items-center justify-center mt-7">
            <Button text="Registrarse" loading={loading} type={"submit"} />
          </div>

        </form>

      </div>

    </div>
  );
};

export default Signup;