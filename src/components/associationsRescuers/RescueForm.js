import { useState } from 'react';
import { createAssociationRescuers } from '../../api/asociacionesRescatistas';
import { CSpinner } from '@coreui/react';
import '../../css/rescueform.css'

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
      setLoading(false);
      return;
    }

    setFormData({
      name: '',
      email: '',
      address: '',
      identifier: '',
      description: '',
      password: ''
    });

    setFormSuccess('Tu solicitud de cuenta ha sido enviada con éxito. En breve revisaremos tu información.');
    setTimeout(() => {
      setFormSuccess('');
    }, 3000);

    setLoading(false);
  };

  return (
    <div className="form-section">
    {formSuccess && <div className="alert alert-success">{formSuccess}</div>}
    <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" value={formData.name} onChange={evt => setFormData({ ...formData, name: evt.target.value })} placeholder="Ingrese su nombre" />
        </div>
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={evt => setFormData({ ...formData, email: evt.target.value })} placeholder="Ingrese su correo electrónico" />
        </div>
        <div className="form-group">
            <label htmlFor="direccion">Dirección</label>
            <input type="text" id="direccion" name="direccion" value={formData.address} onChange={evt => setFormData({ ...formData, address: evt.target.value })} placeholder="Ingrese su dirección" />
        </div>
        <div className="form-group">
            <label htmlFor="redSocial">Red Social</label>
            <input type="text" id="redSocial" name="redSocial" value={formData.identifier} onChange={evt => setFormData({ ...formData, identifier: evt.target.value })} placeholder="Ingrese el link de su red social" />
        </div>
        <div className="form-group">
            <label htmlFor="descripcion">Descripción</label>
            <textarea id="descripcion" name="descripcion" value={formData.description} onChange={evt => setFormData({ ...formData, description: evt.target.value })} placeholder="Ingrese una descripción de su asociación o rescatista"></textarea>
        </div>
        <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={evt => setFormData({ ...formData, password: evt.target.value })} placeholder="Ingrese su contraseña" />
        </div>
        {formError && <div className="alert alert-danger">{formError}</div>}
        <div className="text-center">
            <button type="submit" className="btn btn-secondary">
                {loading ? <CSpinner color="primary" /> : "Enviar solicitud"}
            </button>
        </div>
    </form>
</div>
  );
};

export default RescueForm;
