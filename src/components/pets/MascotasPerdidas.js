import { useEffect, useState } from "react";
import "../../css/mascotasperdidas.css";
import Footer from "../Footer";
import { useNavigate } from "react-router";

// Obtener mascotas
import { obtenerMascotas } from "../../api/pets";

const MascotasPerdidas = () => {
  const navigate = useNavigate();

  const [lostPetsData, setLostPetsData] = useState([]);
  const [showAllDetails, setShowAllDetails] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Obtener mascotas
    const getData = async () => {
      const data = await obtenerMascotas();
      setLostPetsData(data);
      setLoading(false);
    }

    getData();

  }, []);

  const handleButtonInfo = (pet) => {
    console.log('Datos de la mascota:', pet);
  };

  return (
    <div>

      {loading ? <h1>Cargando...</h1> : lostPetsData.length === 0 ? <h1>No hay mascotas perdidas</h1> :

        (<div className="album py-2 bg-body-tertiary">
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
        </div>)

      }

      <Footer />
    </div>
  );
};

export default MascotasPerdidas;
