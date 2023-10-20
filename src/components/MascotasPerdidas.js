import React, { useEffect, useState } from "react";
import "../css/mascotasperdidas.css";
import Footer from "./Footer";
import axios from "axios";
import { Navigate, useNavigate } from "react-router";

const MascotasPerdidas = () => {

  const navigate = useNavigate();

  const [lostPetsData, setLostPetsData] = useState([]);
  const [sizeOptions, setSizeOptions] = useState([]);
  const [genderOptions, setGenderOptions] = useState([]);
  const [customBreedFilter, setCustomBreedFilter] = useState("");
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);
  const [showFullInfo, setShowFullInfo] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://api-v1-rest-pets-lost-1517776b3a69.herokuapp.com/api/pets/all"
      )
      .then(function (response) {
        console.log({
          response,
        })
        const data = response.data;
        setLostPetsData(data);
        setSizeOptions(["Grande", "Mediano", "Chico"]);
        setGenderOptions(["Macho", "Hembra"]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const handleCustomBreedFilterChange = (event) => {
    setCustomBreedFilter(event.target.value);
  };

  const clearFilters = () => {
    setSelectedSize("");
    setSelectedGender("");
    setCustomBreedFilter("");
  };

  const handleButtonInfo = (post) => {
    const {_id, owner} = post;
    console.log('Datos pre', _id, owner);
    navigate(`/Mascota-Perdida/${owner}/${_id}`);
  }

  return (
    <div>
      <div className="p-2 mb-2 bg-transparent text-body">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Filtros
          </button>
          <ul className="dropdown-menu dropdown-menu-dark">
            {sizeOptions && sizeOptions.length > 0 && (
              <li>
                <div className="dropdown-item">
                  <select
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                  >
                    <option value="">Seleccionar Tamaño</option>
                    {sizeOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </li>
            )}
            {genderOptions && genderOptions.length > 0 && (
              <li>
                <div className="dropdown-item">
                  <select
                    value={selectedGender}
                    onChange={(e) => setSelectedGender(e.target.value)}
                  >
                    <option value="">Seleccionar Género</option>
                    {genderOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </li>
            )}
            <li>
              <input
                type="text"
                className="dropdown-item"
                placeholder="Ingresar Raza"
                value={customBreedFilter}
                onChange={handleCustomBreedFilterChange}
              />
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" onClick={clearFilters}>
                Borrar Filtros
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="album py-2 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {lostPetsData.map((post) => (
              <div className="col" key={post}>
                <div className="card shadow-sm custom-card">
                  <div className="img-container">
                    <img
                      src={post.image.url}
                      alt={post.name}
                      width="300"
                      height="300"
                    />
                  </div>
                  <div className="card-body custom-bg">
                    <h5 className="card-text">
                      Nombre: <span className="name-text">{post.name}</span>
                    </h5>
                    <h5 className="card-text">
                      Raza: <span className="name-text">{post.breed}</span>
                    </h5>
                    <h5 className="card-text">
                      Última vez Visto:{" "}
                      <span className="name-text">{post.last_seen}</span>
                    </h5>
                    {showFullInfo && (
                      <>
                        <h5 className="card-text">
                          Edad: <span className="name-text">{post.age}</span>
                        </h5>
                        <h5 className="card-text">
                          Género:{" "}
                          <span className="name-text">{post.gender}</span>
                        </h5>
                        <h5 className="card-text">
                          Descripción:{" "}
                          <span className="name-text">{post.description}</span>
                        </h5>
                        <h5 className="card-text">
                          Se perdió el:{" "}
                          <span className="name-text">
                            {post.lost_date.substring(0, 10)}
                          </span>
                        </h5>
                        <h5 className="card-text">
                          Última actualización:{" "}
                          <span className="name-text">
                            {post.update
                              ? post.update.substring(0, 10)
                              : "Sin actualizar"}
                          </span>
                        </h5>
                      </>
                    )}
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6">
                          <button
                            className={`btn ${
                              showFullInfo ? "btn-danger" : "btn-primary"
                            } align-center btn-block mb-3`}
                            onClick={() => setShowFullInfo(!showFullInfo)}
                          >
                            {showFullInfo ? "Mostrar menos" : "Mostrar más"}
                          </button>
                        </div>
                        <div className="col-md-6">
                          <button onClick={evt => handleButtonInfo(post)} className="btn btn-info align-center btn-block">
                            Informacion de contacto
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MascotasPerdidas;
