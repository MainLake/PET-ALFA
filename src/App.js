import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import AdminDashboard from "./components/admin/AdminDashboard";
import CollaboratorsRequest from "./components/admin/CollaboratorsRequest";
import SociosAnuncios from "./components/associationsRescuers/SociosAnuncios";
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
import { loaderData, authUserStore } from "./context/globalContext";

import IndexComponentsCommon from "./components/componentsCommon/IndexComponentsCommon";

import Footer from "./components/Footer";

const App = () => {
  const { loadingData } = loaderData();
  return (
    <div>
      {loadingData ? (
        <div>Loading...</div>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/dev" element={<IndexComponentsCommon/>}/>
            <Route path="/Admin-Dashboard" element={<AdminDashboard />} />
            <Route path="/Collaborator-Request" element={<CollaboratorsRequest />} />
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
            <Route path="/Mis-Mascotas" element={<UserPost />} />
            <Route path="/Mis-Anuncios" element={<SociosAnuncios />} />
            <Route path="/Mascota-Perdida/:id_user/:id_pet/" element={<MascotaPerdida />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
