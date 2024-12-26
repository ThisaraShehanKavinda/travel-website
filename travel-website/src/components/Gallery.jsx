import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const images = [
    { id: 1, src: '/images/gallery1.jpg', alt: 'Beach View' },
    { id: 2, src: '/images/gallery2.jpg', alt: 'Mountain Adventure' },
    { id: 3, src: '/images/gallery3.jpg', alt: 'City Skyline' },
    { id: 4, src: '/images/gallery4.jpg', alt: 'Tropical Paradise' },
    { id: 5, src: '/images/gallery5.jpg', alt: 'Desert Safari' },
    { id: 6, src: '/images/gallery6.jpg', alt: 'Nature Trail' },
  ];

  return (
    <div className="gallery">
      <h2 className="gallery-title">Explore Our Destinations</h2>
      <div className="gallery-grid">
        {images.map(image => (
          <div key={image.id} className="gallery-item">
            <img src={image.src} alt={image.alt} className="gallery-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
