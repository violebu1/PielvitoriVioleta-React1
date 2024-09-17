import React, { useState } from 'react';
import "./FormContacto.css";

const FormContacto = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      console.log(formData);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div className='campos'>
        <div >
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        </div>
        <button type="submit"  class="btn btn-outline-info">Enviar</button>
      </form>
    );
  };
  
  export default FormContacto;