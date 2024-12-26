import React, { useEffect } from 'react';
import './Map.css';

const Map = () => {
  useEffect(() => {
    // Load and initialize the map when the component is mounted
    const mapContainer = document.getElementById('map');

    // Initialize a simple map using Leaflet.js (or other library if you prefer)
    const L = window.L;

    const map = L.map(mapContainer).setView([51.505, -0.09], 2); // Initial position and zoom level

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add custom markers or points of interest if necessary
    const marker = L.marker([51.505, -0.09]).addTo(map);
    marker.bindPopup('<b>London</b><br>City of London').openPopup();

    // Cleanup on component unmount
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="map-container">
      <h2 className="map-title">Explore the World</h2>
      <div id="map" className="map"></div>
    </div>
  );
};

export default Map;
