import { useState } from 'react';
import PetRoma from '../../imagenes/PetRoma.jpeg';
import Footer from '../Footer';

import RescueForm from './RescueForm';

const SociosPanel = () => {

    const [assRes, setAssRes] = useState([]);

    const [formRescue, setFormRescue] = useState(false);

    return (
        <>
            <div className="container mt-4 mb-4">
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center">
                        <div className="d-flex justify-content-center gap-2">
                            <button onClick={() => setFormRescue(!formRescue)} className="btn btn-primary">Registro asociación</button>
                        </div>
                    </div>
                </div>
                <div className={`mt-4 ${formRescue ? 'slide-in' : 'slide-out'}`}>
                    {formRescue && <RescueForm />}
                </div>
            </div>
            <div className="hero" style={{ backgroundColor: "#EDEDED" }}>
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
            <div className="p-3 mb-2 bg-dark text-body"></div>
            <Footer />
        </>
    );
};

export default SociosPanel;
