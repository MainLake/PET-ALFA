import React, { useState } from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";
import Logo from "../imagenes/Logo.png";

import { CSpinner } from "@coreui/react";

import { authUserStore } from "../context/globalContext";

import { deleteDataLocalStorage } from "../localstorage/sesionLocalStorage";

const Navbar = () => {

  const { isAuthenticated, logout, user } = authUserStore();
  const [loading, setLoading] = useState(false);

  const logoutSession = () => {
    logout();
    deleteDataLocalStorage();
  }

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

            {
              isAuthenticated && (
                <li className="nav-item">
                  <Link to="/Reportar-Mascotas" className="nav-link">
                    Reportar Mascotas
                  </Link>
                </li>
              )
            }


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

            {
              isAuthenticated && (
                <li className="nav-item">
                  <Link to="/Mis-Mascotas" className="nav-link">
                    Mis mascotas
                  </Link>
                </li>
              )
            }



            {
              isAuthenticated && user.role !== "USER" ? (
                <li className="nav-item">
                  <Link to="/Mis-Anuncios" className="nav-link">
                    Mis Anuncios
                  </Link>
                </li>
              ): (null)
            }


          </ul>
          {isAuthenticated ? (
            <div className="d-flex">
              <a onClick={logoutSession} className="btn btn-danger">
                {
                  loading === true ? (
                    <CSpinner></CSpinner>
                  ) : (
                    <>Salir</>
                  )
                }
              </a>
            </div>
          ) : (
            <div className="d-flex">
              <Link to="/Login" className="btn btn-dark me-2">
                Inicia Sesión
              </Link>
              <Link to="/Signup" className="btn btn-dark">
                Regístrate
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;