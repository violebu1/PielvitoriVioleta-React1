import React, { Component } from 'react';
import './Inicio.css';
import Carousel from 'bootstrap';
import productsData from '../../componentes/ProductsData';
import '../../assetsMisiotronica/data/ringbit1.jpg';
import '../../assetsMisiotronica/data/ringbit2.jpg';
import '../../assetsMisiotronica/data/ringbit3.jpg';


//como importo las imagenes para que se carguen???//


function Inicio() {
      return (
      <div className='carouselEntero'>
        
        PRODUCTOS DESTACADOS
        <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src='/ringbit1.jpg' className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="ringbit2.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="ringbit3.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        
        </div>
    );
  
}

export default Inicio;
