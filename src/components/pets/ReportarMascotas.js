import { useEffect, useState, useRef } from "react";
import "../../css/imagen.css";
import "../../css/reportemascota.css";
import Footer from "../Footer";

import { CSpinner } from "@coreui/react";
import { createPost } from "../../api/pets";
import { authUserStore } from "../../context/globalContext";
import { useNavigate } from "react-router-dom";

const extencionesImagenes = ["png", "jpg", "jpeg"];

const ReportarMascotas = () => {
  const [imagenes, setImagenes] = useState([]);

  const navigate = useNavigate();

  const { user, logout, isAuthenticated } = authUserStore();
  const [error, setError] = useState("");
  const [imagen, setImagen] = useState(null);
  const [info, setInfo] = useState(false);
  const [loading, setLoading] = useState(false);

  const [post, setPost] = useState({
    name: "",
    specie: "Perro",
    gender: "Macho",
    age: "",
    last_seen: "",
    description: "",
    size: "Chico",
    breed: "Mestizo",
    lost_date: "",
    owner: false,
    coordinates: '{"x": 342342432354, "y": 1234123423424}'
  });

  const fileInputRef = useRef(null);
  useEffect(() => {
    if(!isAuthenticated) {
      navigate('/Login');
    }
  }, [isAuthenticated]);

  const handleSubmit = async (evt) => {

    setLoading(true);
    evt.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos al servidor
  };

  const handleAddMoreImages = async () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
    const formData = new FormData();

    console.log(post.image)

    formData.append("name", post.name);
    formData.append("specie", post.specie);
    formData.append("gender", post.gender);
    formData.append("age", post.age);
    formData.append("last_seen", post.last_seen);
    formData.append("description", post.description);
    formData.append("size", post.size);
    formData.append("breed", post.breed);
    formData.append("lost_date", post.lost_date);
    formData.append("owner", post.owner);
    formData.append("image", post.image);
    formData.append("coordinates", post.coordinates);

    const response = await createPost(formData, user.dataToken.token);
    console.log(response);

    if (response.error) {

      if(response.error.response.status === 401) {
        logout(); 
        navigate('/Login');
        return;
      }

      setError(response.error);
      setTimeout(() => {
        setError("");
      }
        , 3000);
      return;
    }

    setPost({
      name: "",
      specie: "Perro",
      gender: "Macho",
      age: "",
      last_seen: "",
      description: "",
      image: "",
      size: "Chico",
      breed: "Mestizo",
      lost_date: "",
      owner: false,
      coordinates: '{"x": 342342432354, "y": 1234123423424}'
    });

    setImagen(null);

    setTimeout(() => {
      setInfo(false);
    }, 5000);
    setLoading(false);
  };

  const handleChangeImg = (evt) => {
    const files = Array.from(evt.target.files);

    if (files.length + imagenes.length > 5) {
      setError("Solo se permiten hasta 5 imágenes");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }

    const newImagenes = [...imagenes];
    files.forEach((file) => {
      const nameFileArray = file.name.split(".");
      if (
        !extencionesImagenes.some(
          (extencion) =>
            nameFileArray[nameFileArray.length - 1].toLowerCase() === extencion
        )
      ) {
        setError("Debes seleccionar archivos de tipo imagen");
        setTimeout(() => {
          setError(null);
        }, 4000);
        return;
      }
      newImagenes.push(URL.createObjectURL(file));
    });

    setImagenes(newImagenes);
  };

  const handleDeleteImg = (index) => {
    const newImagenes = [...imagenes];
    newImagenes.splice(index, 1);
    setImagenes(newImagenes);
  };

  return (
    <div className="contenido">
      <div className="container d-flex justify-content-center align-items-center mt-3">
        <form className="row g-3" onSubmit={handleSubmit}>
          {error && (
            <div className="alert alert-info text-center">{error}</div>
          )}

          {info && (
            <div className="alert alert-info text-center">
              <h2>¡Tu mascota se ha reportado con éxito!</h2>
            </div>
          )}

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
                <div className="col-12">
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
              </div>
            </div>
          </div>

          <div className="col-md-6 col-sm-12">
            <div className="data-section text-center">
              <h2 className="display-4 fw-bold lh-1">Datos de Pérdida</h2>
              <div className="row g-2">
                <div className="col-12">
                  <label className="form-label">Última vez visto</label>
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
                <div className="col-12">
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
                          d="M0 .5A.5.5 0 0 1 .5 0h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 0 .5Zm0 2A.5.5 0 0 1 .5 2h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm9 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm-9 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5Zm8 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm-8 2a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zzm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Z"
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
                <div className="col-12">
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
                {imagenes.length < 5 && (
                  <div className="col-12">
                    <label className="form-label">
                      Fotografía de tu Mascota (Si Aplica)
                    </label>
                    <input
                      ref={fileInputRef}
                      required
                      className={`form-control ${
                        error ? "border-danger" : null
                      }`}
                      type="file"
                      onChange={handleChangeImg}
                      multiple
                      accept="image/png, image/jpeg, image/jpg"
                      style={{ display: "none" }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="col-md-10 offset-md-1 mt-4 mb-3">
            <div className="row justify-content-center">
              {imagenes.map((imagen, index) => (
                <div key={index} className="col-2 mb-3">
                  <div className="position-relative">
                    <img
                      className="imagen-preview img-thumbnail"
                      src={imagen}
                      alt={`Imagen ${index + 1}`}
                      width="300"
                      height="300"
                    />
                    <button
                      type="button"
                      className="btn-close position-absolute top-0 end-0"
                      aria-label="Close"
                      onClick={() => handleDeleteImg(index)}
                    ></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 mt-4 mb-3 d-flex justify-content-center">
            {imagenes.length < 5 && (
              <button
                className="btn btn-secondary me-3"
                type="button"
                onClick={handleAddMoreImages}
              >
                Agregar más imágenes
              </button>
            )}
            <button className="btn btn-secondary" disabled={loading}>
              {
                loading ? (
                  <CSpinner color="secondary" />
                ) : (
                  "Publicar mascota"
                )
              }
            </button>
          </div>
        </form>
      </div>
      <div className="p-5 mb-2 bg-transparent text-body"></div>
      <Footer />
    </div>
  );
};

export default ReportarMascotas;
