import React, { useEffect, useState } from "react";
import { peticionesColaborador } from "../../api/administradores";
import { aceptarPeticion } from "../../api/administradores";
import { rechazarPeticion } from "../../api/administradores";
import { authUserStore } from "../../context/globalContext";

const CollaboratorsRequest = () => {
    const [userData, setUserData] = useState([]);
    const { user } = authUserStore();

    useEffect(() => {
        const getRqsts = async () => {
            const dataCollab = await peticionesColaborador(user.dataToken.token);
            console.log(dataCollab);

            const dataStatus = dataCollab.filter((requests) => requests.status === 'pending');
            setUserData([...dataStatus]);
        };
        getRqsts();
    }, []);

    const handleAceptarSolicitud = async (postId) => {
        try {
            const response = await aceptarPeticion(user.dataToken.token, postId);
            console.log(response);

            const newData = userData.filter((data) => data._id !== postId);
            setUserData(newData); // Actualiza el estado con los datos filtrados para reflejar el cambio
        } catch (error) {
            console.error("Error al aceptar la solicitud:", error);
        }
    };

    const handleRechazarSolicitud = async (postId) => {
        try {
            const response = await rechazarPeticion(user.dataToken.token, postId);
            console.log(response);

            const newData = userData.filter((data) => data._id !== postId);
            setUserData(newData); // Actualiza el estado con los datos filtrados para reflejar el cambio
        } catch (error) {
            console.error("Error al rechazar la solicitud:", error);
        }
    };

    return (
        <div className="container" style={{ backgroundColor: '#F9F9F9' }}>
            <div className="container mt-5">
                <h1 className="display-4 fw-bold text-center text-body-emphasis">Solicitudes de Administrador</h1>
                <div className="p-3 mb-2 bg-transparent text-body"></div>
                <div className="table-responsive">
                    <table className="table table-bordered table-hover table-striped text-center h6">
                        <thead className="table-dark">
                            <tr>
                                <th>Usuario</th>
                                <th>Email</th>
                                <th>Dirección</th>
                                <th>Redes Sociales</th>
                                <th>Fecha de publicación</th>
                                <th>Descripción</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userData.map((requests) => (
                                <tr key={requests._id}>
                                    <td>{requests.user.name}</td>
                                    <td>{requests.email || "N/A"}</td>
                                    <td>{requests.user.address || "N/A"}</td>
                                    <td>{requests.user.identifier || "N/A"}</td>
                                    <td>{requests.timestamp}</td>
                                    <td>{requests.user.description}</td>
                                    <td>
                                        <div className="d-flex justify-content-center gap-2">
                                            <button className="btn btn-primary btn-sm" onClick={() => handleAceptarSolicitud(requests._id)}>Aceptar solicitud</button>
                                            <button className="btn btn-danger btn-sm" onClick={() => handleRechazarSolicitud(requests._id)}>Rechazar solicitud</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CollaboratorsRequest;
