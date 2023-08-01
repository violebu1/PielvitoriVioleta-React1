import React, { Component } from 'react'
import ProductCard from '../../componentes/ProductCard';
import productsData from '../../componentes/ProductsData';
import Carrito from '../../componentes/Carrito';
import { useState } from 'react';
import './Tienda.css';
import Busqueda from '../../componentes/Busqueda';


const Tienda = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  const openCart = () => {
    setCartOpen(true);
  };

  const closeCart = () => {
    setCartOpen(false);
  };
  const handleSearch = (text) => {
    setSearchText(text);
  };  
  const filteredProducts = productsData.filter((product) =>
  product.name.toLowerCase().includes(searchText.toLowerCase())
);

return (
  <div className="store">
    <h2>Tienda</h2>
    
    <Busqueda onSearch={handleSearch} />
    <div className="product-list">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
    <button onClick={openCart}>Ver carrito de compras</button>
    {cartOpen && <Carrito cartItems={cartItems} onClose={closeCart} />}
  </div>
  );
};

export default Tienda;