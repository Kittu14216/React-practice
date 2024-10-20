// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Services from "./Components/Services";
import Showrooms from "./Components/Projects";
import UpShowrooms from "./Components/Upcoming";
import AboutUs from "./Components/About";
import MilestonesProfile from "./Components/Milestones";
import MissionVisionCertificates from "./Components/vision";
import ContactUs from "./Components/Contact";

import Visakhapatnam from "./Components/Showrooms_pro/Visakhapatnam";
import Delhi from "./Components/Showrooms_pro/Delhi";
import Amalapuram from "./Components/Showrooms_pro/Amalapuaram";
import Kakinada from "./Components/Showrooms_pro/kakinada";
import Warangal from "./Components/Showrooms_pro/Warangal";
import Hyderabad from "./Components/Showrooms_pro/Hyderabad";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Home route showing all sections */}
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <Header />
              <Services />
              <Showrooms />
              <UpShowrooms />
              <AboutUs />
              <MilestonesProfile />
              <MissionVisionCertificates />
              <ContactUs />
            </div>
          }
        />
        {/* Route to only show the Practice component */}
        <Route path="/hyderabad" element={<Hyderabad />} />
        <Route path="/visakhapatnam" element={<Visakhapatnam />} />
        <Route path="/delhi" element={<Delhi />} />
        <Route path="/amalapuram" element={<Amalapuram />} />
        <Route path="/kakinada" element={<Kakinada />} />
        <Route path="/warangal" element={<Warangal />} />
      </Routes>
    </Router>
  );
}
