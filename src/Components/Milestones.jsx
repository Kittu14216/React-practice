import React from "react";
import "./Milestones.css"; // Import the CSS file

const milestonesData = [
  {
    milestone: "Repair Shop Established",
    location: "Local Market",
    year: "2010",
    description: "Started as a small repair shop catering to local customers.",
    icon: "🔧", // You can replace this with any relevant icon or image
  },
  {
    milestone: "First Car Dealership",
    location: "City Center",
    year: "2015",
    description: "Transitioned into car sales, opening our first dealership.",
    icon: "🚗",
  },
  {
    milestone: "Expansion to Multiple Locations",
    location: "Statewide",
    year: "2018",
    description:
      "Expanded operations to include multiple locations across the state.",
    icon: "🏢",
  },
  {
    milestone: "Launched Online Sales Platform",
    location: "Website",
    year: "2020",
    description:
      "Introduced online sales for greater customer reach and convenience.",
    icon: "🌐",
  },
];

const MilestonesProfile = () => {
  return (
    <div className="milestones-profile">
      <h2>Company Milestones</h2>
      <div className="milestones-container">
        {milestonesData.map((milestone, index) => (
          <div key={index} className="milestone-item">
            <div className="icon">{milestone.icon}</div>
            <div className="milestone-info">
              <h3>{milestone.milestone}</h3>
              <p>
                <strong>Location:</strong> {milestone.location}
              </p>
              <p>
                <strong>Year:</strong> {milestone.year}
              </p>
              <p>
                <strong>Description:</strong> {milestone.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MilestonesProfile;
