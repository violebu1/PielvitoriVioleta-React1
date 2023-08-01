import React, { useState } from 'react';
import ProductCard from './ProductCard'; 
import './Carrito.css';


const Carrito = ({ cartItems, onClose }) => {
  const calculateTotal = () => {
    
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="cart-modal">
      <h2>Carrito de compras</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
      <p>Total: ${calculateTotal().toFixed(2)}</p>
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
};

export default Carrito;