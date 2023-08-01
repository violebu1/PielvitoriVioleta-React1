import React, { useState } from "react";
import {
  FaHome,
  FaInfoCircle,
  FaStore,
  FaEnvelope,
  FaBars,
} from "react-icons/fa";
import "./Navbar.css";
import logo1 from "../assetsMisiotronica/logo1.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src={logo1}
          className="Inicio-logo"
          alt="logoUno"
          style={{ width: "25%" }}
          className= "d-inline-block align-text-top"
        />
      </div>

      <div className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
        <ul className="navbar-menu">
          <li>
            <a href="/inicio">
              <FaHome className="navbar-icon" />
              Inicio
            </a>
          </li>
          <li>
            <a href="/sobreNosotros">
              <FaInfoCircle className="navbar-icon" />
              Sobre Nosotros
            </a>
          </li>
          <li>
            <a href="/tienda">
              <FaStore className="navbar-icon" />
              Tienda
            </a>
          </li>
          <li>
            <a href="/contacto">
              <FaEnvelope className="navbar-icon" />
              Contacto
            </a>
          </li>
        </ul>
      </div>

      <div className="navbar-mobile-menu" onClick={handleMobileMenuToggle}>
        <FaBars className="navbar-icon" />
      </div>
    </nav>
  );
};

export default Navbar;

/*
import React from "react";
import logo1 from '../assetsMisiotronica/logo1.png';

function Navbar() {
  return (
  <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand ml-auto" href="#">
      <img src={logo1} className="Inicio-logo" alt="logoUno"  style={{width:'35%'}} className="d-inline-block align-text-top" />
    </a>
        <button 
        className="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" 
        aria-expanded="false" 
        aria-label="Toggle navigation" >
        <span >
        <i className="fas fa-bars"
        style={{color:'#fff'}}/>
        </span>
        
        </button>




        


        </div>
        <div className="collapse navbar-collapse" 
        id="navbarSupportedContent" >
        <ul className="navbar-nav m-auto">
        <li className="nav-item">
          <a className="nav-link active 
          text-white text-uppercase ml-5" 
          aria-current="page" 
          href="#">Inicio&nbsp;<i class="bx bx-home-alt" style={{ fontSize: "1.50em" }}></i></a>
        </li>
        <li className="nav-item active">
          <a className="nav-link active text-white text-uppercase ml-5" aria-current="page" href="#">Sobre Nosotros&nbsp;<i class="bx bxs-user-detail" style={{ fontSize: "1.50em" }}></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-white text-uppercase ml-5" aria-current="page" href="#">Tienda&nbsp;<i class="bx bxs-store-alt" style={{ fontSize: "1.50em" }}></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-white text-uppercase ml-5" aria-current="page" href="#">Contactanos&nbsp;<i class="bx bxs-message-edit" style={{ fontSize: "1.50em" }}></i></a>
        <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="qué estás buscando?"
              aria-label="Search"
              
            />
            <button className="btn btn-info" type="submit">
            <i className='bx bx-search-alt-2'></i>
            </button>
        </form>
        </li>
      </ul>
      </div>
      
    </nav>
  );
}



export default Navbar;
    
   */ 

