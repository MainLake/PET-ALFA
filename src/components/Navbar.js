import React from 'react';
import '../css/navbar.css'
import { Link } from 'react-router-dom';
import Logo from '../imagenes/Logo.png';

const Navbar = () => {
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
              <Link to="/Reportar-Mascotas" className="nav-link">Reportar Mascotas</Link>
            </li>
            <li className="nav-item">
              <Link to="/Mascotas-Perdidas" className="nav-link">Mascotas Perdidas</Link>
            </li>
            <li className="nav-item">
              <Link to="/Como-Reporto" className="nav-link">¿Cómo Reporto?</Link>
            </li>
            <li className="nav-item">
              <Link to="/Asociaciones" className="nav-link">Asociaciones y Rescatistas</Link>
            </li>
          </ul>
          <div className="d-flex">
            <a href="/Login" className="btn btn-secondary me-2">Inicia Sesión</a>
            <a href="/Signup" className="btn btn-secondary">Regístrate</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
