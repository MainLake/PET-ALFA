import { useState } from 'react';
import '../../css/sociospanel.css';
import PetRoma from '../../imagenes/PetRoma.jpeg';
import RescueForm from './RescueForm';

const SociosPanel = () => {
    const [formRescue, setFormRescue] = useState(false);

    return (
        <>
            <div className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">¡Únete a Nosotros!</h1>
                    <p className="hero-subtitle my-0">Sé parte de nuestro proyecto como rescatista o asociación dedicada al cuidado de mascotas. Completa el siguiente formulario y forma parte de nuestra comunidad.</p>
                </div>
                <div className="text-center">
                    <div className="d-flex justify-content-center gap-2">
                        <button onClick={() => setFormRescue(!formRescue)} className="btn-sp my-2">Únete ahora</button>
                    </div>
                </div>
            </div>
            {formRescue && (
                <div className="form-section">
                    <div className="container">
                        <RescueForm />
                    </div>
                </div>
            )}
        </>
    );
};

export default SociosPanel;
