import React from "react";
import Footer from "./Footer";
import Logo from "../imagenes/Logo.png";
import "../css/main.css";
import M1 from "../imagenes/mm4.png";
import M2 from "../imagenes/mm5.png";
import M3 from "../imagenes/mm6.png";

const Main = () => {
  return (
    <main>
      <div className="position-relative overflow-hidden p-3 p-md-2 m-md-6 text-center bg-body-tertiary">
        <div className="col-md-12 p-lg-5 mx-auto my-1 fondo-con-imagen">
          <h1 className="display-1 fw-bold lh-1 text-white">
            Perdidos en Tapachula
          </h1>
          <div className="d-flex gap-3 justify-content-center lead fw-normal"></div>
        </div>
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>
      <div className="row main-row">
        <div className="col-lg-4" align="center">
          <img src={M1} alt="Mascota" className="imagen-circular" />
          <h2 className="fw-normal">Adopción Responsable</h2>
          <p>
            <a className="btn btn-secondary" href="/Adopcion-Responsable">
              Conocer Más &raquo;
            </a>
          </p>
        </div>
        <div className="col-lg-4" align="center">
          <img src={M2} alt="Mascota" className="imagen-circular" />
          <h2 className="fw-normal">¿Por qué tener una Mascota?</h2>
          <p>
            <a className="btn btn-secondary" href="/Importancia-Mascotas">
              Conocer Más &raquo;
            </a>
          </p>
        </div>
        <div className="col-lg-4" align="center">
          <img src={M3} alt="Mascota" className="imagen-circular" />
          <h2 className="fw-normal">¿Cómo Cuido a Mi Mascota?</h2>
          <p>
            <a className="btn btn-secondary" href="/Cuidados-Mascotas">
              Conocer Más &raquo;
            </a>
          </p>
        </div>
      </div>
      <div className="container my-4 pet">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3 text-pet-main">
            <h1 className="display-4 fw-bold lh-1 text-white">
              ¿Por qué usar Perdidos en Tapachula?
            </h1>
            <p className="lead text-white p-4">
              Perdidos en Tapachula "PET"' ha sido desarrollado con el propósito
              de brindar asistencia en la búsqueda de mascotas perdidas.
              Nuestra misión es proporcionar a la comunidad una plataforma que
              simplifique la tarea de encontrar y reportar mascotas extraviadas.
              Estamos comprometidos en unir a las mascotas con sus familias y
              ser un recurso confiable para quienes buscan a sus leales compañeros.
            </p>
          </div>
          <div className="col-lg-5 p-0 overflow-hidden d-flex justify-content-center">
            <img
              src={Logo}
              className="InfoPet"
              alt="Logo"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
      <div className="container-fluid subscribe py-1" style={{ backgroundColor: "#6d7d8b" }}>
      <div className="container text-center py-2">
        <div className="mx-auto text-center" style={{ maxWidth: "900px" }}>
          <h1 className="text-white mb-4 display-2 fw-bold">¿Deseas formar parte de Este Proyecto?</h1>
          <p className="text-white mb-5 lead">Si eres miembro de una asociación o un rescatista independiente comprometido con la salvaguarda de mascotas y deseas unirte a este proyecto, por favor, completa el siguiente formulario. Esto te permitirá formar parte de la sección de Rescatistas y Asociaciones, donde podrás publicar anuncios y campañas relacionadas con tu labor altruista.</p>
          <div className="position-relative mx-auto">
            <a className="btn btn-secondary" href="/Rescatista-Form">Ir al Formulario</a>
          </div>
        </div>
      </div>
    </div>
      <Footer />
    </main>
  );
};

export default Main;
