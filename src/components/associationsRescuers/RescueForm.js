import { useState } from 'react';
import { createAssociationRescuers } from '../../api/asociacionesRescatistas';
import { CSpinner } from '@coreui/react';

const RescueForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    identifier: '',
    description: '',
    password: ''
  });
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (evt) => {
    setLoading(true);

    evt.preventDefault();

    if (!formData.name || !formData.email || !formData.address || !formData.identifier || !formData.description || !formData.password) {
      setFormError('Todos los campos son obligatorios');
      setTimeout(() => {
        setFormError('');
      }, 3000);
      setLoading(false);
      return;
    }

    const response = await createAssociationRescuers(formData);

    if (response.error) {
      setFormError(response.error);
      setTimeout(() => {
        setFormError('');
      }, 3000);
      setLoading(false)
      return;
    }

    // limpiar formulario
    setFormData({
      name: '',
      email: '',
      address: '',
      identifier: '',
      description: '',
      password: ''
    });

    // mostrar mensaje de éxito
    setFormSuccess('Tu solicitud de cuenta ha sido enviada con éxito. En breve revisaremos tu informacion.');
    setTimeout(() => {
      setFormSuccess('');
    }, 3000);

    setLoading(false);

  };

  return (
    <div>
      <div className="container-fluid hero-section" style={{ backgroundColor: "#2f4858", backgroundSize: 'cover', backgroundPosition: 'center', paddingTop: '40px' }}>
        <div className="container py-1 text-center text-white">
          <h1 className="display-2 fw-bold text-body-emphasis-white">¡Únete a Nosotros!</h1>
          <p className="lead">Sé parte de nuestro proyecto como rescatista o asociación dedicada al cuidado de mascotas. Completa el siguiente formulario y forma parte de nuestra comunidad.</p>
        </div>
      </div>
      <div className="container py-5" style={{ backgroundColor: "#f8f9fa" }}>
        {
          formSuccess &&
          <div className="alert alert-success" role="alert">
            {formSuccess}
          </div>
        }
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="nombre" name="nombre" value={formData.name} onChange={evt => setFormData({ ...formData, name: evt.target.value })} placeholder="Ingrese su nombre" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={evt => setFormData({ ...formData, email: evt.target.value })} placeholder="Ingrese su correo electrónico" />
              </div>
              <div className="mb-3">
                <label htmlFor="direccion" className="form-label">Dirección</label>
                <input type="text" className="form-control" id="direccion" name="direccion" value={formData.address} onChange={evt => setFormData({ ...formData, address: evt.target.value })} placeholder="Ingrese su dirección" />
              </div>
              <div className="mb-3">
                <label htmlFor="redSocial" className="form-label">Red Social</label>
                <input type="text" className="form-control" id="redSocial" name="redSocial" value={formData.identifier} onChange={evt => setFormData({ ...formData, identifier: evt.target.value })} placeholder="Ingrese el link de su red social" />
              </div>
              <div className="mb-3">
                <label htmlFor="descripcion" className="form-label">Descripción</label>
                <textarea className="form-control" id="descripcion" name="descripcion" value={formData.description} onChange={evt => setFormData({ ...formData, description: evt.target.value })} placeholder="Ingrese una descripción de su asociación o rescatista" />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={evt => setFormData({ ...formData, password: evt.target.value })} placeholder="Ingrese su contraseña" />
              </div>
              {/* <div className="mb-3">
                <label htmlFor="tipo" className="form-label">Tipo de Usuario</label>
                <select className="form-select" id="tipo" name="tipo" value={formData.tipo} onChange={handleChange}>
                  <option value="">Seleccione...</option>
                  <option value="asociacion">Asociación</option>
                  <option value="rescatista">Rescatista</option>
                </select>
              </div> */}
              {formError && <div className="alert alert-danger" role="alert">{formError}</div>}
              <div className="text-center">
                <button type="submit" className="btn btn-secondary">
                  {loading ? <CSpinner color="primary"/> : "Enviar solicitud"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RescueForm;
