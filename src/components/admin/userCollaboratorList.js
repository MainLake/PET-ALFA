import React, { useEffect, useState } from "react";
import UserDetails from "./userDetails";
import AdminDashboard from "./AdminDashboard";
import { authUserStore } from "../../context/globalContext";

import { obtenerUsuariosColaboradores } from "../../api/administradores";
import { eliminarUsuarioColaborador } from "../../api/administradores";

const UserCollaboratorList = () => {
    const [showUserDetails, setShowUserDetails] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [userData, setUserData] = useState([]);
    const [deleteMessage, setDeleteMessage] = useState("");
    const [loading, setLoading] = useState(true);
    const { user } = authUserStore();

    useEffect(() => {
        const getCollab = async () => {
            const dataCollabs = await obtenerUsuariosColaboradores(user.dataToken.token);
            console.log(dataCollabs);
            setUserData([...dataCollabs]);
            setLoading(false);
        };
        getCollab();
    }, []);

    //eliminar usuario
    const handleEliminarUsuarioColaborador = async (deleteId) => {
        const token = user.dataToken.token;

        try {
            const response = await eliminarUsuarioColaborador(token, deleteId);
            console.log(response);

            const newData = userData.filter(data => data._id !== deleteId);
            setUserData(newData); // Actualiza el estado para reflejar el cambio en la UI automáticamente
            setDeleteMessage("Usuario eliminado correctamente");

            // Después de 3 segundos, desaparecerá el mensaje
            setTimeout(() => {
                setDeleteMessage("");
            }, 3000);
        } catch (error) {
            console.error("Error al rechazar la solicitud:", error);
        }
    }

    const handleUserDetails = (user) => {
        setSelectedUser(user);
        setShowUserDetails(true);
    };

    return (
        <div>
            {showUserDetails ? (
                <UserDetails user={selectedUser} onBack={() => setShowUserDetails(false)} />
            ) : (
                <div>
                    {deleteMessage && (
                        <div class="alert alert-success d-flex align-items-center" role="alert">
                            {deleteMessage}
                        </div>
                    )}
                    <ul className="list-group">
                        {userData.map((user) => (
                            <li key={user._id} className="list-group-item d-flex justify-content-between align-items-center">
                                <div onClick={() => onSelect(user)}>
                                    {user.name}
                                </div>
                                <div>
                                    <button onClick={() => handleEliminarUsuarioColaborador(user._id)} className="btn btn-danger btn-sm">Eliminar</button>
                                    <button onClick={() => handleUserDetails(user)} className="btn btn-primary btn-sm mx-2">Mostrar Detalles</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default UserCollaboratorList;
