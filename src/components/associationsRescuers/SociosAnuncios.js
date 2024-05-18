import { useState } from 'react';
import ImagenesMascotas from '../pets/ImagenesMascotas';

import { authUserStore } from '../../context/globalContext';
import { createBulletin } from '../../api/asociacionesRescatistas';


const extencionesImagenes = ['png', 'jpg', 'jpeg'];



const SociosAnuncios = () => {

  const { user } = authUserStore();

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [post, setPost] = useState({
    title: '',
    text: '',
    name_company: '',
    address: '',
    te_number: '',
  });

  const [gallery, setGallery] = useState([]);

  const handleSubmit = async (evt) => {

    setLoading(true);

    evt.preventDefault();

    const token = user.dataToken.token;
    console.log(token)

    if (!post.title || !post.text || !post.name_company || !post.address || !post.te_number) {
      setError('Todos los campos son obligatorios');
      setLoading(false);
      setTimeout(() => {
        setError('');
      }, 3000);
      return;
    }

    const formData = new FormData();
    formData.append('title', post.title);
    formData.append('text', post.text);
    formData.append('name_company', post.name_company);
    formData.append('address', post.address);
    formData.append('te_number', post.te_number);
    formData.append('image', gallery[0].file);
    gallery.forEach((file) => {
      formData.append('gallery', file.file);
    });

    const response = await createBulletin(formData, token);
    console.log(response);

    if (response.error) {
      setError(response.error);
      setTimeout(() => {
        setError('');
      }, 3000);
      setLoading(false);
      return;
    }

    setMensaje('Anuncio creado con éxito');
    setTimeout(() => {
      setMensaje('');
    }, 3000);

    setPost({
      title: '',
      text: '',
      name_company: '',
      address: '',
      te_number: '',
    });
    setGallery([]);

    setLoading(false);

  };



  return (
    <div className="container  my-5">
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="form-section">
            <h1 className="text-center display-4 fw-bold lh-1 mb-4">Detalles del Anuncio</h1>
            {mensaje != "" ? (
              <div className="alert alert-success text-center">{mensaje}</div>
            ) : null}

            {
              error != "" ? (
                <div className="alert alert-danger text-center">{error}</div>
              ) : null
            }
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Título:</label>
              <input
                type="text"
                className="form-control"
                id="title"
                value={post.title}
                onChange={evt => setPost({ ...post, title: evt.target.value })}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">Descripción:</label>
              <textarea
                className="form-control"
                id="description"
                value={post.text}
                onChange={evt => setPost({ ...post, text: evt.target.value })}
                required
              ></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="nameCompany" className="form-label">Nombre de la Compañía:</label>
              <input
                type="text"
                className="form-control"
                id="nameCompany"
                value={post.name_company}
                onChange={evt => setPost({ ...post, name_company: evt.target.value })}
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
                onChange={evt => setPost({ ...post, address: evt.target.value })}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="teNumber" className="form-label">Número de Teléfono:</label>
              <input
                type="text"
                className="form-control"
                id="teNumber"
                value={post.te_number}
                onChange={evt => setPost({ ...post, te_number: evt.target.value })}
                required
              />
            </div>

            <div className="mb-3 d-grid">
              <button type="submit" className="btn btn-primary btn-lg">
                {"Crear Anuncio"}
              </button>
            </div>
            {error ? (
              <div className="alert alert-danger text-center">{error}</div>
            ) : null}
          </form>
        </div>
        <div className="col-md-6">
          <div className="">
            {/* Inserta aquí el componente ImagenesMascotas */}
            <ImagenesMascotas gallery={gallery} setGallery={setGallery} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SociosAnuncios;
