import { Icon } from 'leaflet';
import React, { useEffect, useState } from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import './Map.css';

const Map = () => {
  const [currentPosition, setCurrentPosition] = useState([51.505, -0.09]); // Default position (London)
  const [locations] = useState([
    { id: 1, name: 'London', lat: 51.505, lng: -0.09, description: 'The capital of the UK' },
    { id: 2, name: 'Paris', lat: 48.8566, lng: 2.3522, description: 'The capital of France' },
    { id: 3, name: 'New York', lat: 40.7128, lng: -74.0060, description: 'The city that never sleeps' },
    { id: 4, name: 'Tokyo', lat: 35.6762, lng: 139.6503, description: 'The capital of Japan' },
  ]);

  // Update map center based on user's geolocation
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentPosition([position.coords.latitude, position.coords.longitude]);
      });
    }
  }, []);

  // Function to update the map center with geolocation
  const UpdateMapCenter = () => {
    const map = useMap();
    map.setView(currentPosition, map.getZoom()); // Update to current position
    return null;
  };

  return (
    <div className="map-container">
      <h2 className="map-title">Explore the World</h2>
      <MapContainer
        center={currentPosition}
        zoom={2}
        className="map"
        scrollWheelZoom={true}
      >
        <UpdateMapCenter />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {locations.map((location) => (
          <Marker
            key={location.id}
            position={[location.lat, location.lng]}
            icon={
              new Icon({
                iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
              })
            }
          >
            <Popup>
              <h4>{location.name}</h4>
              <p>{location.description}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Geolocation Button */}
      <button
        className="geolocation-btn"
        onClick={() => {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
              const { latitude, longitude } = position.coords;
              setCurrentPosition([latitude, longitude]);
            });
          }
        }}
      >
        <FaLocationArrow /> Use My Location
      </button>
    </div>
  );
};

export default Map;
