import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      image: '/images/user1.jpg',
      quote: 'This platform made planning my vacation so simple and enjoyable. Highly recommended!',
    },
    {
      id: 2,
      name: 'Mark Smith',
      image: '/images/user2.jpg',
      quote: 'An incredible experience! Every detail was thoughtfully arranged and stress-free.',
    },
    {
      id: 3,
      name: 'Emily Davis',
      image: '/images/user3.jpg',
      quote: 'I discovered amazing destinations and felt supported throughout the journey. Fantastic!',
    },
  ];

  return (
    <div className="testimonials">
      <h2 className="testimonials-title">What Our Clients Say</h2>
      <div className="testimonials-carousel">
        {testimonials.map(({ id, name, image, quote }) => (
          <div key={id} className="testimonial-card">
            <FaQuoteLeft className="quote-icon-left" />
            <p className="testimonial-quote">{quote}</p>
            <FaQuoteRight className="quote-icon-right" />
            <div className="testimonial-user">
              <img src={image} alt={name} className="testimonial-image" />
              <h3 className="testimonial-name">{name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
