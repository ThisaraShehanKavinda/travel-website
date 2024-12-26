import React from 'react';
import './App.css';
import Contact from './components/Contact'; // Contact section
import Footer from './components/Footer'; // Footer section
import Gallery from './components/Gallery'; // Gallery section
import Hero from './components/Hero'; // Hero section
import Map from './components/Map'; // Interactive map section
import Navbar from './components/Navbar'; // Navbar component
import Packages from './components/Packages'; // Travel packages section
import Testimonials from './components/Testimonials'; // Testimonials section

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Travel Packages Section */}
      <Packages />

      {/* Interactive Map Section */}
      <Map />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Gallery Section */}
      <Gallery />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
