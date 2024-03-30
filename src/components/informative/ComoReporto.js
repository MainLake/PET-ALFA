import "../../css/comoreporto.css";
import Footer from "../Footer";

const ComoReporto = () => {
  return (
    <div className="section">
      <div className="px-2 py-1 my-1 text-center header-reporto">
        <h1 className="display-2 fw-bold text-body-emphasis">¿Cómo Reporto?</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
          </p>
        </div>
      </div>
      <div className="container col-xl-10 col-xxl-8 px-4 py-1">
        <div className="row align-items-center g-lg-5 py-1">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">
              Paso 1: Iniciar Sesión
            </h1>
            <p className="col-lg-10 fs-5">
              Lo primero que se debe hacer antes de Reportar una Mascota es
              Iniciar Sesión, si aun no tienes una cuenta, deberás ir al botón
              "Registrarse" y llenar todos los campos como datos
              correspondientes. Una vez hecho esto, podrás Iniciar Sesión e ir
              al apartado "Reportar Mascotas", para poder realizar tu
              publicación.
            </p>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  readOnly
                />
                <label htmlFor="floatingInput">Correo</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  readOnly
                />
                <label htmlFor="floatingPassword">Contraseña</label>
              </div>
              <button className="w-100 btn btn-lg btn-secondary" type="submit">
                Iniciar Sesión
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="container col-xl-10 col-xxl-8 px-4 py-2">
        <div className="row align-items-center g-lg-5 py-3">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">
              Paso 2: Reportar Mascota (Datos de la mascota)
            </h1>
            <p className="col-lg-10 fs-5">
              Una vez iniciada sesión, ve al apartado "Reportar Mascotas", en el
              cual tendrás que llenar los campos con los datos de la Mascota (si
              aplican). Deberás seleccionar la especie de tu Mascota, asi como
              su raza, esto con el fin de tener un mejor control de busqueda y
              organización en el inventario de Mascotas Perdidas. Un vez
              completado estos campos, ve a la sección "Datos de Pérdida".
            </p>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="text"
                  readOnly
                />
                <label htmlFor="floatingInput">Nombre</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="text"
                  readOnly
                />
                <label htmlFor="floatingPassword">Especie</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="text"
                  readOnly
                />
                <label htmlFor="floatingPassword">Género</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  readOnly
                />
                <label htmlFor="floatingPassword">Raza</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  readOnly
                />
                <label htmlFor="floatingPassword">Edad</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  readOnly
                />
                <label htmlFor="floatingPassword">Tamaño</label>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="container col-xl-10 col-xxl-8 px-4 py-2">
        <div className="row align-items-center g-lg-5 py-3">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">
              Paso 3: Reportar Mascota (Datos de Pérdida)
            </h1>
            <p className="col-lg-10 fs-5">
              Al haber completado todos los campos en la sección "Datos de la
              Mascota", deberás completar los "Datos de Pérdida, en el campo
              "Última vez Visto", ingresa la información de la ubicación donde
              has visto a la Mascota Perdida, trata de ser lo más específico
              posible ingresando, colonia y el nombre de la calle (Si aplica),
              al igual en el campo "Descripción", agrega la información lo mas
              detalla posible respecto a la mascota , posteriormente ingresa la
              fehca de pérdida en la que has visto a la mascota, al final agrega
              la imagen de la mascota que quieras reportar y da "Click" en el
              botón de "Publicar Mascota"
            </p>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="text"
                  readOnly
                />
                <label htmlFor="floatingInput">Última Vez Visto</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="text"
                  readOnly
                />
                <label htmlFor="floatingPassword">Descripción</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="text"
                  readOnly
                />
                <label htmlFor="floatingPassword">Fecha de Pérdida</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  readOnly
                />
                <label htmlFor="floatingPassword">
                  Fotografía de tu Mascota
                </label>
              </div>
              <button className="w-100 btn btn-lg btn-secondary" type="submit">
                Reportar Mascota
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ComoReporto;
