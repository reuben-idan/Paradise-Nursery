import React from "react";
import "./CartItem.css";

const CartItem = ({ item, updateQuantity, removeItem }) => {
  const handleImageError = (e) => {
    e.target.onerror = null; // Prevents infinite fallback loop
    e.target.src = "/assets/fallback-image.jpg"; // Provide your fallback image path
  };

  return (
    <div className="cart-item-container">
      <div className="cart-item">
        {/* Image Tag with Fallback */}
        <div className="cart-item-image-container">
          <img
            src={item.img}
            alt={item.name || "Product Image"}
            className="cart-item-image"
            onError={handleImageError}
          />
        </div>

        <div className="cart-item-details">
          {/* Item Name */}
          <h3 className="cart-item-name">{item.name || "Unnamed Product"}</h3>

          {/* Price Display */}
          <p className="cart-item-price">
            ${item.price ? item.price.toFixed(2) : "0.00"}
          </p>

          {/* Quantity Control */}
          <div className="cart-item-quantity">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              disabled={item.quantity <= 1}
              className="quantity-btn"
            >
              -
            </button>
            <span className="quantity-display">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="quantity-btn"
            >
              +
            </button>
          </div>
        </div>

        {/* Remove Button */}
        <button
          onClick={() => removeItem(item.id)}
          className="remove-btn"
          aria-label={`Remove ${item.name || "item"} from cart`}
        >
          <i className="remove-icon">×</i>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
