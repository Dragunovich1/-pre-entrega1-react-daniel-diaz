// src/components/ItemListContainer.js
import React from 'react';
import logo from '../assets/logo.webp';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="welcome-container">
            <h2>{greeting}</h2> {/* mensajito de bienvenida por ahora */}
			<img src={logo} alt="Logo de Retro Store" style={{ maxWidth: '200px', height: 'auto', marginTop: '20px' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
