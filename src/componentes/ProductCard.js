import React from 'react';
import "./ProductCard.css";
import './ProductsData';

const ProductCard = ({ product, addToCart }) => {
    return (
      <div className="product-card">
        <img src={product.imageUrl} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Precio: ${product.price}</p>
        <button onClick={() => addToCart(product)}>Agregar al carrito</button>
      </div>
    );
  };
  export default ProductCard;
