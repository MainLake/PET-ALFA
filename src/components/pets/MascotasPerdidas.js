import { useEffect, useState } from "react";
import "../../css/mascotasperdidas.css";
import Footer from "../Footer";
import { useNavigate } from "react-router";

// Obtener mascotas
import { obtenerMascotas } from "../../api/pets";
import CardPet from "./CardPet";

const MascotasPerdidas = () => {
  const navigate = useNavigate();

  const [lostPetsData, setLostPetsData] = useState([]);
  const [showAllDetails, setShowAllDetails] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const getPets = async () => {
      const dataPets = await obtenerMascotas();
      console.log(dataPets);
      setLostPetsData([...dataPets])
      setLoading(false);
    }
    getPets();

  }, []);

  const handleButtonInfo = (pet) => {
    console.log('Datos de la mascota:', pet);
  };

  return (
    <>
      <div className="container mt-4 contenido">
        {loading ? (
          <h1 className="text-center mt-5">Cargando...</h1>
        ) : lostPetsData.length === 0 ? (
          <h1 className="text-center mt-5">No hay mascotas perdidas</h1>
        ) : (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {lostPetsData.map((pet) => (
              <div key={pet._id} className="col">
                <CardPet pet={pet} />
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>

  );
};

export default MascotasPerdidas;
