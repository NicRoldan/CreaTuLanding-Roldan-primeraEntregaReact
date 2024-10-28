import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  const [showCart, setShowCart] = useState(false); // Estado para alternar entre vista de carrito y productos

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (product) => {
    const productToAdd = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    };

    setCartItems([...cartItems, productToAdd]);
  };

  const handleViewCart = () => {
    setShowCart(true); // Mostramos el carrito
  };

  const handleViewProducts = () => {
    setShowCart(false); // Mostramos los productos
  };

  const products = [
    { id: 1, name: 'Producto 1', price: 100, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Producto 2', price: 200, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Producto 3', price: 300, image: 'https://via.placeholder.com/150' }
  ];

  return (
    <div>
      <NavBar cartItems={cartItems.length} onViewCart={handleViewCart} />
      {showCart ? (
        <Cart cartItems={cartItems} />
      ) : (
        <ItemListContainer greeting="¡Bienvenidos a nuestro e-commerce!" products={products} onAddToCart={handleAddToCart} />
      )}
      {showCart && <button className="btn btn-secondary my-4" onClick={handleViewProducts}>Volver a Productos</button>}
    </div>
  );
}

export default App;
