import React from "react";
import "./Upcoming.css"; // Import CSS file
import banglore from "../assets/Upcoming_pro/banglore.jpg";
import chennai from "../assets/Upcoming_pro/chennai.jpg";
import ahmedabad from "../assets/Upcoming_pro/ahmedabad.jpg";

const upcomingShowrooms = [
  {
    name: "Anjan Lakshmi Nivas",
    address: "Bangalore",
    image: banglore,
  },
  {
    name: "Anjan Orchid",
    address: "Ahmedabad",
    image: ahmedabad,
  },
  {
    name: "Anjan Tulip",
    address: "Chennai",
    image: chennai,
  },
];

const UpShowrooms = () => {
  return (
    <div className="showroom-section">
      <h2>Upcoming Showrooms</h2>
      <div className="upcoming-showroom-container">
        {upcomingShowrooms.map((showroom, index) => (
          <div key={index} className="upcoming-showroom">
            <div
              className="upcoming-image"
              style={{ backgroundImage: `url(${showroom.image})` }} // Use template string here
            ></div>
            <div className="upcoming-info">
              <h3>{showroom.name}</h3>
              <p>{showroom.address}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpShowrooms;
