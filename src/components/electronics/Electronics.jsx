import React from "react";
import electronics from "../../mock/mohirjon/electronics/electronics";
import "./Electronics.css";
import { Link } from "react-router-dom";

const Electronics = () => {
  return (
    <div>
      <div className="text">
        <h1>
          Top <span>Electronics Brands</span>
        </h1>
        <Link to="/electronics">
          <button>VIEW ALL</button>
        </Link>
      </div>

      <div className="electronics-container">
        {electronics.map((item, index) => (
          <div
            key={index}
            className="electronics-card"
            style={{ backgroundColor: item.bgColor }}
          >
            <div className="electronics-info">
              <span className="brand-name">{item.brand.toUpperCase()}</span>
              <p className="discount">{item.discount}</p>
              <p>{item.model}</p>
            </div>
            <img src={item.url} alt={item.brand} className="electronics-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Electronics;
