import React from "react";
import "./ProductCard.css"; // CSS for the individual product card
import  "../../data"
import "../data/plants"

const ProductCard = ({ plant, addToCart }) => {
  const handleImageError = (e) => {
    e.target.onerror = null; // Prevent infinite fallback loop
    e.target.src = "../assets/aloe-vera.png"; // Replace with a valid placeholder URL
  };

  return (
    <div className="product-card">
      {plant.img ? (
        <img
          src={plant.img}
          alt={plant.name || "Plant"}
          className="product-card-image"
          onError={handleImageError}
        />
      ) : (
        <div className="product-card-placeholder">
          <span>No Image Available</span>
        </div>
      )}
      <h3 className="product-card-title">{plant.name}</h3>
      <p className="product-card-price">${plant.price.toFixed(2)}</p>
      <button className="product-card-button" onClick={() => addToCart(plant)}>
        Add to Cart
      </button>
    </div>
  );
};

export default React.memo(ProductCard);
