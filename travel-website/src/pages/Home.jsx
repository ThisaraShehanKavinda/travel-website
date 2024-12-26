import React from 'react';
import Contact from './Contact';
import Hero from './Hero';
import './Home.css';
import Packages from './Packages';
import Testimonials from './Testimonials';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <Hero />

      {/* Featured Packages Section */}
      <div className="featured-packages-container">
        <h2 className="section-title">Featured Travel Packages</h2>
        <Packages />
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-container">
        <h2 className="section-title">What Our Clients Say</h2>
        <Testimonials />
      </div>

      {/* Contact Section */}
      <div className="contact-container">
        <h2 className="section-title">Get in Touch</h2>
        <Contact />
      </div>
    </div>
  );
};

export default Home;
