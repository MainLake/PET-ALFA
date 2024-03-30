import { useState, useRef, useEffect } from 'react';
import Footer from './Footer';
import '../../css/rescueAccount.css'; // Archivo CSS para estilos personalizados

import Empresa from '../../imagenes/PetRoma.jpeg';
import RS1 from '../../imagenes/RS1.png';
import RS2 from '../../imagenes/RS2.png';
import RS3 from '../../imagenes/RS3.png'


const RescueAccount = () => {
    const associationInfo = {
        name: "PET ROMA",
        location: "Tapachula, Chiapas",
        description: "Asociación conformada por Rescatistas y Veterinarios que ofrecen refugios y atención médica a animales en situación de calle, así como ofrecer campañas de esterilización a la comunidad.",
        socialMedia: [
            { icon: RS1, link: "#", platform: "Facebook" },
            { icon: RS2, link: "#", platform: "Instagram" },
            { icon: RS3, link: "#", platform: "TikTok" }
        ]
    };

    const adsData = [
        {
            id: 1,
            title: "Campaña de Esterilización a Mascotas.",
            text: "Se realizará una campaña de esterilización en colonias populares el día 08 de Mayo a bajo costo.",
            address: "Casa Ejidal, Colonia Emiliano Zapata.",
            contact: 9612703005,
            images: [Empresa, RS1, RS2, RS3, Empresa]
        },
        {
            id: 2,
            title: "Campaña de Vacunación a Mascotas.",
            text: "Se realizará una campaña de vacunación sin costo a Mascotas menores de 6 meses, el día 10 de Abril. ",
            address: "Parque Vicentenario.",
            contact: 9612703025,
            images: [Empresa, RS1, RS2, RS3, Empresa]
        },
        {
            id: 3,
            title: "Otro anuncio",
            text: "Descripción del otro anuncio",
            address: "Dirección del otro anuncio",
            contact: 123456789,
            images: [RS1, RS2, RS3, RS1, RS2]
        }
    ];

    const [showImage, setShowImage] = useState(null);
    const [modalDimensions, setModalDimensions] = useState({ width: 0, height: 0 });
    const modalRef = useRef(null);

    useEffect(() => {
        if (showImage) {
            const img = new Image();
            img.src = showImage;
            img.onload = () => {
                const windowWidth = window.innerWidth;
                const windowHeight = window.innerHeight;
                const imageAspectRatio = img.width / img.height;
                const windowAspectRatio = windowWidth / windowHeight;

                if (imageAspectRatio > windowAspectRatio) {
                    setModalDimensions({ width: windowWidth * 0.8, height: windowWidth * 0.8 / imageAspectRatio });
                } else {
                    setModalDimensions({ width: windowHeight * 0.8 * imageAspectRatio, height: windowHeight * 0.8 });
                }
            };
        }
    }, [showImage]);

    const handleClickImage = (image) => {
        setShowImage(image);
    };

    const handleCloseImage = () => {
        setShowImage(null);
    };

    return (
        <div>
            <div className="hero bg-gradient py-3" style={{backgroundColor: "#EDEDED"}}>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-6">
                            <img src={Empresa} alt="Imagen de la compañía" className="rounded img-fluid mb-4" />
                        </div>
                        <div className="col-md-6">
                            <h1 className="display-4 fw-bold text-body-emphasis">{associationInfo.name}</h1>
                            <p className="lead">{associationInfo.location}</p>
                            <hr className="my-4" />
                            <p>{associationInfo.description}</p>
                            <div className="row justify-content-center">
                                {associationInfo.socialMedia.map((social, index) => (
                                    <div key={index} className="col-auto">
                                        <a href={social.link} target="_blank" rel="noopener noreferrer">
                                            <img src={social.icon} alt={social.platform} className="social-image" />
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container  py-3" style={{backgroundColor: 'black'}}>
                <div className="row justify-content-center" style={{backgroundColor: "#96b1ad"}}>
                    {adsData.map((ad) => (
                        <div key={ad.id} className="col-md-4 mb-4">
                            <div className="card bg-card shadow">
                                <div id={`carousel-${ad.id}`} className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        {ad.images.map((image, index) => (
                                            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`} onClick={() => handleClickImage(image)}>
                                                <img src={image} className="d-block w-100" alt={`Imagen ${index + 1}`} style={{ width: "300px", height: "300px", cursor: "pointer" }} />
                                            </div>
                                        ))}
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target={`#carousel-${ad.id}`} data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target={`#carousel-${ad.id}`} data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title-RA">{ad.title}</h5>
                                    <p className="card-text">{ad.text}</p>
                                    <p className="card-text">Dirección: {ad.address}</p>
                                    <p className="card-text">Contacto: {ad.contact}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="footer-container bg-transparent py-1">
                <Footer />
            </div>
            {showImage && (
                <div className="modal" style={{ display: "block" }} onClick={handleCloseImage}>
                    <div className="modal-dialog" style={{ width: modalDimensions.width, height: modalDimensions.height }}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseImage}></button>
                            </div>
                            <div className="modal-body">
                                <img src={showImage} alt="Imagen ampliada" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RescueAccount;
