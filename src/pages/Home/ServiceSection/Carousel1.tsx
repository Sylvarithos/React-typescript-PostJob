import React from 'react';
import './CustomCarousel.css'; // Import custom CSS for the carousel

interface CarouselProps {
  items: React.ReactNode[];
}

const CustomCarousel: React.FC<CarouselProps> = ({ items }) => {
  return (
    <div className="carousel-container">
      {items.map((item, index) => (
        <div key={index} className="carousel-item">
          {item}
        </div>
      ))}
    </div>
  );
};

export default CustomCarousel;
