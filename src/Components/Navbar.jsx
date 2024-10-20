import React, { useState } from "react";
import "./Navbar.css";
// import { assets } from "../../assets/assets";

export default function Navbar() {
  const [menu, setmenu] = useState("home");
  return (
    <div className="navbar">
      {/* <img src={assets.logo} /> */}
      <div className="Project-title">
        <h1>Project</h1>
      </div>
      <ul className="navbar-menu">
        <li
          onClick={() => setmenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          <a href="#home">Home</a>
        </li>

        <li
          onClick={() => setmenu("services")}
          className={menu === "services" ? "active" : ""}
        >
          <a href="#services">Services</a>
        </li>
        <li
          onClick={() => setmenu("projects")}
          className={menu === "projects" ? "active" : ""}
        >
          <a href="#projects">Projects</a>
        </li>
        <li
          onClick={() => setmenu("About-us")}
          className={menu === "About-us" ? "active" : ""}
        >
          <a href="#about">About-us</a>
        </li>
        <li
          onClick={() => setmenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          <a href="#contact">Contact-us</a>
        </li>
      </ul>
    </div>
  );
}
