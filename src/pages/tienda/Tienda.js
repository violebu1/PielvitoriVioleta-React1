import React, { useState } from "react";
import ProductCard from "../../componentes/ProductCard";
import Carrito from "../../componentes/Carrito";
import "./Tienda.css";

const productsData = [
  {
    id: 1,
    name: "Arduino",
    description:
      "El Arduino Nano es una pequeña y completa placa basada en el ATmega328 (Arduino Nano 3.0) que se usa conectándola a una protoboard. Tiene más o menos la misma funcionalidad que el Arduino Duemilanove, pero con una presentación diferente. No posee conector para alimentación externa, y funciona con un cable USB Mini-B.",
    price: 13540,
    imageUrl: "srcassetsMisiotronicadataarduino.png",
  },
  {
    id: 2,
    name: "Detector de CO2",
    description:
      "Monitorea la calidad del aire en escuelas, edificios de oficinas, invernaderos, fábricas, hoteles, hospitales, líneas de transporte y en cualquier lugar que se generan altos niveles de dióxido de carbono. Sensor NDIR, autocalibrable.",
    imageUrl: "/ruta/imagen_producto_2.jpg",
  },
];

const Tienda = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
    setShowCart(true); // Abre el carrito al agregar un producto
  };

  const handleRemoveItem = (itemId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== itemId)
    );
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  const handleOpenCart = () => {
    setShowCart(true);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5">

      <h1 className="catalogo">NUESTROS PRODUCTOS</h1>
      <i
        className="bx bx-cart bx-lg text-primary"
        style={{ cursor: 'pointer' }}
        onClick={handleOpenCart}
      />
      <div className="mb-3">
        
        <input
          type="text"
          className="form-control"
          placeholder="Buscar producto"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="row">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <ProductCard product={product} onAddToCart={handleAddToCart} />
          </div>
        ))}
      </div>

      
      

      {showCart && (
        <div className="modal" style={{ display: 'block' }}>
          <div
            className="modal-dialog"
            role="document"
            style={{ margin: '10vh auto', maxWidth: '800px' }}
          >
            <Carrito
              cartItems={cartItems}
              onClose={handleCloseCart}
              onRemoveItem={handleRemoveItem}
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default Tienda;
