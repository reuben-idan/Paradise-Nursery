import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import ProductListing from "./components/ProductListing";
import ShoppingCart from "./components/ShoppingCartPage";
import "./styles/global.css";
// import plants from "./data/plants";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    const existing = cart.find((item) => item.id === plant.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...plant, quantity: 1 }]);
    }
  };

  const updateCart = (id, delta) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <Header cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/products"
          element={<ProductListing addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={
            <ShoppingCart
              cart={cart}
              updateCart={updateCart}
              removeItem={removeItem}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
