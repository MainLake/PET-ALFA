import Empresa from '../../imagenes/PetRoma.jpeg';
import RS1 from '../../imagenes/RS1.png';
import RS2 from '../../imagenes/RS2.png';
import RS3 from '../../imagenes/RS3.png'

const RescueAccount = () => {
    return (
        <div className="container-fluid bg-gradient py-5">
            <div className="container border border-dark p-4 bg-white">
                <div className="row">
                    <div className="col-md-6 text-center">
                        <img src={Empresa} alt="Imagen de la compañía" className="rounded img-fluid mb-4" />
                        <div className="input-group mb-3">
                            <input type="file" className="form-control" id="inputGroupFile02" />
                            <label className="input-group-text" htmlFor="inputGroupFile02">Subir</label>
                        </div>
                    </div>
                    <div className="col-md-6 text-center" style={{backgroundColor: "#d5cabd"}}>
                    <h1 className="display-2 fw-bold text-body-emphasis">Perfil</h1>
                        <div className="mb-4">
                            <h5 className="fw-bold mb-3">Nombre de Asociación:</h5>
                            <p>Pet Roma</p>
                        </div>
                        <div className="mb-4">
                            <h5 className="fw-bold mb-3">Dirección:</h5>
                            <p>Tapachula, Chiapas</p>
                        </div>
                        <div className="mb-4">
                            <h5 className="fw-bold mb-3">Descripción:</h5>
                            <p>
                            Asociación conformada por Rescatistas y Veterinarios que ofrecen 
                            refugios y atención médica a animales en situación de calle, 
                            así como ofrecer campañas de esterilización a la comunidad.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h5 className="fw-bold mb-3">Redes Sociales:</h5>
                            <div className="row">
                                <div className="col">
                                <img src={RS1} alt="Mascota" className="imagen-circular" />
                                        <i className="bi bi-facebook"></i>
                                </div>
                                <div className="col">
                                    <img src={RS2} alt="Mascota" className="imagen-circular" />
                                        <i className="bi bi-instagram"></i>
                                </div>
                                <div className="col">
                                <img src={RS3} alt="Mascota" className="imagen-circular" />
                                        <i className="bi bi-tiktok"></i>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <a href="./FormEvent" className='btn btn-secondary'>Subir Evento</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
    );
}

export default RescueAccount;
