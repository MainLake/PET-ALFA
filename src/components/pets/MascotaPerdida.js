import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getPet } from "../../api/pets";
import CommentsPet from "./CommentsPet";


const MascotaPerdida = () => {
  const { id_pet } = useParams();

  const [dataUser, setDataUser] = useState({});
  const [dataPet, setDataPet] = useState({});

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const [comments, setComments] = useState([]);

  useEffect(() => {

    const getPetData = async () => {
      const response = await getPet(id_pet);
      console.log(response)
      if (response.error) {
        setLoading(false);
        setError(response.error);
        setTimeout(() => {
          setError("");
        }, 3000);
        return;
      }

      setDataPet(response);
      setDataUser(response.user);
      setComments(response.feedback.comments);
      setLoading(false);
    }

    getPetData();

  }, []);

  return (
    <div className="container my-5 contenido">
      {loading ? (
        <div className="d-flex justify-content-center align-items-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      ) : (
        <>
          <h1 className="display-4 text-center mb-4">Información de Pérdida</h1>
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="row">
            <div className="col-md-6">
              <h2 className="h4">Datos del Usuario</h2>
              <ul className="list-group mb-4">
                <li className="list-group-item">
                  <strong>Nombre:</strong> {dataUser.name} {dataUser.lastname}
                </li>
                <li className="list-group-item">
                  <strong>Teléfono:</strong> {dataUser.cellphone || "No disponible"}
                </li>
                <li className="list-group-item">
                  <strong>Email:</strong> {dataUser.email || "No disponible"}
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <h2 className="h4">Información de la Mascota</h2>
              <ul className="list-group mb-4">
                <li className="list-group-item">
                  <strong>Nombre de la Mascota:</strong> {dataPet.name}
                </li>
                <li className="list-group-item">
                  <strong>Especie:</strong> {dataPet.details.specie}
                </li>
                <li className="list-group-item">
                  <strong>Género:</strong> {dataPet.details.gender}
                </li>
                <li className="list-group-item">
                  <strong>Edad:</strong> {dataPet.details.age}
                </li>
                <li className="list-group-item">
                  <strong>Última vez vista en:</strong> {dataPet.publication.last_seen}
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h2 className="h4">Descripción de la Mascota</h2>
              <p>{dataPet.details.description}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h2 className="h4">Imágenes de la Mascota</h2>
              <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  {dataPet.identify.gallery.map((image, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                      <img src={image.url} className="d-block w-100" alt={`Imagen ${index}`} />
                    </div>
                  ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Siguiente</span>
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <h2 className="h4">Detalles Adicionales</h2>
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>Tamaño:</strong> {dataPet.details.size}
                </li>
                <li className="list-group-item">
                  <strong>Raza:</strong> {dataPet.details.breed}
                </li>
                <li className="list-group-item">
                  <strong>Fecha de Pérdida:</strong>{" "}
                  {new Date(dataPet.publication.lost_date).toLocaleDateString()}
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
      <CommentsPet comments={comments} idPet={id_pet} idUser={dataUser._id} setComments={setComments}/>
    </div>
  );
};

export default MascotaPerdida;
