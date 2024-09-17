import React, { useState } from "react";
import ProductCard from "../../componentes/ProductCard";
import Carrito from "../../componentes/Carrito";
import "./Tienda.css";
import productsData from "../../componentes/ProductsData";




const Tienda = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
    setShowCart(true); // abre el carrito al agregar un producto
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
    <div className="contenedor mt-5">

      <h2 className="catalogo text-center my-4 ">NUESTROS PRODUCTOS</h2>

<div className="bloque-carro">
      <i
        className="bx bx-cart bx-lg text-primary carro"
        style={{ cursor: 'pointer' }}
        onClick={handleOpenCart}
      />
</div>


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
          <div key={product.id} className="col-6 col-md-4 col-lg-3 mb-4">
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
