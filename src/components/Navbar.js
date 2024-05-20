import { useState } from "react";
import { Link } from "react-router-dom";

import { authUserStore } from "../context/globalContext";
import { deleteDataLocalStorage } from "../localstorage/sesionLocalStorage";

import Button from "./componentsCommon/Button"

// Importaciones de imagenes
import Logo from "../imagenes/Logo.png";

// Importaciones de estilos

const Navbar = () => {
  const { isAuthenticated, logout, user } = authUserStore();
  const [loading, setLoading] = useState(false);

  const logoutSession = () => {
    setLoading(true);
    logout();
    deleteDataLocalStorage();
    setLoading(false);
  };

  return (
    <nav className="flex py-4 justify-between px-2">
      {/* Logo */}
      <div className="h-10 w-10 flex items-center">
        <Link to="/">
          {/* <img src={Logo} alt="Logo" /> */}
          LOGO
        </Link>
      </div>

      {/* Secciones de enlaces */}
      <div>
        {
          isAuthenticated && (
            <ul>
              <li>
                <Link to="/Reportar-Mascotas">Reportar Mascotas</Link>
              </li>
              <li>
                <Link to="/Mis-Mascotas">Mis mascotas</Link>
              </li>
              {
                isAuthenticated && user.role === "ADMINISTRATOR" && (
                  <>
                    <li>
                      <Link to="/Admin-Dashboard">Panel de administracion</Link>
                    </li>
                    <li>
                      <Link to="/Collaborator-Request">Bandeja de peticiones</Link>
                    </li>
                  </>
                )
              }
              {
                isAuthenticated && user.role === "COLLABORATOR" && (
                  <li>
                    <Link to="/Mis-Anuncios">Mis Anuncios</Link>
                  </li>
                )
              }
            </ul>
          )
        }

      </div>

      <div>
          {isAuthenticated ? (
            <button onClick={logoutSession}>
              {"Salir"}
            </button>
          ) : (
            <div className="flex gap-4">
              <Link to="/Login"><Button text={"Inicia sesion"} ></Button></Link>
              <Link to="/Signup"><Button text={"Regístrate"}></Button></Link>
            </div>
          )}
      </div>

    </nav>
  );
};

export default Navbar;
