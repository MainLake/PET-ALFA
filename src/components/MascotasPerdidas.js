import React, { useEffect, useState } from "react";
import "../css/mascotasperdidas.css";
import Footer from "./Footer";
import { useNavigate } from "react-router";
import PP1 from '../imagenes/PP1.jpg';
import PP2 from '../imagenes/PP3.jpg';
import PP3 from '../imagenes/PP2.jpg';
const MascotasPerdidas = () => {
  const navigate = useNavigate();

  const [lostPetsData, setLostPetsData] = useState([]);
  const [showAllDetails, setShowAllDetails] = useState(false);

  useEffect(() => {
    const data = [
      {
        id: 1,
        name: "Bobby",
        breed: "Golden Retriever",
        last_seen: "2024-03-15",
        color: "Dorado",
        size: "Grande",
        location: "Parque Central",
        age: "2 años",
        gender: "Macho",
        species: "Perro",
        image: PP1,
      },
      {
        id: 2,
        name: "Whiskers",
        breed: "Maine Coon",
        last_seen: "2024-03-13",
        color: "Negro",
        size: "Mediano",
        location: "Calle Principal",
        age: "4 años",
        gender: "Hembra",
        species: "Gato",
        image: PP2,
      },
      {
        id: 3,
        name: "Rex",
        breed: "Bulldog Francés",
        last_seen: "2024-03-10",
        color: "Blanco y Marrón",
        size: "Pequeño",
        location: "Plaza del Pueblo",
        age: "3 años",
        gender: "Macho",
        species: "Perro",
        image: PP3,
      },
    ];

    setLostPetsData(data);
  }, []);

  const handleButtonInfo = (pet) => {
    console.log('Datos de la mascota:', pet);
  };

  return (
    <div>
      <div className="album py-2 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {lostPetsData.map((pet) => (
              <div className="col" key={pet.id}>
                <div className="card shadow-sm custom-card">
                  <div className="img-container">
                    <img
                      src={pet.image}
                      alt={pet.name}
                      className="card-img-top img-fluid"
                    />
                  </div>
                  <div className="card-body custom-bg">
                    <h5 className="card-text">
                      Nombre: <span className="name-text">{pet.name}</span>
                    </h5>
                    <h5 className="card-text">
                      Raza: <span className="name-text">{pet.breed}</span>
                    </h5>
                    <h5 className="card-text">
                      Última vez Visto:{" "}
                      <span className="name-text">{pet.last_seen}</span>
                    </h5>
                    {showAllDetails && (
                      <>
                        <h5 className="card-text">
                          Color: <span className="name-text">{pet.color}</span>
                        </h5>
                        <h5 className="card-text">
                          Tamaño: <span className="name-text">{pet.size}</span>
                        </h5>
                        <h5 className="card-text">
                          Lugar donde se Extravió:{" "}
                          <span className="name-text">{pet.location}</span>
                        </h5>
                        <h5 className="card-text">
                          Edad: <span className="name-text">{pet.age}</span>
                        </h5>
                        <h5 className="card-text">
                          Género: <span className="name-text">{pet.gender}</span>
                        </h5>
                        <h5 className="card-text">
                          Especie: <span className="name-text">{pet.species}</span>
                        </h5>
                      </>
                    )}
                    <div className="row mt-3">
                      <div className="col">
                        <button
                          onClick={() => setShowAllDetails(!showAllDetails)}
                          className="btn btn-secondary btn-block"
                        >
                          {showAllDetails ? "Mostrar menos" : "Mostrar más"}
                        </button>
                      </div>
                      <div className="col">
                        <button
                          onClick={() => handleButtonInfo(pet)}
                          className="btn btn-secondary btn-block"
                        >
                          Información de contacto
                        </button>
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
