import { useEffect, useState } from "react";
import "../../css/imagen.css";
import "../../css/reportemascota.css";
//import Footer from "../Footer";

import { CSpinner } from "@coreui/react";
import { createPost } from "../../api/pets";
import { authUserStore } from "../../context/globalContext";
import { useNavigate } from "react-router-dom";

import ImagenesMascotas from "./ImagenesMascotas";

const extencionesImagenes = ["png", "jpg", "jpeg"];

const ReportarMascotas = () => {
  const navigate = useNavigate();
  const { user, logout, isAuthenticated } = authUserStore();
  const [error, setError] = useState("");
  const [info, setInfo] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);

  const [gallery, setGallery] = useState([]);

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
    image: "",
    images:"",
    location:""
  });

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/Login");
    }
  }, [isAuthenticated]);

  const handleSubmit = async (evt) => {
    setLoading(true);
    evt.preventDefault();
    const formData = new FormData();

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
    formData.append("image", gallery[0].file);
    formData.append("images",gallery.file)

    gallery.forEach((file) => {
      formData.append("gallery", file.file);
    });
    formData.append("coordinates", post.coordinates);

    setTimeout(() => {
      console.log("Enviando formulario");
    }, 3000);

    const response = await createPost(formData, user.dataToken.token);
    console.log(response);

    if (response.error) {
      if (response.error.response.status === 401) {
        logout();
        navigate("/Login");
        return;
      }

      setError(response.error);
      setTimeout(() => {
        setError("");
      }, 3000);
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
      gallery: [],
      size: "Chico",
      breed: "Mestizo",
      lost_date: "",
      owner: false,
      location:""
    });

    setGallery([]);
    setInfo(true);
    setTimeout(() => {
      setInfo(false);
    }, 5000);
    setLoading(false);
  };

  const handleNext = () => {
    setShowAdditionalFields(true);
  };

  return (
    <div className="container-reportar">
      <div className="bg-reportar"></div>
      <div className="form-container">
        <form className="form-section-reportar" onSubmit={handleSubmit}>
          {error && (
            <div className="alert alert-info text-center">{error}</div>
          )}

          {info && (
            <div className="alert alert-info text-center">
              <h2>¡Tu mascota se ha reportado con éxito!</h2>
            </div>
          )}
          {!showAdditionalFields ? (
            <div>
              <div className="reportar-section">
                <h2>Datos de la mascota</h2>
                <p className="welcome-title">¡Anímate!</p>
              </div>
              <div className="container-reporter">
                <label className="input-label-reporter" htmlFor="nombre">
                  Nombre:
                </label>
                <input
                  value={post.name}
                  onChange={(evt) =>
                    setPost({ ...post, name: evt.target.value })
                  }
                  required
                  type="text"
                  className="input-reporter"
                  placeholder="Nombre de la mascota"
                  id="nombre"
                />

                <div className="input-group-reporter">
                  <div className="input-item">
                    <label className="input-label-reporter">Especie</label>
                    <select
                      value={post.specie}
                      onChange={(evt) =>
                        setPost({ ...post, specie: evt.target.value })
                      }
                      className="input-reporter"
                    >
                      <option value="Perro">Perro</option>
                      <option value="Gato">Gato</option>
                      <option value="Ave">Ave</option>
                    </select>
                  </div>

                  <div className="input-item">
                    <label className="input-label-reporter">Género</label>
                    <select
                      value={post.gender}
                      onChange={(evt) =>
                        setPost({ ...post, gender: evt.target.value })
                      }
                      required
                      className="input-reporter"
                    >
                      <option value="Hembra">Hembra</option>
                      <option value="Macho">Macho</option>
                    </select>
                  </div>
                </div>

                <label className="input-label-reporter">Raza</label>
                <select
                  value={post.breed}
                  onChange={(evt) =>
                    setPost({ ...post, breed: evt.target.value })
                  }
                  className="input-reporter"
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
                <div className="input-group-reporter">
                  <div className="input-item">
                    <label className="input-label-reporter">Edad</label>
                    <input
                      value={post.age}
                      onChange={(evt) =>
                        setPost({ ...post, age: evt.target.value })
                      }
                      required
                      type="number"
                      min={1}
                      className="input-reporter"
                      placeholder="Edad"
                    />
                  </div>
                  <div className="input-item">
                    <label className="input-label-reporter">Tamaño</label>
                    <input
                      value={post.size}
                      onChange={(evt) =>
                        setPost({ ...post, size: evt.target.value })
                      }
                      required
                      type="number"
                      min={1}
                      className="input-reporter"
                      placeholder="Tamaño"
                    />
                  </div>
                </div>
                <div className="button-direction">
                  <button
                    className="buton-reporter"
                    disabled={loading}
                    onClick={handleNext}
                  >
                    {loading ? <CSpinner /> : "Siguiente"} ➡️{" "}
                    {/*Cambiar por un ICON*/}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="reportar-section">
                <h2>Datos de Pérdida</h2>
                <p className="welcome-title"> Animate! </p>
              </div>
              <div className="container-reporter">
                <label className="input-label-reporter" htmlFor="description">
                  Última Vez Visto
                </label>
                <input
                  value={post.last_seen}
                  onChange={(evt) =>
                    setPost({ ...post, last_seen: evt.target.value })
                  }
                  required
                  type="text"
                  className="input-reporter"
                  placeholder="Descripción de la última vez visto"
                  id="last_seen"
                />
                <label className="input-label-reporter" htmlFor="description">
                  Descripción
                </label>
                <textarea
                  value={post.description}
                  onChange={(evt) =>
                    setPost({ ...post, description: evt.target.value })
                  }
                  required
                  className="input-reporter"
                  placeholder="Descripción de la mascota"
                  id="description"
                ></textarea>
                <label className="input-label-reporter" htmlFor="lost_date">
                  Fecha de pérdida
                </label>
                <input
                  value={post.lost_date}
                  onChange={(evt) =>
                    setPost({ ...post, lost_date: evt.target.value })
                  }
                  required
                  type="date"
                  className="input-reporter"
                  id="lost_date"
                />
                <label className="input-label-reporter" htmlFor="owner">
                  ¿Es usted el dueño de la mascota?
                </label>
                <select
                  value={post.owner}
                  onChange={(evt) =>
                    setPost({ ...post, owner: evt.target.value })
                  }
                  required
                  className="input-reporter"
                  id="owner"
                >
                  <option value={true}>Sí</option>
                  <option value={false}>No</option>
                </select>
                <ImagenesMascotas setGallery={setGallery} gallery={gallery} />
                <div className="button-direction">
                  <button
                    type="submit"
                    className="buton-reporter"
                    disabled={loading}
                  >
                    {loading ? <CSpinner /> : "Reportar"}
                  </button>
                </div>
              </div>
            </div>
          )}
        </form>  
      </div>
    </div>
  );
};

export default ReportarMascotas;
