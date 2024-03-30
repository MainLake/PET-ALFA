import "../../css/cuidados.css";
import Cuidados from "../../imagenes/recomendaciones.png";
import ShieldDog from "../../icons/shield-dog.svg";

import Footer from "../Footer";

const CuidadosMascotas = () => {
  return (
    <div>
      <div className="position-relative overflow-hidden p-3 p-md-2 m-md-6 text-center bg-body-tertiary">
        <div className="col-md-12 p-lg-5 mx-auto my-1 cuidados">
          <h1 className="display-1 fw-bold lh-1 text-white">
            ¿Cómo Cuido a Mi Mascota?
          </h1>
          <div className="d-flex gap-3 justify-content-center lead fw-normal"></div>
        </div>
      </div>
      <div className="container my-1 pet-cuidados">
        <div className="row p-3 pb-0 pe-lg-0 pt-lg-0 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3 text-cuidados">
            <h1 className="display-4 fw-bold lh-1 text-white">
              Mantén a tu Mascota Segura: Evita que se Pierda
            </h1>
            <p className="lead text-white">
              Uno de los mayores temores de cualquier dueño de mascotas es que
              su querido amigo peludo se pierda. Para prevenir esta situación
              angustiante, es fundamental tomar algunas medidas de seguridad y
              precaución.
            </p>
          </div>
          <div className="col-lg-5 p-0 overflow-hidden d-flex justify-content-center">
            <img
              src={Cuidados}
              className="InfoPet"
              alt="Logo"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
      <div className="container px-4 py-2" id="icon-grid">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
          <div className="col d-flex align-items-start">
            <img src={ShieldDog} className="Person"></img>
            <div className="custom-content">
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis align-items-center">
                Collar con Placa
              </h3>
              <p>
                Asegúrate de que tu mascota lleve un collar con una etiqueta de
                identificación clara que incluya su nombre y tu información de
                contacto. Esto facilita que las personas te contacten si
                encuentran a tu mascota perdida.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <img src={ShieldDog} className="Person"></img>
            <div className="custom-content">
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                Supervisión Constante
              </h3>
              <p>
                Cuando lleves a tu mascota al aire libre, mantenla siempre bajo
                supervisión. Nunca la dejes desatendida en áreas públicas, ya
                que esto aumenta el riesgo de que se pierda.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <img src={ShieldDog} className="Person"></img>
            <div className="custom-content">
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                Respuesta a su Nombre
              </h3>
              <p>
                Enséñale a tu mascota a responder a su nombre. Esto puede ser
                vital si se escapa y necesitas llamar su atención para que
                regrese.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <img src={ShieldDog} className="Person"></img>
            <div className="custom-content">
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                Paseos con Correa
              </h3>
              <p>
                Al pasear a tu perro, usa una correa resistente y mantén el
                control en todo momento. Asegúrate de que la correa sea lo
                suficientemente corta para evitar que tu mascota se aleje
                demasiado.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <img src={ShieldDog} className="Person"></img>
            <div className="custom-content">
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                Fotos Actuales
              </h3>
              <p>
                Mantén fotos recientes de tu mascota, que muestren su apariencia
                actual y características distintivas. Estas fotos pueden ser
                útiles si necesitas buscarla.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <img src={ShieldDog} className="Person"></img>
            <div className="custom-content">
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                Entrenamiento de Regreso
              </h3>
              <p>
                Enseña a tu mascota a regresar a casa cuando la llamas. Esto
                puede ser útil si se aleja durante un paseo.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <img src={ShieldDog} className="Person"></img>
            <div className="custom-content">
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                Protección Segura
              </h3>
              <p>
                Si tienes un jardín o patio, asegúrate de que esté vallado de
                manera segura para evitar que tu mascota escape. Revisa
                regularmente el estado del vallado para asegurarte de que no
                haya brechas.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <img src={ShieldDog} className="Person"></img>
            <div className="custom-content">
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                Educación sobre Mascotas
              </h3>
              <p>
                Enséñale a tus hijos y familiares la importancia de cuidar a la
                mascota y mantenerla a salvo. Incluye reglas de seguridad para
                todos los miembros de la familia.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CuidadosMascotas;
