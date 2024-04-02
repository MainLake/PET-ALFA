const CarreteImagenes = ({ imagenes, handleDeleteImage }) => {
    return (
        <div className="container border border-2 rounded p-4 mt-4">
            <h3 className="mb-4">Carrete de Imágenes</h3>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {imagenes.map((imagen, index) => (
                    <div className="col" key={index}>
                        <div className="card shadow-sm">
                            <button type="button" className="btn-close position-absolute top-0 end-0" aria-label="Close" onClick={() => handleDeleteImage(index)}></button>
                            <img
                                src={imagen.preview}
                                alt={imagen.name}
                                className="card-img-top img-fluid"
                                style={{ maxHeight: '200px' }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CarreteImagenes;