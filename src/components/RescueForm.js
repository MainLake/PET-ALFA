import React, { useState } from 'react';
import Footer from './Footer';

const RescueForm = () => {
  
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    direccion: '',
    redSocial: ''
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    console.log(formData);
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
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Nombre</label>
              <input type="text" className="form-control" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Ingrese su nombre" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Ingrese su correo electrónico" />
            </div>
            <div className="mb-3">
              <label htmlFor="direccion" className="form-label">Dirección</label>
              <input type="text" className="form-control" id="direccion" name="direccion" value={formData.direccion} onChange={handleChange} placeholder="Ingrese su dirección" />
            </div>
            <div className="mb-3">
              <label htmlFor="redSocial" className="form-label">Red Social</label>
              <input type="text" className="form-control" id="redSocial" name="redSocial" value={formData.redSocial} onChange={handleChange} placeholder="Ingrese su red social" />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-secondary">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
      <Footer />
    </div>
  );
};

export default RescueForm;
