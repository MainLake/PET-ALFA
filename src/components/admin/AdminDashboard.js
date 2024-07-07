import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router";
import { authUserStore } from "../../context/globalContext";
import UserList from "./userList";
// Obtener usuarios y colaboradores
import { obtenerUsuarios } from "../../api/administradores";
import { obtenerUsuariosColaboradores } from "../../api/administradores";
import UserCollaboratorList from "./UserCollaboratorList";

import UserDetails from "./UserDetails";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const { user } = authUserStore();

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  useEffect(() => {
    const getUser = async () => {
      const dataUsers = await obtenerUsuarios(user.dataToken.token);
      console.log(dataUsers);
      setUserData([...dataUsers]);
      setLoading(false);
    };
    getUser();

    const getCollab = async () => {
      const dataCollabs = await obtenerUsuariosColaboradores(user.dataToken.token);
      console.log(dataCollabs);
      setUserData([...dataCollabs]);
      setLoading(false);
    };
    getCollab();
  }, []);

  return (
    <div className="container-fluid bg-light" style={{ minHeight: "100vh" }}>
      {loading ? (
        <h1>Cargando...</h1>
      ) : userData.length === 0 ? (
        <h1>No hay usuarios registrados</h1>
      ) : (
        <div className="container mt-4">
          <h1 className="display-4 fw-bold text-center text-body-emphasis">
            Panel de Administración
          </h1>
          <div class="p-3 mb-2 bg-transparent text-body"></div>
          <div className="row">
            <div className="col-md-6">
              <div className="text-center">
                <h2 className="title">Usuarios</h2>
              </div>
              <UserList />
            </div>
            <div className="col-md-6">
              <div className="text-center">
                <h2 className="title">Asociaciones y Rescatistas</h2>
              </div>
              <UserCollaboratorList />
            </div>
          </div>
          {selectedUser && (
            <div className="row mt-4">
              <div className="col-md-6 mx-auto">
                <div className="text-center">
                  <h2 className="title">Detalles del Usuario</h2>
                </div>
                <UserDetails
                  user={selectedUser}
                  onBack={() => setSelectedUser(null)}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
