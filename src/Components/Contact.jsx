import React from "react";
import "./Contact.css"; // Import the CSS file

const ContactUs = () => {
  return (
    <div className="contact-us" id="contact">
      <h2>Write Us Your Valuable Feedback</h2>
      <div className="contact-container">
        <div className="form-container">
          <form className="contact-form">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" required></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="map-container">
          <h3>Our Location</h3>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d390735.3028174971!2d81.72725266467864!3d16.588836337830593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4b52c01f6fef45%3A0x3c0b3ef2678e8c1c!2sAmalapuram%2C%20Andhra%20Pradesh%2C%20India!5e0!3m2!1sen!2sus!4v1615511111044!5m2!1sen!2sus
"
            width="100%" // Full width
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
