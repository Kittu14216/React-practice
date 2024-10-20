import React from "react";
import "./vision.css"; // Import the CSS file

const missionVisionData = [
  {
    title: "Mission",
    content:
      "To provide our customers with valued construction solutions using our expertise in the design, manufacture & installation of building components. Transform the way people perceive 'Quality'.",
    icon: "🎯", // Mission icon
  },
  {
    title: "Vision",
    content: "Be global, Be Fast, Be Connected.",
    icon: "🌍", // Vision icon
  },
];

const certificatesData = [
  {
    title: "Anjan Company Incorporation Certificate",
    icon: "📜", // Certificate icon
  },
  {
    title: "ISO 9001:2015 Certification",
    icon: "🏆", // Award icon
  },
  {
    title: "Best Construction Company Award 2022",
    icon: "🥇", // Award icon
  },
];

const MissionVisionCertificates = () => {
  return (
    <div className="mission-vision-certificates">
      <h2>Mission & Vision</h2>
      <div className="mission-vision-container">
        {missionVisionData.map((item, index) => (
          <div key={index} className="mission-vision-item">
            <div className="icon">{item.icon}</div>
            <div className="text">
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MissionVisionCertificates;
