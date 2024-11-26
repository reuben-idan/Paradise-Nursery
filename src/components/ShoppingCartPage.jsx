import React from "react";
import "./ShoppingCartPage.css"


const ShoppingCart = ({ cart, updateCart, removeItem }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "1rem",
              }}
            >
              <img src={item.image} alt={item.name} style={{ width: "50px" }} />
              <div>
                <h4>{item.name}</h4>
                <p>${item.price}</p>
              </div>
              <div>
                <button onClick={() => updateCart(item.id, -1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateCart(item.id, 1)}>+</button>
              </div>
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          ))}
          <h3>Total: ${total}</h3>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
