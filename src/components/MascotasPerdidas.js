import { useEffect, useState } from "react";
import "../css/mascotasperdidas.css";
import Footer from "./Footer";
import { getAllMascotas } from "../api/mascotasRequest";
import { useNavigate } from "react-router";

const MascotasPerdidas = () => {

  const navigate = useNavigate();

  const [lostPetsData, setLostPetsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataAllMascotas = await getAllMascotas();
        console.log(dataAllMascotas);
        setLostPetsData(dataAllMascotas);

      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])

  const handleButtonInfo = (post) => {
    const { _id, owner } = post;
    console.log('Datos pre', _id, owner);
    navigate(`/Mascota-Perdida/${owner}/${_id}`);
  }

  return (
    <div>
      <div className="album py-2 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {lostPetsData.map((post) => (
              <div className="col" key={post}>
                <div className="card shadow-sm custom-card">
                  <div className="img-container">
                    <img
                      src={post.identify.image.url}
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
                    <div className="container">
                      <div className="row">
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


