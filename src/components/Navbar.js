import { useState } from "react";
import { Link } from "react-router-dom";
import { CSpinner } from "@coreui/react";
import { authUserStore } from "../context/globalContext";
import { deleteDataLocalStorage } from "../localstorage/sesionLocalStorage";
import Logo from "../imagenes/Logo.png";
import "../css/navbar.css";

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
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={Logo} alt="Logo" height="50" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-0 mb-lg-0">
            {isAuthenticated && (
              <li className="nav-item">
                <Link to="/Reportar-Mascotas" className="nav-link">
                  Reportar Mascotas
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link to="/Mascotas-Perdidas" className="nav-link">
                Mascotas Perdidas
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Panel-Rescatistas" className="nav-link">
                Asociaciones y Rescatistas
              </Link>
            </li>
            {isAuthenticated && user.role === "ADMINISTRATOR" && (
              <>
                <li className="nav-item">
                  <Link to="/Admin-Dashboard" className="nav-link">
                    Panel de administracion
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Collaborator-Request" className="nav-link">
                    Bandeja de peticiones
                  </Link>
                </li>
              </>
            )}
            <li className="nav-item">
              <Link to="/Como-Reporto" className="nav-link">
                ¿Cómo Reporto?
              </Link>
            </li>
            {isAuthenticated && (
              <li className="nav-item">
                <Link to="/Mis-Mascotas" className="nav-link">
                  Mis mascotas
                </Link>
              </li>
            )}
            {isAuthenticated && user.role === "COLLABORATOR" && (
              <li className="nav-item">
                <Link to="/Mis-Anuncios" className="nav-link">
                  Mis Anuncios
                </Link>
              </li>
            )}
          </ul>
          <div className="d-flex">
            {isAuthenticated ? (
              <button onClick={logoutSession} className="btn btn-danger">
                {loading ? <CSpinner /> : "Salir"}
              </button>
            ) : (
              <>
                <Link to="/Login" className="btn me-2">
                  Inicia Sesión
                </Link>
                <Link to="/Signup" className="btn-sg">
                  Regístrate
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
