import { useState } from "react";
import { Link } from "react-router-dom";

import { CSpinner } from "@coreui/react";

import { authUserStore } from "../context/globalContext";
import { deleteDataLocalStorage } from "../localstorage/sesionLocalStorage";

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
    <nav>

      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      
      <div>
      
        <ul>
      
          {isAuthenticated && (
            <li>
              <Link to="/Reportar-Mascotas">Reportar Mascotas</Link>
            </li>
          )}
      
          <li>
            <Link to="/Mascotas-Perdidas">Mascotas Perdidas</Link>
          </li>
      
          <li>
            <Link to="/Panel-Rescatistas">Asociaciones y Rescatistas</Link>
          </li>
      
          {isAuthenticated && user.role === "ADMINISTRATOR" && (
            <li>
              <Link to="/Admin-Dashboard">Panel de administracion</Link>
            </li>
          )}
      
          {isAuthenticated && user.role === "ADMINISTRATOR" && (
            <li>
              <Link to="/Collaborator-Request">Bandeja de peticiones</Link>
            </li>
          )}
      
          <li>
            <Link to="/Como-Reporto">¿Cómo Reporto?</Link>
          </li>
      
          {isAuthenticated && (
            <li>
              <Link to="/Mis-Mascotas">Mis mascotas</Link>
            </li>
          )}
      
          {isAuthenticated && user.role === "COLLABORATOR" && (
            <li>
              <Link to="/Mis-Anuncios">Mis Anuncios</Link>
            </li>
          )}
      
        </ul>
      
        <div>
      
          {isAuthenticated ? (
            <button onClick={logoutSession}>
              {loading ? <CSpinner /> : "Salir"}
            </button>
          ) : (
            <div>
              <Link to="/Login">Inicia Sesión</Link>
              <Link to="/Signup">Regístrate</Link>
            </div>
          )}
      
        </div>

      </div>
    
    </nav>
  );
};

export default Navbar;
