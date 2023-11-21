import React from "react"
import '../css/AnunciosNav.css'
import { Link } from 'react-router-dom'


const AnuncionNav = () =>{
    return(
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/FormRes">Ser rescatistas</Link>
                </li>
                <li>
                    <Link to="/SingAd">Administradores</Link>
                </li>
                <li>
                    <Link to="/CuentaRes">Ingresar</Link>
                </li>
            </ul>
        </nav>
        </>
    )
}

export default AnuncionNav