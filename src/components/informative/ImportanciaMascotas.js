import "../../css/importancia.css";
import Importancia from "../../imagenes/mascota-importancia.jpg";

import Footer from "../Footer";

const ImportanciaMascotas = () => {
  return (
    <div>
      <div className="position-relative overflow-hidden p-3 p-md-2 m-md-6 text-center bg-body-tertiary">
        <div className="col-md-12 p-lg-5 mx-auto my-1 importancia-mascotas">
          <h1 className="display-1 fw-bold lh-1 text-white">
            ¿Por qué tener una Mascota?
          </h1>
          <div className="d-flex gap-3 justify-content-center lead fw-normal"></div>
        </div>
      </div>
      <div className="container-pm my-1 pet-importancia">
        <div className="row p-1 pb-0 pe-lg-0 pt-lg-0 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3 text-cuidados">
            <h1 className="display-4 fw-bold lh-1 text-white">
              Descubre la Magia de Tener una Mascota
            </h1>
            <p className="lead text-white">
              En el mundo de las mascotas, la vida nunca es aburrida. Cada día
              trae una dosis de alegría, amor incondicional y compañía que no
              tiene precio. Ya sea un travieso cachorro, un gato independiente o
              cualquier otra criatura peluda o emplumada, tener una mascota es
              una aventura que enriquece nuestras vidas de innumerables maneras.
            </p>
          </div>
          <div className="col-lg-5 p-0 overflow-hidden d-flex justify-content-center">
            <img
              src={Importancia}
              className="InfoPet"
              alt="Logo"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
      <div className="container-pminfo px-4 py-2" id="custom-cards">
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-3">
          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg custom-card">
              <div className="d-flex flex-column h-100 p-3 pb-3 text-white text-shadow-1">
                <h3 className="pt-1 mt-5 mb-4 display-6 lh-1 fw-bold text-center">
                  Compañía Inigualable
                </h3>
                <p>
                  Tener una mascota significa nunca sentirte solo. Son tus
                  compañeros leales en cada etapa de la vida. No importa si
                  tienes un buen día o uno no tan bueno; tus mascotas siempre
                  están ahí para brindarte consuelo y alegría.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg custom-card">
              <div className="d-flex flex-column h-100 p-3 pb-3 text-white text-shadow-1">
                <h3 className="pt-1 mt-5 mb-4 display-6 lh-1 fw-bold text-center">
                  Amor Incondicional
                </h3>
                <p>
                  El amor de una mascota es puro y sincero. No les importa cómo
                  te ves o si cometes errores, te aceptan tal como eres. En su
                  presencia, encuentras un aprecio genuino que es tan
                  gratificante como único.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg custom-card">
              <div className="d-flex flex-column h-100 p-3 pb-3 text-shadow-1">
                <h3 className="pt-1 mt-5 mb-4 display-6 lh-1 fw-bold text-center">
                  Reducción del Estrés
                </h3>
                <p>
                  Acariciar a tu mascota o simplemente estar a su lado tiene un
                  efecto mágico para reducir el estrés y la ansiedad. Es como un
                  abrazo cálido que te hace sentir mejor, incluso en los días
                  más agitados.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg custom-card">
              <div className="d-flex flex-column h-100 p-3 pb-3 text-white text-shadow-1">
                <h3 className="pt-1 mt-5 mb-4 display-6 lh-1 fw-bold text-center">
                  Alegría Cotidiana
                </h3>
                <p>
                  Las travesuras y personalidades únicas de las mascotas añaden
                  una dosis diaria de diversión y asombro a tu vida. Desde
                  juegos tontos hasta comportamientos adorables, te arrancarán
                  una sonrisa incluso en los momentos más difíciles.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg custom-card">
              <div className="d-flex flex-column h-100 p-3 pb-3 text-white text-shadow-1">
                <h3 className="pt-1 mt-5 mb-4 display-6 lh-1 fw-bold text-center">
                  Propósito y Responsabilidad
                </h3>
                <p>
                  Cuidar de una mascota te da un propósito, una razón para
                  levantarte cada día. Te enseña responsabilidad, paciencia y
                  empatía, cualidades que trascienden a otras áreas de la vida.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg custom-card">
              <div className="d-flex flex-column h-100 p-3 pb-3 text-shadow-1">
                <h3 className="pt-1 mt-5 mb-4 display-6 lh-1 fw-bold text-center">
                  Un Vínculo Inquebrantable
                </h3>
                <p>
                  La relación entre tú y tu mascota es profunda y duradera. Es
                  un vínculo que resiste el paso del tiempo y se fortalece con
                  cada aventura compartida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportanciaMascotas;
