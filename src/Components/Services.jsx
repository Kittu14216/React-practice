import React from "react";
import "./Services.css"; // Import the CSS file
import hatchback from "../assets/cars/hatchback.jpg";
import suv from "../assets/cars/suv.jpg";
import sedan from "../assets/cars/sedan.jpg";

const Cars = () => {
  return (
    <>
      <div>
        <h1 id="services">Our Car models</h1>
      </div>
      <div className="car-container">
        <div className="car-box">
          <img src={hatchback} alt="Hatchback" className="car-image" />
          <div className="car-info">
            <h3>Hatchback</h3>
            <p>A compact car perfect for city driving.</p>
            <a href="/hatchback" className="view-link">
              View Cars
            </a>
          </div>
        </div>

        <div className="car-box">
          <img src={sedan} alt="Sedan" className="car-image" />
          <div className="car-info">
            <h3>Sedan</h3>
            <p>A sleek, elegant car for a smooth ride.</p>
            <a href="/sedan" className="view-link">
              View Cars
            </a>
          </div>
        </div>

        <div className="car-box">
          <img src={suv} alt="SUV" className="car-image" />
          <div className="car-info">
            <h3>SUV</h3>
            <p>A spacious vehicle for off-road adventures.</p>
            <a href="/suv" className="view-link">
              View Cars
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cars;
