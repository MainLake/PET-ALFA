import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Main from "./components/Main";


import MascotasPerdidas from "./components/pets/MascotasPerdidas";
import MascotaPerdida from "./components/pets/MascotaPerdida";
import ReportarMascotas from "./components/pets/ReportarMascotas";

import Adopcion from "./components/informative/Adopcion";
import ComoReporto from "./components/informative/ComoReporto";
import CuidadosMascotas from "./components/informative/CuidadosMascotas";
import ImportanciaMascotas from "./components/informative/ImportanciaMascotas";

import Login from "./components/users/Login";
import Signup from "./components/users/SignUp";
import UserPost from "./components/users/UserPost";

import RescueForm from "./components/associationsRescuers/RescueForm";
import RescueAccount from "./components/associationsRescuers/RescueAccount";
import SociosPanel from "./components/associationsRescuers/SociosPanel";

import RouteProtect from "./routes/RouteProtect/RouteProtect";

import { loaderData, authUserStore } from "./context/globalContext";

const App = () => {
  const { loadingData } = loaderData();
  return (
    <div>

      {
        loadingData ? (
          <div className="loader position-fixed top-50 start-50 translate-middle text-center">
            <div>
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="mt-2">Cargando...</div>
            </div>
          </div>

        ) : (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/Mascotas-Perdidas" element={<MascotasPerdidas />} />
              <Route path="/Adopcion-Responsable" element={<Adopcion />} />
              <Route path="/Cuidados-Mascotas" element={<CuidadosMascotas />} />
              <Route path="/Importancia-Mascotas" element={<ImportanciaMascotas />} />
              <Route path="/Rescatista-Form" element={<RescueForm />} />
              <Route path="/Reportar-Mascotas" element={<ReportarMascotas />} />
              <Route path="/Como-Reporto" element={<ComoReporto />} />
              <Route path="/Perfil-Asociado" element={<RescueAccount />} />
              <Route path="/Panel-Rescatistas" element={<SociosPanel />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/Mis-Mascotas" element={<RouteProtect><UserPost /></RouteProtect>} />
              <Route path="/Mascota-Perdida/:id_user/:id_pet/" element={<MascotaPerdida />} />
            </Routes>
          </>
        )
      }


    </div>
  );
}

export default App;