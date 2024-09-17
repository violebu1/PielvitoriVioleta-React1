import React from 'react';
import { FaInstagram, FaWhatsapp, FaFacebook, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#1a0c4ece', color: '#fff', padding: '20px', textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', margin: '5px' }}>
          <FaInstagram size={24} />
        </a>
        <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', margin: '5px' }}>
          <FaWhatsapp size={24} />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', margin: '5px' }}>
          <FaFacebook size={24} />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', margin: '5px' }}>
          <FaLinkedin size={24} />
        </a>
      </div>
      <p style={{ marginTop: '10px', fontSize: '1.5em' }}>Seguinos en redes sociales</p>
    </footer>
  );
};

export default Footer;
