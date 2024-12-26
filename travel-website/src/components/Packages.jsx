import React, { useState } from 'react';
import './Packages.css';

const Packages = () => {
  const packages = [
    { id: 1, title: 'Beach Paradise', price: '$500', image: '/images/beach.jpg', type: 'beach' },
    { id: 2, title: 'Mountain Adventure', price: '$700', image: '/images/mountain.jpg', type: 'adventure' },
    { id: 3, title: 'City Break', price: '$400', image: '/images/city.jpg', type: 'city' },
    { id: 4, title: 'Tropical Escape', price: '$600', image: '/images/tropical.jpg', type: 'beach' },
    { id: 5, title: 'Desert Safari', price: '$550', image: '/images/desert.jpg', type: 'adventure' },
  ];

  const [filter, setFilter] = useState('all');

  const filteredPackages = filter === 'all' ? packages : packages.filter(pkg => pkg.type === filter);

  return (
    <div className="packages">
      <h2 className="packages-title">Our Travel Packages</h2>
      <div className="filters">
        <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>
          All
        </button>
        <button className={`filter-btn ${filter === 'beach' ? 'active' : ''}`} onClick={() => setFilter('beach')}>
          Beach
        </button>
        <button className={`filter-btn ${filter === 'adventure' ? 'active' : ''}`} onClick={() => setFilter('adventure')}>
          Adventure
        </button>
        <button className={`filter-btn ${filter === 'city' ? 'active' : ''}`} onClick={() => setFilter('city')}>
          City
        </button>
      </div>
      <div className="package-list">
        {filteredPackages.map(pkg => (
          <div key={pkg.id} className="package-card">
            <img src={pkg.image} alt={pkg.title} className="package-image" />
            <div className="package-info">
              <h3>{pkg.title}</h3>
              <p className="package-price">{pkg.price}</p>
              <button className="btn-primary">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
