import 'bootstrap/dist/css/bootstrap.min.css';
import ImagenAdmin from "../imagenes/img-AD.jpeg"
import '../css/SingAD.css'
import { useState } from 'react';
import axios from 'axios'
import Footer from '../components/Footer.js'


const SingAD = () => {
    //datos apedir para los administradores
    const [email, setEmail] = useState("")
    const [pwd, setPwd] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('subiendo datos');
        axios.post('https://api-lost-pets-prod-f456370d7007.herokuapp.com/api/v1/auth/login', { email: email, password: pwd })
        .then(token =>{
            console.log('token', token);
        })
        .catch(error =>{
            console.log('error', error);
        })
    }
    return (
        <>
            <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <img src={ImagenAdmin} alt="imagen para administrador" className='img-fluid img' />
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div className="p-5 rounded-5 text-dark color-bg">
                            <form onSubmit={handleSubmit} className="text-center fs-1 fw-bold">
                                <div className='mb-3'>
                                    <label htmlFor="email" className="form-label">
                                        Correo Electrónico:
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Introduce tu email"
                                        value={email}
                                        onChange={event => setEmail(event.target.value)}
                                        required
                                    />
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="password" className="form-label">
                                        Contraseña:
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        className="form-control"
                                        placeholder="Contraseña"
                                        value={pwd}
                                        onChange={event => setPwd(event.target.value)}
                                        required
                                    />
                                </div>
                                <button type='submit' className='btn btn-secondary'>Acceder</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default SingAD;