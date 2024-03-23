import { useState } from "react";
import "../css/imagen.css";
import "../css/reportemascota.css";
import Footer from "./Footer";

const extencionesImagenes = ["png", "jpg", "jpeg"];
const ReportarMascotas = () => {

  

  const [error, setError] = useState(null);

  const [imagen, setImagen] = useState(null);

  const [info, setInfo] = useState(false);

  const [post, setPost] = useState({
    name: "",
    specie: "Gato",
    gender: "Macho",
    age: "",
    last_seen: "",
    description: "",
    image: "",
    size: "Chico",
    breed: "Mestizo",
    lost_date: "",
    owner: false,
  });

  const handleSubmit = async (evt) => {
    evt.preventDefault();


  };

  const handleChangeImg = (evt) => {
    const file = evt.target.files[0];

    if (file === undefined) {
      return;
    }

    const nameFileArray = file.name.split(".");

    if (
      !extencionesImagenes.some(
        (extencion) =>
          nameFileArray[nameFileArray.length - 1].toLowerCase() === extencion
      )
    ) {
      setError("Debes seleccionar un archivo de tipo imagen");
      setTimeout(() => {
        setError(null);
      }, 4000);
      return;
    }

    const newObjectPost = {
      ...post,
      image: file,
    };
    setPost(newObjectPost);
    setImagen(URL.createObjectURL(file));
  };

  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center mt-3">
        <form className="row g-3" onSubmit={handleSubmit}>
          {error ? (
            <div className="alert alert-info text-center">{error}</div>
          ) : null}

          {
            info ? (
                <div className="alert alert-info text-center">
                    <h2>¡Tu mascota se ha reportado con éxito!</h2>
                </div>
                ) : null
          }

          <div className="col-md-6 col-sm-12">
            <div className="data-section text-center">
              <h2 className="display-4 fw-bold lh-1">Datos de la Mascota</h2>
              <div className="row g-2">
                <div className="col-12">
                  <label className="form-label">Nombre (Si aplica)</label>
                  <input
                    value={post.name}
                    onChange={(evt) =>
                      setPost({ ...post, name: evt.target.value })
                    }
                    required
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="col-6">
                  <label className="form-label">Especie</label>
                  <select
                    value={post.specie}
                    onChange={(evt) =>
                      setPost({ ...post, specie: evt.target.value })
                    }
                    className="form-select"
                  >
                    <option value="Perro">Perro</option>
                    <option value="Gato">Gato</option>
                    <option value="Ave">Ave</option>
                  </select>
                </div>
                <div className="col-6">
                  <label className="form-label">Género</label>
                  <select
                    value={post.gender}
                    onChange={(evt) =>
                      setPost({ ...post, gender: evt.target.value })
                    }
                    required
                    className="form-select"
                  >
                    <option value="Hembra">Hembra</option>
                    <option value="Macho">Macho</option>
                  </select>
                </div>
                <div>
                  <label className="form-label">Raza</label>
                  <select
                    value={post.breed}
                    onChange={(evt) =>
                      setPost({ ...post, breed: evt.target.value })
                    }
                    className="form-select"
                  >
                    {post.specie === "Perro" ? (
                      <>
                        <option>Mestizo</option>
                        <option>Chihuahua</option>
                        <option>Labrador Retriever</option>
                        <option>Golden Retriever</option>
                        <option>Beagle</option>
                        <option>Pug</option>
                        <option>Poodle</option>
                        <option>Bulldog Francés</option>
                        <option>Husky</option>
                        <option>Pastor alemán</option>
                        <option>Pitbull</option>
                        <option>Pomerania</option>
                        <option>Boxer</option>
                        <option>Rottweiler</option>
                        <option>Pastor belga malinois</option>
                      </>
                    ) : post.specie === "Gato" ? (
                      <>
                        <option>Persa</option>
                        <option>Azul ruso</option>
                        <option>Siamés</option>
                        <option>Angora turco</option>
                        <option>Siberiano</option>
                        <option>Bengalí</option>
                        <option>Mestizo</option>
                      </>
                    ) : (
                      <>
                        <option>Paloma</option>
                        <option>Loro</option>
                        <option>Perico</option>
                        <option>Periquito</option>
                        <option>Cotorra Australiana</option>
                        <option>Canario</option>
                        <option>Gorrion</option>
                        <option>Pinzón</option>
                        <option>Golondrina</option>
                        <option>Búho</option>
                      </>
                    )}
                  </select>
                </div>
                <div className="col-6">
                  <label className="form-label">Edad (Si Aplica)</label>
                  <div className="input-group">
                    <span className="input-group-text">Años</span>
                    <input
                      value={post.age}
                      onChange={(evt) =>
                        setPost({ ...post, age: evt.target.value })
                      }
                      required
                      type="number"
                      className="form-control"
                      min={1}
                    />
                  </div>
                </div>

                <div className="col-6">
                  <label className="form-label">Tamaño</label>
                  <select
                    value={post.size}
                    onChange={(evt) =>
                      setPost({ ...post, size: evt.target.value })
                    }
                    required
                    className="form-select"
                  >
                    <option value="Chico">Chico</option>
                    <option value="Mediano">Mediano</option>
                    <option value="Grande">Grande</option>
                    <option value="No aplica">No aplica</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-sm-12 ">
            <div className="data-section text-center">
              <h2 className="display-4 fw-bold lh-1">Datos de Pérdida</h2>
              <div className="row g-2">
                <div className="">
                  <label className="form-label">
                    Última vez visto
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fillRule="currentColor"
                        className="bi bi-geo-alt-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                      </svg>
                    </span>
                    <textarea
                      value={post.last_seen}
                      onChange={(evt) =>
                        setPost({ ...post, last_seen: evt.target.value })
                      }
                      required
                      className="form-control"
                    ></textarea>
                  </div>
                </div>
                <div>
                  <label>Descripción</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fillRule="currentColor"
                        className="bi bi-body-text"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M0 .5A.5.5 0 0 1 .5 0h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 0 .5Zm0 2A.5.5 0 0 1 .5 2h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm9 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm-9 2A.5.5 0 0 1 .5 4h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm5 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm7 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm-12 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5Zm8 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm-8 2a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Z"
                        />
                      </svg>
                    </span>
                    <textarea
                      value={post.description}
                      onChange={(evt) =>
                        setPost({ ...post, description: evt.target.value })
                      }
                      required
                      className="form-control"
                    ></textarea>
                  </div>
                </div>
                <div>
                  <label className="form-label">Fecha de Pérdida</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fillRule="currentColor"
                        className="bi bi-calendar-date"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.790h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.820h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z" />
                      </svg>
                    </span>
                    <input
                      value={post.lost_date}
                      onChange={(evt) =>
                        setPost({ ...post, lost_date: evt.target.value })
                      }
                      type="date"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="isOwnerCheckbox"
                      checked={post.owner}
                      onChange={(evt) =>
                        setPost({ ...post, owner: evt.target.checked })
                      }
                    />
                    <label
                      className="form-check-label"
                      htmlFor="isOwnerCheckbox"
                    >
                      ¿Eres el dueño de la mascota?
                    </label>
                  </div>
                </div>
                <div className="">
                  <label className="form-label">
                    Fotografía de tu Mascota (Si Aplica)
                  </label>
                  <input
                    required
                    className={`form-control ${error ? "border-danger" : null}`}
                    type="file"
                    onChange={handleChangeImg}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-12">
            {imagen !== null ? (
              <div className="card row justify-content-center align-items-center fondo-imagen">
                <img
                  className="imagen card-img-top pt-2"
                  src={imagen}
                  alt="Vista previa de la imagen"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Previsualización de Imagen</h5>
                </div>
              </div>
            ) : null}
          </div>

          <div className="col-12 mt-4 mb-3 d-flex justify-content-center">
            <button className="btn btn-secondary">Publicar mascota</button>
          </div>
        </form>
      </div>
      <div class="p-5 mb-2 bg-transparent text-body"></div>
      <Footer />
    </div>
  );
};

export default ReportarMascotas;
