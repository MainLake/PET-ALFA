import React, { useEffect, useState } from "react";
import React from "react";
import "../css/mascotasperdidas.css";
import Footer from "./Footer";
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
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow-sm">
                <svg
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height="300"
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
                <div className="card-body">
                  <h5 className="card-text">Nombre :</h5>
                  <h5 className="card-text">Edad :</h5>
                  <h5 className="card-text">Raza :</h5>
                  <h5 className="card-text">Ultima vez Visto :</h5>
                  <h5 className="card-text">-Descripción-</h5>
                  <h5 className="card-text">Se perdió el :</h5>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MascotasPerdidas;
