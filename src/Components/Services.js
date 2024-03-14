import React from 'react'
import './Services.css';
const Services = () => {
    return (
      <section className="services container">
        <h2>Our Services</h2>
  
        <div className="service-cards-container">
          <div className="service-card">
            <img
              src="https://rb.gy/ywgvds"
              alt="Continuing Education"
              className="service-image"
            />
            <h3>Continuing Education</h3>
            <p>Stay updated with the latest medical knowledge through our comprehensive educational programs.</p>
          </div>
  
          <div className="service-card">
            <img
              src="https://shorturl.at/pvXZ2"
              alt="Document Repository"
              className="service-image"
            />
            <h3>Document Repository</h3>
            <p>Access a vast collection of medical rules, guidelines, and precautions to enhance your practice.</p>
          </div>
  
          <div className="service-card">
            <img
              src="https://rb.gy/vupp8g"
              alt="Community Support"
              className="service-image"
            />
            <h3>Community Support</h3>
            <p>Connect with fellow nurses, share experiences, and support each other in our vibrant community.</p>
          </div>
  
         
        </div>
      </section>
    );
  };
  
  export default Services;