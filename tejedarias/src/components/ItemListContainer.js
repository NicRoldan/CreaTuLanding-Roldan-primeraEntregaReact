// src/components/ItemListContainer.js
import React from 'react';

const ItemListContainer = ({ greeting, products, onAddToCart }) => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col text-center">
          <h2>{greeting}</h2>
        </div>
      </div>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Precio: ${product.price}</p>
                <button className="btn btn-primary" onClick={onAddToCart}>
                  Agregar al carrito
                </button> {/* Al hacer clic, se llama a onAddToCart */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
