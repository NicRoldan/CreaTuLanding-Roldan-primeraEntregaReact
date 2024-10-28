// src/components/NavBar.js
import React from 'react';
import CartWidget from './CartWidget';
import logo from '../assets/logo.png'; // Importar el logo

const NavBar = ({ cartItems, onViewCart }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Mostrar el logo junto al nombre */}
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" width="40" height="40" className="d-inline-block align-text-top" /> 
          Mi E-Commerce
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#products">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">Sobre Nosotros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contacto</a>
            </li>
          </ul>
          <button className="btn btn-outline-light me-3" onClick={onViewCart}>
            Ver Carrito
          </button>
          <CartWidget cartItems={cartItems} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
