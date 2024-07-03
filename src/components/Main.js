import React from "react";
import { Link } from "react-router-dom";
import "../css/main.css";
import M01 from "../imagenes/main01.png";
import M1 from "../imagenes/mm4.png";
import M2 from "../imagenes/mm5.png";
import M3 from "../imagenes/mm6.png";

const Main = () => {
  return (
    <div className="container">
      <div className="main-content">
        <h1 className="main-title-font">Perdidos En Tapachula</h1>
        <p>
          Aplicación web creada para la búsqueda y reporte de mascotas en Tapachula.
        </p>
        <Link to="/Signup">
          <button>Regístrate</button>
        </Link>
          <img src={M01} alt="Dog and Cat" className="main-image" />
      </div>
      <div className="info-sections">
        <div className="info-section section1">
          <Link to="/Adopcion-Responsable">
            <img src={M1} alt="Icon 1" />
          </Link>
        </div>
        <div className="info-section section2">
          <Link to="/Importancia-Mascotas">
            <img src={M2} alt="Icon 2" />
          </Link>
        </div>
        <div className="info-section section3">
          <Link to="/Cuidados-Mascotas">
            <img src={M3} alt="Icon 3" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
