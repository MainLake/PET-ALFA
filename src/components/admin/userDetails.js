import React from "react";
import UserList from "./userList";

const UserDetails = ({ user, onBack }) => {
    const hasAddress = user.address && user.address.trim() !== '';
    const isCollaborator = user.isCollaborator;

    return (
        <div className="col-md-8 mx-auto">
            <div className="card text-center">
                <div className="card-header">
                    <h2 className="card-title h5">Detalles del Usuario</h2>
                </div>
                <div className="card-body">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item h5"><strong>ID: </strong>{user._id}</li>
                        <li className="list-group-item h5"><strong>Nombre: </strong>{user.name}</li>
                        {!isCollaborator && <li className="list-group-item h5"><strong>Apellidos: </strong>{user.lastname}</li>}
                        <li className="list-group-item h5"><strong>Contacto: </strong>{user.cellphone}</li>
                        {hasAddress && <li className="list-group-item h5"><strong>Redes sociales: </strong> {user.identifier}</li>}
                        {hasAddress && <li className="list-group-item h5"><strong>Descripción: </strong> {user.description}</li>}
                    </ul>
                    <button className="btn btn-primary btn-sm mt-3" onClick={onBack}>Volver</button>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;
