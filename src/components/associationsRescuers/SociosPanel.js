import '../css/panelsocios.css'
import PetRoma from '../../imagenes/PetRoma.jpeg';
import Footer from '../Footer';

const SociosPanel = ({ name_company, description, ImgEmpresa, heroColor, cardColor }) => {
    const cardsData = [
        {
            id: 1,
            image: PetRoma,
            title: "Campaña de Esterilización a Mascotas.",
            name_company: "PET ROMA",
            text: "Se realizará una campaña de estirilización en colonias populares el día 08 de Mayo a bajo costo.",
            address: "Casa Ejidal, Colonia Emiliano Zapata.",
            te_number: 9612703005
        },
        {
            id: 2,
            image: PetRoma,
            title: "Campaña de Vacunación a Mascotas.",
            name_company: "PET ROMA",
            text: "Se realizará una campaña de vacunación sin costo a Mascotas menores de 6 meses, el día 10 de Abril. ",
            address: "Parque Vicentenario.",
            te_number: 9612703025
        }
    ];

    return (
        <>
            <div className="hero" style={{backgroundColor: "#EDEDED"}}>
                <div className="container py-2">
                    <div className="row">
                        <div className="col-md-8">
                        <h1 className="display-2 fw-bold text-body-emphasis-white">PET ROMA</h1>
                            <p className="lead">Asociación conformada por Rescatistas y Veterinarios que ofrecen refugios y atención médica a animales en situación de calle, así como ofrecer campañas de esterilización a la comunidad.</p>
                            <p className="lead">Tapachula, Chiapas</p>
                            <a href="/Perfil-Asociado" className="btn btn-secondary btn-lg">Saber más...</a>
                        </div>
                        <div className="col-md-4 d-flex align-items-center justify-content-center">
                            <img src={PetRoma} className="img-fluid rounded-end hero-image" alt="Logo de la empresa" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-3 mb-2 bg-dark text-body"></div>
            <Footer />
        </>
    );
};

export default SociosPanel;
