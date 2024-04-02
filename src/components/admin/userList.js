import React, { useEffect, useState } from "react";
import UserDetails from "./UserDetails";
import AdminDashboard from "./AdminDashboard";
import { authUserStore } from "../../context/globalContext";

import { obtenerUsuarios } from "../../api/administradores";
import { eliminarUsuario } from "../../api/administradores";

const UserList = () => {
    const [showUserDetails, setShowUserDetails] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [userData, setUserData] = useState([]);
    const [deleteMessage, setDeleteMessage] = useState("");
    const { user } = authUserStore();

    useEffect(() => {
        const getUser = async () => {
            const dataUsers = await obtenerUsuarios(user.dataToken.token);
            setUserData([...dataUsers]);
        };
        getUser();
    }, []);

    const handleEliminarUsuario = async (deleteId) => {
        const token = user.dataToken.token;

        try {
            const response = await eliminarUsuario(token, deleteId);
            console.log(response);

            const newData = userData.filter((data) => data._id !== deleteId);
            setUserData(newData); // Actualiza el estado con los datos filtrados para reflejar la eliminación
            setDeleteMessage("Usuario eliminado correctamente");

            // Después de 3 segundos, desaparecerá el mensaje
            setTimeout(() => {
                setDeleteMessage("");
            }, 3000);

        } catch (error) {
            console.error("Error al rechazar la solicitud:", error);
        }
    };

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
                        <div className="alert alert-success" role="alert" style={{ marginBottom: "10px" }}>
                            {deleteMessage}
                        </div>
                    )}
                    <ul className="list-group">
                        {userData.map((user) => (
                            <li key={user._id} className="list-group-item d-flex justify-content-between align-items-center">
                                <div onClick={() => handleUserDetails(user)}>
                                    <p>{user.name} {user.lastname}</p>
                                </div>
                                <div>
                                    <button onClick={() => handleEliminarUsuario(user._id)} className="btn btn-danger btn-sm">Eliminar</button>
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

export default UserList;
