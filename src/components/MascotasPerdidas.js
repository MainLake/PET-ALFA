import React, { useEffect, useState } from "react";

import "../css/mascotasperdidas.css";
import Footer from "./Footer";
import axios from "axios";

const MascotasPerdidas = () => {
  const [lostPetsData, setLostPetsData] = useState([]);
  const [sizeOptions, setSizeOptions] = useState([]);
  const [genderOptions, setGenderOptions] = useState([]);
  const [customBreedFilter, setCustomBreedFilter] = useState("");
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);


  useEffect(() => {
    axios
      .get(
        "https://api-v1-rest-pets-lost-1517776b3a69.herokuapp.com/api/pets/lost?owner=true"
      )

      .then(function (response) {
        const data = response.data;
        console.log(data[0]);
        setLostPetsData(data);
        console.log(data[0].image.url);
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

  // Aplicando y actualizando el estado de los filtros
  const applyFilters = () => {
    const newFilteredPets = lostPetsData.filter((pet) => {
      const sizeMatch = !selectedSize || pet.size === selectedSize;
      const genderMatch = !selectedGender || pet.gender === selectedGender;
      const breedMatch =
        !customBreedFilter || pet.breed.includes(customBreedFilter);

      return sizeMatch && genderMatch && breedMatch;
    });

  };

  const filteredPets = lostPetsData.filter((pet) => {
    const sizeMatch = !selectedSize || pet.size === selectedSize;
    const genderMatch = !selectedGender || pet.gender === selectedGender;
    const breedMatch =
      !customBreedFilter || pet.breed.includes(customBreedFilter);

    return sizeMatch && genderMatch && breedMatch;
  });


  return (
    <div>
      <div className="p-3 mb-2 bg-transparent text-body">
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

      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {filteredPets.map((post) => (
              <div className="col" key={post}>
                <div className="card shadow-sm">
                  <img src={post.image.url} />
                  <div className="card-body">
                    <h5 className="card-text">Nombre: {post.name}</h5>
                    <h5 className="card-text">Edad: {post.age}</h5>
                    <h5 className="card-text">Genero: {post.gender} </h5>
                    <h5 className="card-text">Raza: {post.breed}</h5>
                    <h5 className="card-text">
                      Ultima vez Visto: {post.last_seen}
                    </h5>
                    <h5 className="card-text">
                      Descripcion: {post.description}
                    </h5>
                    <h5 className="card-text">
                      Se perdió el: {post.lost_date.substring(0, 10)}
                    </h5>
                    <h5 className="card-text">
                      Ultima actualizacion:{" "}
                      {post.update
                        ? post.update.substring(0, 10)
                        : "Sin actualizar"}
                    </h5>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-body-secondary"></small>
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
