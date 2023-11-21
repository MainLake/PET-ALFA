import { Navbar } from "react-bootstrap"
import '../css/VistaAnuncios.css'
import AnuncionNav from "./AnunciosNav"
import Footer from '../components/Footer'
import MiIMage from '../imagenes/PetRoma.jpeg'
import { useState } from "react"

const VistaAnuncios = () => {
    const [modalOpen, setModalOpen] = useState("")

    const openModal = () => {
        setModalOpen(true)
    }

    const closeModal = () => {
        setModalOpen(false)
    }
    return (
        <>
            <Navbar />
            <AnuncionNav />
            <div className="card mb-3 view" >
                <img src={MiIMage} alt="" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-tittle">Vacuncaion contra la rabia</h5>
                    <p className="card-text">
                        La empresa PetRoma tiene un evento donde vacuna a los animalitos con rabia
                    </p>
                    <a href="#" className="btn btn-secondary" onClick={openModal}>Saber mas...</a>
                </div>
            </div>
            {modalOpen && (
                <div className="modal" tabIndex="-1" style={{ display: 'block' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Detalles del anuncio</h5>
                                <button type="button" className="btn-close" onClick={closeModal}></button>
                            </div>
                            <div className="modal-body">
                                {/* Aquí puedes mostrar más detalles del anuncio */}
                                <p>Detalles adicionales sobre el evento de vacunación contra la rabia...</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={closeModal}>
                                    Cerrar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </>
    )
}

export default VistaAnuncios