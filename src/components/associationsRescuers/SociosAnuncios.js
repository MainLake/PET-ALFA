import { useState } from 'react';
import '../../css/sociosAnuncios.css';
import Footer from '../Footer';

const extencionesImagenes = ['png', 'jpg', 'jpeg'];

const SociosAnuncios = () => {
  const [error, setError] = useState(null);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [post, setPost] = useState({
    title: '',
    text: '',
    nameCompany: '',
    address: '',
    teNumber: '',
    images: [],
  });

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (!post.title || !post.text || !post.nameCompany || !post.address || !post.teNumber || post.images.length === 0) {
      setError('Por favor complete todos los campos y agregue al menos una imagen.');
      return;
    }
    setError(null);
    console.log(post);

  };

  const handleImageChange = (event) => {
    const files = event.target.files;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = (e) => {
        setImagePreviews(prevPreviews => [...prevPreviews, e.target.result]);
      };

      reader.readAsDataURL(file);
      setPost(prevPost => ({ ...prevPost, images: [...prevPost.images, file] }));
    }
  };

  const handleDeleteImage = (index) => {
    setImagePreviews(prevPreviews => {
      const updatedPreviews = [...prevPreviews];
      updatedPreviews.splice(index, 1);
      return updatedPreviews;
    });

    setPost(prevPost => {
      const updatedImages = [...prevPost.images];
      updatedImages.splice(index, 1);
      return { ...prevPost, images: updatedImages };
    });
  };

  const handleAddImage = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.multiple = false;
    input.click();

    input.addEventListener('change', (event) => {
      handleImageChange(event);
    });
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setPost(prevPost => ({ ...prevPost, teNumber: value }));
  };

  return (
    <div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={handleSubmit} className="form-section">
              <h1 className="text-center display-4 fw-bold lh-1">Detalles del Anuncio</h1>
              <div className="p-2 mb-2 bg-transparent text-body"></div>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Título:</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={post.title}
                  onChange={(e) => setPost({ ...post, title: e.target.value })}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="text" className="form-label">Descripción:</label>
                <textarea
                  className="form-control"
                  id="description"
                  value={post.text}
                  onChange={(e) => setPost({ ...post, text: e.target.value })}
                  required
                ></textarea>
              </div>

              <div className="mb-3">
                <label htmlFor="nameCompany" className="form-label">Nombre de la Compañía:</label>
                <input
                  type="text"
                  className="form-control"
                  id="nameCompany"
                  value={post.nameCompany}
                  onChange={(e) => setPost({ ...post, nameCompany: e.target.value })}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="address" className="form-label">Dirección:</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  value={post.address}
                  onChange={(e) => setPost({ ...post, address: e.target.value })}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="teNumber" className="form-label">Número de Teléfono:</label>
                <input
                  type="text"
                  className="form-control"
                  id="teNumber"
                  value={post.teNumber}
                  onChange={handlePhoneNumberChange}
                  required
                />
              </div>

              <div className="mb-3 d-flex justify-content-center">
                <button type="submit" className="btn btn-secondary">Crear Anuncio</button>
              </div>
              {error ? (
                <div className="alert alert-danger text-center">{error}</div>
              ) : null}
            </form>
          </div>

          <div className="col-md-6">
            <div className="data-section text-center">
              <h2 className="display-4 fw-bold lh-1">Galería</h2>
              <div className="p-2 mb-2 bg-transparent text-body"></div>
              <div className="row">
                {imagePreviews.map((preview, index) => (
                  <div className="col-md-4 col-sm-6 mb-3" key={index}>
                    <div className="image-preview-container">
                      <button
                        type="button"
                        className="btn-close"
                        aria-label="Close"
                        onClick={() => handleDeleteImage(index)}
                      ></button>
                      <img src={preview} alt={`Image ${index}`} className="image-preview img-fluid img-thumbnail" />
                    </div>
                  </div>
                ))}
                {imagePreviews.length < 5 && (
                  <div className="col-md-4 col-sm-6 mb-3 d-flex justify-content-center align-items-center">
                    <button type="button" className="btn btn-secondary" onClick={handleAddImage}>
                      Agregar imagen
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SociosAnuncios;
