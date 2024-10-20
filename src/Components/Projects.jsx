import React from "react";
import "./Projects.css"; // Import CSS file
import { Link } from "react-router-dom";

// Import images from assets folder
import hyderabadImg from "../assets/pro_images/charminar.jpg";
import vizagImg from "../assets/pro_images/vizagbeach.jpg";
import delhiImg from "../assets/pro_images/delhi.jpg";
import amalapuramImg from "../assets/pro_images/amalapuram.jpg";
import kakinadaImg from "../assets/pro_images/kakinada.jpg";
import warangalImg from "../assets/pro_images/warangal.jpg";
// import Practice from "./Practice";
// import Visakhapatnam from "./Showrooms_pro/Visakhapatnam";

const showroomsData = [
  {
    name: "Showroom 1",
    address: "Hyderabad",
    image: hyderabadImg,
    titles: ["Hatchback", "Sedan", "SUV", "TUV"],
    link: "/hyderabad",
  },
  {
    name: "Showroom 2",
    address: "Visakhapatnam",
    image: vizagImg,
    titles: ["Hatchback", "Sedan", "SUV", "TUV"],
    link: "/visakhapatnam",
  },
  {
    name: "Showroom 3",
    address: "Delhi",
    image: delhiImg,
    titles: ["Hatchback", "Sedan", "SUV", "TUV"],
    link: "/delhi",
  },
  {
    name: "Showroom 4",
    address: "Amalapuram",
    image: amalapuramImg,
    titles: ["Hatchback", "Sedan", "SUV", "TUV"],
    link: "/amalapuram",
  },
  {
    name: "Showroom 5",
    address: "Kakinada",
    image: kakinadaImg,
    titles: ["Hatchback", "Sedan", "SUV", "TUV"],
    link: "/kakinada",
  },
  {
    name: "Showroom 6",
    address: "Warangal",
    image: warangalImg,
    titles: ["Hatchback", "Sedan", "SUV", "TUV"],
    link: "/warangal",
  },
];

const Showrooms = () => {
  return (
    <div className="showroom-section">
      <h2 id="projects">Our Showrooms</h2>
      <div className="showroom-container">
        {showroomsData.map((showroom, index) => (
          <div
            key={index}
            className="showroom-box"
            style={{ backgroundImage: `url(${showroom.image})` }} // Correct usage of backgroundImage
          >
            <div className="showroom-info">
              <h3>{showroom.name}</h3>
              <p>{showroom.address}</p>
              {/* <button className="visit-button">Visit Here</button> */}
              <Link to={showroom.link} className="visit-button">
                Visit Here
              </Link>
            </div>
            <div className="titles">
              {showroom.titles.map((title, idx) => (
                <span key={idx} className="title">
                  {title}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Showrooms;
