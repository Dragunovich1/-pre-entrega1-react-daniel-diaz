// src/components/NavBar.js
import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button className="navbar-brand btn btn-link" onClick={() => window.location.href = "/"}>Retro Store</button>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => window.location.href = "/"}>Inicio</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => window.location.href = "/productos"}>Productos</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => window.location.href = "/contacto"}>Contacto</button>
            </li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
