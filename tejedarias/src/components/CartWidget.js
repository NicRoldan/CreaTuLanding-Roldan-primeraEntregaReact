// src/components/CartWidget.js
import React from 'react';

const CartWidget = ({ cartItems }) => {
  return (
    <div className="d-flex align-items-center">
      <span className="text-white">🛒</span>
      <span className="text-white ms-2">({cartItems})</span> {/* Mostramos el número de productos */}
    </div>
  );
};

export default CartWidget;
