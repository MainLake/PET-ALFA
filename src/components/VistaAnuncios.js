import { Navbar } from "react-bootstrap"
import '../css/VistaAnuncios.css'
import AnuncionNav from "./AnunciosNav"
import Footer from '../components/Footer'
import MiIMage from '../imagenes/PetRoma.jpeg'

const VistaAnuncios =() => {
    return(
        <>
            <Navbar/>
            <AnuncionNav/>
            <div className="card mb-3 view" >
                <img src={MiIMage} alt="" className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-tittle">Vacuncaion contra la rabia</h5>
                    <p className="card-text">
                        La empresa PetRoma tiene un evento donde vacuna a los animalitos con rabia
                    </p>
                    <a href="#" className="btn btn-secondary">Saber mas...</a>
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default VistaAnuncios