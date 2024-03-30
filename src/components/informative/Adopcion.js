import "../../css/adopcion.css";
import AdopcionM from "../../imagenes/adopcion-mascotas.jpg";
import Dog from "../../icons/dog-solid.svg";
import Cat from "../../icons/cat-solid.svg";

import Footer from "../Footer";

const Adopcion = () => {
  return (
    <div>
      <div className="position-relative overflow-hidden p-3 p-md-2 m-md-6 text-center bg-body-tertiary">
        <div className="col-md-12 p-lg-5 mx-auto my-1 adopcion">
          <h1 className="display-1 fw-bold lh-1 text-white">
            Adopción Responsable
          </h1>
          <div className="d-flex gap-3 justify-content-center lead fw-normal"></div>
        </div>
      </div>
      <div className="container my-1 pet-adopcion">
        <div className="row p-1 pb-0 pe-lg-0 pt-lg-0 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3 text-cuidados">
            <h1 className="display-4 fw-bold lh-1 text-white">
              Descubre la Magia de Tener una Mascota
            </h1>
            <p className="lead text-white">
              Adoptar una mascota es un acto hermoso de amor y compasión, pero
              también conlleva una gran responsabilidad. Por lo que te
              presentamos algunas consideraciones clave para asegurarte de que
              estás listo para brindar un hogar amoroso a tu nueva amiga peluda
              o emplumada.
            </p>
          </div>
          <div className="col-lg-5 p-0 overflow-hidden d-flex justify-content-center">
            <img
              src={AdopcionM}
              className="InfoPet"
              alt="Logo"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
      <div className="container px-4 py-2" id="featured-3">
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="feature col">
            <div className="feature-card">
              <div className="feature-icon d-flex align-items-center justify-content-center text-bg bg-gradient fs-2 mb-3">
                <img src={Dog} className="Person"></img>
              </div>
              <h3 className="fs-2 text-body-emphasis text-center">
                Reflexiona sobre tu Estilo de Vida
              </h3>
              <p>
                Antes de adoptar, piensa en tu estilo de vida. ¿Tienes tiempo
                para dedicar a una mascota? ¿Estás preparado para cuidar de ella
                durante toda su vida, que puede durar varios años?
              </p>
            </div>
          </div>
          <div className="feature col">
            <div className="feature-card">
              <div className="feature-icon d-flex align-items-center justify-content-center text-bg bg-gradient fs-2 mb-3">
                <img src={Cat} className="Person"></img>
              </div>
              <h3 className="fs-2 text-body-emphasis text-center">
                Elije la Mascota Adecuada
              </h3>
              <p>
                {" "}
                Investiga y elige la mascota que mejor se adapte a tu vida. Cada
                especie y raza tiene sus propias necesidades y personalidades.
                Asegúrate de que tu elección sea compatible con tu hogar y tu
                familia.
              </p>
            </div>
          </div>
          <div className="feature col">
            <div className="feature-card">
              <div className="feature-icon d-flex align-items-center justify-content-center text-bg bg-gradient fs-2 mb-3">
                <img src={Dog} className="Person"></img>
              </div>
              <h3 className="fs-2 text-body-emphasis text-center">
                Haz espacio en tu Hogar
              </h3>
              <p>
                Prepara tu hogar para la llegada de tu nueva mascota. Asegúrate
                de que haya un lugar seguro y cómodo para ella, con suficiente
                espacio para moverse.
              </p>
            </div>
          </div>
          <div className="feature col">
            <div className="feature-card">
              <div className="feature-icon d-flex align-items-center justify-content-center text-bg bg-gradient fs-2 mb-3">
                <img src={Cat} className="Person"></img>
              </div>
              <h3 className="fs-2 text-body-emphasis text-center">
                Educación y Entrenamiento
              </h3>
              <p>
                Invierte tiempo en la educación y el entrenamiento de tu
                mascota. Esto ayudará a que se convierta en un miembro bien
                adaptado de la familia.
              </p>
            </div>
          </div>
          <div className="feature col">
            <div className="feature-card">
              <div className="feature-icon d-flex align-items-center justify-content-center text-bg bg-gradient fs-2 mb-3">
                <img src={Dog} className="Person"></img>
              </div>
              <h3 className="fs-2 text-body-emphasis text-center">
                Atención Médica
              </h3>
              <p>
                Programa revisiones veterinarias regulares y mantén al día las
                vacunas y el cuidado de tu mascota. La salud es fundamental para
                su bienestar.
              </p>
            </div>
          </div>
          <div className="feature col">
            <div className="feature-card">
              <div className="feature-icon d-flex align-items-center justify-content-center text-bg bg-gradient fs-2 mb-3">
                <img src={Cat} className="Person"></img>
              </div>
              <h3 className="fs-2 text-body-emphasis text-center">
                Alimentación Adecuada
              </h3>
              <p>
                Proporciona una alimentación equilibrada y de alta calidad que
                satisfaga las necesidades nutricionales de tu mascota.
              </p>
            </div>
          </div>
          <div className="feature col">
            <div className="feature-card">
              <div className="feature-icon d-flex align-items-center justify-content-center text-bg bg-gradient fs-2 mb-3">
                <img src={Dog} className="Person"></img>
              </div>
              <h3 className="fs-2 text-body-emphasis text-center">
                Identificación
              </h3>
              <p>
                Asegúrate de que tu mascota lleve una identificación, como un
                collar con una etiqueta de identificación y, si es posible, un
                microchip.
              </p>
            </div>
          </div>
          <div className="feature col">
            <div className="feature-card">
              <div className="feature-icon d-flex align-items-center justify-content-center text-bg bg-gradient fs-2 mb-3">
                <img src={Cat} className="Person"></img>
              </div>
              <h3 className="fs-2 text-body-emphasis text-center">
                Compañía y Amor
              </h3>
              <p>
                Las mascotas necesitan amor y atención. Pasa tiempo de calidad
                con ellas y demuéstrales cariño a diario.
              </p>
            </div>
          </div>
          <div className="feature col">
            <div className="feature-card">
              <div className="feature-icon d-flex align-items-center justify-content-center text-bg bg-gradient fs-2 mb-3">
                <img src={Dog} className="Person"></img>
              </div>
              <h3 className="fs-2 text-body-emphasis text-center">
                Planifica a Futuro
              </h3>
              <p>
                Asegúrate de que haya un plan de cuidado en caso de que no
                puedas cuidar de tu mascota en el futuro. Esto puede incluir un
                amigo o familiar dispuesto a hacerse cargo.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Adopcion;
