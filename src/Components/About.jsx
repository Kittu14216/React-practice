import React from "react";
import "./About.css"; // Import the CSS file

const AboutUs = () => {
  return (
    <div className="about-us-section">
      <h2 id="about">About Us</h2>
      <p>
        Welcome to Our website, where we prioritize delivering excellent service
        and quality vehicles to our customers. Here are some key aspects that
        define our showroom:
      </p>
      <ul className="about-us-list">
        <li>➡Over 12 years of experience in the automotive industry.</li>
        <li>➡Headquartered in Bangalore with multiple locations.</li>
        <li>
          ➡ Wide range of vehicles including hatchbacks, sedans, SUVs, and more.
        </li>
        <li>
          ➡ Experienced team of automotive professionals dedicated to customer
          satisfaction.
        </li>
        <li>➡Strong focus on providing exceptional after-sales service.</li>
        <li>➡Innovative showroom environment with interactive displays.</li>
        <li>➡Commitment to ethical practices and customer transparency.</li>
      </ul>
    </div>
  );
};

export default AboutUs;
