import React from "react";
import data from "../../restApi.json";
import "./MenuPage.css";
import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();

  return (
    <div className="menu_page">
      <div className="back" onClick={() => navigate("/")}>
        Back to Home
      </div>
      <div className="header">
        <h1>Our Menu</h1>
        <p>
          Discover our range of delicious dishes. From breakfast to dinner, we
          have something to delight every palate.
        </p>
      </div>
      <div className="dishes_container">
        {data.data[0].menu.map((element) => (
          <div className="card-menu" key={element.id}>
            <img src={element.image} alt={element.title} />
            <h3>{element.title}</h3>
            <button>{element.category}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
