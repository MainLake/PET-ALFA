
const CuentaRes = () =>{
    return(
        <>
            <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div className="p-5 rounded-5 text-dark color-bg">
                            <form onSubmit={""} className="text-center fs-1 fw-bold">
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
                                        /*value={email}
                                        onChange={event => setEmail(event.target.value)}*/
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
                                        /*value={pwd}
                                        onChange={event => setPwd(event.target.value)}*/
                                        required
                                    />
                                </div>
                                <button type='submit' className='btn btn-secondary'>Acceder</button>
                            </form>
                        </div>
                    </div>
        </>
    )
}

export default CuentaRes