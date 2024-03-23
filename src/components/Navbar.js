import React from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";
import Logo from "../imagenes/Logo.png";

import { useUserContext } from "../context/contextUser/ContextUser";

const Navbar = () => {
  const { globalContext, dispatch } = useUserContext();

  console.log(globalContext);

  const logout = () => {
    window.localStorage.removeItem("userPET");
    dispatch({type:"LOGOUT"});
  };

  return (
    <nav className="navbar navbar-expand-lg crema-bg">
      <div className="container-fluid">
        <Link to="/">
          <img src={Logo} className="style-image" alt="Logo" />
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/Reportar-Mascotas" className="nav-link">
                Reportar Mascotas
              </Link>
            </li>
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
            <li className="nav-item">
              <Link to="/Como-Reporto" className="nav-link">
                ¿Cómo Reporto?
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Mis-Mascotas" className="nav-link">
                Mis mascotas
              </Link>
            </li>
          </ul>
          {globalContext.usuario.autenticado ? (
            <div className="d-flex">
              <a onClick={logout} className="btn btn-danger">
                Salir
              </a>
            </div>
          ) : (
            <div className="d-flex">
              <a href="/Login" className="btn btn-dark me-2">
                Inicia Sesión
              </a>
              <a href="/Signup" className="btn btn-dark">
                Regístrate
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;