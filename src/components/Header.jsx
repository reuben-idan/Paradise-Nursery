import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

const Header = ({ cartCount }) => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
        backgroundColor: "#fff",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1>Paradise Nursery</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products" style={{ marginLeft: "15px" }}>
          Products
        </Link>
        <Link to="/cart" style={{ marginLeft: "15px" }}>
          Cart ({cartCount})
        </Link>
      </nav>
    </header>
  );
};

export default Header;
