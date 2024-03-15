// src/components/ItemListContainer.js
import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="welcome-container">
            <h2>{greeting}</h2> {/* mensajito de bienvenida por ahora */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
