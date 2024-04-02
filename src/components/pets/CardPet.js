import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CardPet = ({ pet }) => {

    const navigate = useNavigate();

    const [showAllDetails, setShowAllDetails] = useState(false);

    const onClickInformacionContacto = (idPet, idUser) => {
        navigate(`/Mascota-Perdida/${idUser}/${idPet}`);
        return;
    }

    return (
        <div className="card-group">
            <div className="card">
                <img
                    src={pet.identify.image.url}
                    className="card-img-top"
                    alt={pet.name}
                />
                <div className="card-body">
                    <h5 className="card-title">Nombre: {pet.name}</h5>
                    <p className="card-text">Raza: {pet.details.breed}</p>
                    <p className="card-text">
                        Última vez Visto: {pet.publication.lost_date.split("T")[0]}
                    </p>
                    {showAllDetails && (
                        <>
                            <p className="card-text">Tamaño: {pet.details.size}</p>
                            <p className="card-text">
                                Lugar donde se Extravió: {pet.publication.last_seen}
                            </p>
                            <p className="card-text">Edad: {pet.details.age}</p>
                            <p className="card-text">Género: {pet.details.gender}</p>
                            <p className="card-text">Especie: {pet.details.specie}</p>
                        </>
                    )}
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button
                            className={`btn btn-primary me-md-2 mb-2 ${showAllDetails ? "mb-md-0" : ""}`}
                            onClick={() => setShowAllDetails(!showAllDetails)}
                        >
                            {showAllDetails ? "Mostrar menos" : "Mostrar más"}
                        </button>
                        <button onClick={evt => onClickInformacionContacto(pet._id, pet.user)} className="btn btn-secondary">
                            Información de contacto
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardPet;
