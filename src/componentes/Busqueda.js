import React from 'react';
import './Busqueda.css';




const Busqueda = ({ onSearch }) => {
  const handleInputChange = (e) => {
    const searchText = e.target.value;
    onSearch(searchText);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar productos..."
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Busqueda;
