import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="overlay">
        <div className="content">
          <h1 className="title">Paradise Nursery</h1>
          <p className="description">
            Elevate your space with lush, vibrant houseplants that bring life to
            every corner.
          </p>
          <Link to="/products" className="btn-link">
            <button className="cta-button">Explore Our Collection</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
