import React, { useEffect, useState } from "react";
import "../css/mascotasperdidas.css";
import Footer from "./Footer";
import { useNavigate } from "react-router";
import { Modal, Button } from "react-bootstrap";
import PP1 from '../imagenes/PP1.jpg';
import PP2 from '../imagenes/PP3.jpg';
import PP3 from '../imagenes/PP2.jpg';

const MascotasPerdidas = () => {
  const navigate = useNavigate();

  const [lostPetsData, setLostPetsData] = useState([]);
  const [showAllDetails, setShowAllDetails] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

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
        images: [PP1, PP2, PP3],
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
        images: [PP2, PP3, PP1],
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
        images: [PP3, PP1, PP2],
      },
    ];

    setLostPetsData(data);
  }, []);

  const handleButtonInfo = (pet) => {
    console.log('Datos de la mascota:', pet);
  };

  return (
    <div className="contenido">
      <div className="album py-2 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {lostPetsData.map((pet) => (
              <div className="col" key={pet.id}>
                <div className="card shadow-sm custom-card">
                  <div className="img-container">
                    <div className="card-img-top img-fluid">
                      <div id={`carousel-${pet.id}`} className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                          {pet.images.map((image, index) => (
                            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                              <img src={image} className="d-block w-100" alt={pet.name} onClick={() => {
                                setSelectedImage(image);
                                setShowModal(true);
                              }} />
                            </div>
                          ))}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target={`#carousel-${pet.id}`} data-bs-slide="prev">
                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target={`#carousel-${pet.id}`} data-bs-slide="next">
                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-body custom-bg">
                    <h5 className="card-text card-lost">
                      Nombre: <span className="name-text text-lost">{pet.name}</span>
                    </h5>
                    <h5 className="card-text card-lost">
                      Raza: <span className="name-text text-lost">{pet.breed}</span>
                    </h5>
                    <h5 className="card-text card-lost">
                      Última vez Visto:{" "}
                      <span className="name-text text-lost">{pet.last_seen}</span>
                    </h5>
                    {showAllDetails && (
                      <>
                        <h5 className="card-text card-lost">
                          Color: <span className="name-text text-lost">{pet.color}</span>
                        </h5>
                        <h5 className="card-text card-lost">
                          Lugar donde se Extravió:{" "}
                          <span className="name-text text-lost">{pet.location}</span>
                        </h5>
                        <h5 className="card-text card-lost">
                          Edad: <span className="name-text text-lost">{pet.age}</span>
                        </h5>
                        <h5 className="card-text card-lost">
                          Género: <span className="name-text text-lost">{pet.gender}</span>
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

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <img src={selectedImage} alt="Pet" className="img-fluid" />
        </Modal.Body>
      </Modal>

      <Footer />
    </div>
  );
};

export default MascotasPerdidas;
