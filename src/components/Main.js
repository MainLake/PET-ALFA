import { Link } from "react-router-dom";

// Importaciones de imaganes
import Logo from "../imagenes/Logo.png";
import M1 from "../imagenes/mm4.png";
import M2 from "../imagenes/mm5.png";
import M3 from "../imagenes/mm6.png";

const Main = () => {
  return (
    <main>
      
      <div>
        <h1>Perdidos en Tapachula</h1>
      </div>

      <div>

        <div>
          <img src={M1} alt="Mascota" />
          <h2>Adopción Responsable</h2>
          <p>
            <Link to="/Adopcion-Responsable">Conocer Más &raquo;</Link>
          </p>
        </div>

        <div>
          <img src={M2} alt="Mascota" />
          <h2>¿Por qué tener una Mascota?</h2>
          <p>
            <Link to="/Importancia-Mascotas">Conocer Más &raquo;</Link>
          </p>
        </div>

        <div>
          <img src={M3} alt="Mascota" />
          <h2>¿Cómo Cuido a Mi Mascota?</h2>
          <p>
            <Link to="Cuidados-Mascotas">Conocer Más &raquo;</Link>
          </p>
        </div>

      </div>

      <div>

        <div>
          <h1>¿Por qué usar Perdidos en Tapachula?</h1>
          <p>
            Perdidos en Tapachula "PET"' ha sido desarrollado con el propósito
            de brindar asistencia en la búsqueda de mascotas perdidas.
            Nuestra misión es proporcionar a la comunidad una plataforma que
            simplifique la tarea de encontrar y reportar mascotas extraviadas.
            Estamos comprometidos en unir a las mascotas con sus familias y
            ser un recurso confiable para quienes buscan a sus leales compañeros.
          </p>
        </div>

        <div>
          <img src={Logo} alt="Logo" />
        </div>

      </div>

      <div>

        <div>

          <h1>¿Deseas formar parte de Este Proyecto?</h1>
          
          <p>
            Si eres miembro de una asociación o un rescatista independiente comprometido con la salvaguarda de mascotas y deseas unirte a este proyecto, por favor, completa el siguiente formulario. Esto te permitirá formar parte de la sección de Rescatistas y Asociaciones, donde podrás publicar anuncios y campañas relacionadas con tu labor altruista.
          </p>
          
          <div>
            <Link to="/Rescatista-Form">Ir al Formulario</Link>
          </div>
        
        </div>

      </div>

    </main>
  );
};

export default Main;
