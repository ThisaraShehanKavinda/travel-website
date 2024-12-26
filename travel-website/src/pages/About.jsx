import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">About Us</h2>
      <p className="about-description">
        Welcome to our website! We are a passionate group of professionals dedicated to bringing you
        exceptional travel experiences. Our mission is to inspire wanderlust and make it easy for you
        to explore the world. Whether you're planning a vacation, an adventure, or a luxury getaway,
        we have the perfect package for you.
      </p>

      <div className="features-section">
        <div className="feature-card">
          <h3 className="feature-title">Customized Packages</h3>
          <p className="feature-description">
            We offer personalized travel packages tailored to your specific needs and preferences.
          </p>
        </div>

        <div className="feature-card">
          <h3 className="feature-title">Expert Guidance</h3>
          <p className="feature-description">
            Our travel experts are here to guide you through every step of your journey to ensure a
            seamless experience.
          </p>
        </div>

        <div className="feature-card">
          <h3 className="feature-title">Global Reach</h3>
          <p className="feature-description">
            With our global network of partners, we can offer you the best deals and experiences
            no matter where you're traveling.
          </p>
        </div>
      </div>

      <div className="team-section">
        <h3 className="team-title">Meet Our Team</h3>
        <div className="team-member">
          <img
            src="https://via.placeholder.com/150"
            alt="Team Member"
            className="team-member-photo"
          />
          <h4 className="team-member-name">John Doe</h4>
          <p className="team-member-role">Founder & CEO</p>
        </div>

        <div className="team-member">
          <img
            src="https://via.placeholder.com/150"
            alt="Team Member"
            className="team-member-photo"
          />
          <h4 className="team-member-name">Jane Smith</h4>
          <p className="team-member-role">Travel Expert</p>
        </div>
      </div>
    </div>
  );
};

export default About;
