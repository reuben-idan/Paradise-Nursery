import React from "react";
import plants from "../data/plants"; // Import plant data
import ProductCard from "./ProductCard"; // Separate ProductCard component
import "../components/productListing.css"; // Import styles

const ProductListing = ({ addToCart }) => {
  return (
    <div className="product-listing-container">
      <h2>Our Plants</h2>

      <div className="product-listing">
        {plants.map((plant) => (
          <div key={plant.id} className="venue_main">
            <div className="img">
              <img src={plant.image} alt={plant.name} />
            </div>
            <div className="plant-details">
              <h3>{plant.name}</h3>
              <p className="category">{plant.category}</p>
              <p className="price">${plant.price}</p>
              <button
                className="add-to-cart-btn"
                onClick={() => addToCart(plant)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(ProductListing);
