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
import FormRes from "./components/FormRes";

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
        <Route path="/Reportar-Mascotas" element={<RouteProtect><ReportarMascotas/></RouteProtect>} />
        <Route path="/Como-Reporto" element={<ComoReporto />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Mis-Mascotas" element={<RouteProtect><UserPost/></RouteProtect>} />
        <Route path="/Mascota-Perdida/:id_user/:id_pet/" element={<MascotaPerdida/>}/>
        <Route path="/FormRes" element={<FormRes/>}></Route>
      </Routes>
    </div>
  );
}

export default App;