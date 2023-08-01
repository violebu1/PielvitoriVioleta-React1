import React from 'react';

const Carrito = ({ cartItems, onClose, onRemoveItem }) => {
  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Carrito de compras</h5>
          <button type="button" className="close" onClick={onClose}>
            <span>&times;</span>
          </button>
        </div>
        <div className="modal-body">
          {cartItems.length === 0 ? (
            <p>Tu carrito está vacío.</p>
          ) : (
            <ul className="list-group">
              {cartItems.map((item) => (
                <li key={item.id} className="list-group-item">
                  {item.name} - ${item.price}
                  <button
                    className="btn btn-danger btn-sm float-right"
                    onClick={() => onRemoveItem(item.id)}
                  >
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="modal-footer">
          {cartItems.length > 0 && (
            <button type="button" className="btn btn-success">
              Checkout
            </button>
          )}
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
