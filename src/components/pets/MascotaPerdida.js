import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import "../../css/mascotasperdidas.css";


const MascotaPerdida = () => {
  const { id_user, id_pet } = useParams();

  const [dataUser, setDataUser] = useState({});
  const [dataPet, setDataPet] = useState({});

  useEffect(() => {

  }, []);

  return (
    <div className="container my-5">
      <h1 className="display-4 text-center mb-4">Información de Pérdida</h1>
      <div className="row">
        <div className="col-md-6">
          <h2 className="h5">Datos del Usuario</h2>
          <ul className="list-group mb-4">
            <li className="list-group-item">
              <strong>Nombre:</strong> {dataUser.name} {dataUser.lastname}
            </li>
            <li className="list-group-item">
              <strong>Teléfono:</strong> {dataUser.cellphone}
            </li>
            <li className="list-group-item">
              <strong>Email:</strong> {dataUser.email}
            </li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2 className="h5">Información de la Mascota</h2>
          <ul className="list-group mb-4">
            <li className="list-group-item">
              <strong>Nombre de la Mascota:</strong> {dataPet.name}
            </li>
            <li className="list-group-item">
              <strong>Especie:</strong> {dataPet.specie}
            </li>
            <li className="list-group-item">
              <strong>Género:</strong> {dataPet.gender}
            </li>
            <li className="list-group-item">
              <strong>Edad:</strong> {dataPet.age}
            </li>
            <li className="list-group-item">
              <strong>Última vez vista en:</strong> {dataPet.last_seen}
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h2 className="h5">Descripción de la Mascota</h2>
          <p>{dataPet.description}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h2 className="h5">Imagen de la Mascota</h2>
          <div className="image-container">
            <img src={dataPet.image?.url} alt="Mascota" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-6">
          <h2 className="h5">Detalles Adicionales</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Tamaño:</strong> {dataPet.size}
            </li>
            <li className="list-group-item">
              <strong>Raza:</strong> {dataPet.breed}
            </li>
            <li className="list-group-item">
              <strong>Fecha de Pérdida:</strong>{" "}
              {new Date(dataPet.lost_date).toLocaleDateString()}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MascotaPerdida;
