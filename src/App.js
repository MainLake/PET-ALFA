import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import MascotasPerdidas from "./components/MascotasPerdidas";
import Adopcion from "./components/Adopcion";
import ComoReporto from "./components/ComoReporto";
import Cuidados from "./components/CuidadosMascotas";
import Importancia from "./components/ImportanciaMascotas";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import ReportarMascotas from "./components/ReportarMascotas";
import UserPost from "./components/UserPosts/UserPost";
import RouteProtect from "./routes/RouteProtect/RouteProtect";
import MascotaPerdida from "./components/MascotaPerdida.js/MascotaPerdida";
import RescueForm from "./components/RescueForm";
import RescueAccount from "./components/RescueAccount";
import SociosPanel from "./components/SociosPanel";
import SociosAnuncios from "./components/SociosAnuncios";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Mascotas-Perdidas" element={<MascotasPerdidas />} />
        <Route path="/Adopcion-Responsable" element={<Adopcion />} />
        <Route path="/Cuidados-Mascotas" element={<Cuidados />} />
        <Route path="/Importancia-Mascotas" element={<Importancia />} />
        <Route path="/Rescatista-Form" element={<RescueForm />} />
        <Route path="/Reportar-Mascotas" element={<ReportarMascotas/>} />
        <Route path="/Como-Reporto" element={<ComoReporto />} />
        <Route path="/Perfil-Asociado" element={<RescueAccount />} />
        <Route path="/Panel-Rescatistas" element={<SociosPanel />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Mis-Mascotas" element={<RouteProtect><UserPost/></RouteProtect>} />
        <Route path="/Mis-Anuncios" element={<SociosAnuncios/>} />
        <Route path="/Mascota-Perdida/:id_user/:id_pet/" element={<MascotaPerdida/>}/>
      </Routes>
    </div>
  );
}

export default App;