import React from "react";
import Footer from "./Footer";
import PetRoma from "../imagenes/PetRoma.jpeg";
const Asociaciones = () => {
  return (
    <main className="container">
      <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
        <div className="col-md-6 px-0">
          <h1 className="display-4 fst-italic">Asociaciones y Rescatistas</h1>
          <p className="lead my-3">
            En esta sección se muestran a las Asociaciones y Rescatistas
            comprometidos a ayudar a Mascotas en situacion de calle u otra
            atención que se requiera.
          </p>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-md-6">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <h3 className="mb-0">Pet Roma</h3>
              <div className="mb-1 text-body-secondary">
                Tapachula, Chiapas.
              </div>
              <p className="card-text mb-auto">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </p>
              <a
                href="#"
                className="icon-link gap-1 icon-link-hover stretched-link"
              >
                Continue reading
              </a>
            </div>
            <div className="col-auto d-none d-lg-block">
              <img
                src={PetRoma}
                className="bd-placeholder-img"
                width="250"
                height="250"
              ></img>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <h3 className="mb-0">Ángeles Peluditos</h3>
              <div className="mb-1 text-body-secondary">
                Tapachula, Chiapas.
              </div>
              <p className="mb-auto">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </p>
              <a
                href="#"
                className="icon-link gap-1 icon-link-hover stretched-link"
              >
                Continue reading
              </a>
            </div>
            <div className="col-auto d-none d-lg-block">
              <svg
                className="bd-placeholder-img"
                width="200"
                height="250"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" />
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Asociaciones;
