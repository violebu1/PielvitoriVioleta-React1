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
    <nav className="navbar alineacion">
      <div className="navbar-logo">
        <img
          src={logo1}
          className="Inicio-logo"
          alt="logoUno"
          style={{ width: "15%" }}
          
        />
      </div>

      <div className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
        <ul className="navbar-menu">
          <li>
            <a href="/inicio">
              <FaHome className="navbar-icon" />
              INICIO
            </a>
          </li>
          <li>
            <a href="/sobreNosotros">
              <FaInfoCircle className="navbar-icon" />
              SOBRE NOSOTROS
            </a>
          </li>
          <li>
            <a href="/tienda">
              <FaStore className="navbar-icon" />
              TIENDA
            </a>
          </li>
          <li>
            <a href="/contacto">
              <FaEnvelope className="navbar-icon" />
              CONTACTO
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
