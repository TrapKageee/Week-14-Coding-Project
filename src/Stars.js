import React, { useState } from 'react';
import './Stars.css';

const Stars = ({ totalStars, initialRating, onRate }) => {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseOver = (star) => {
    setHoverRating(star);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleClick = (star) => {
    setRating(star);
    onRate(star);
  };

  return (
    <div className="stars">
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={starValue}
            className={starValue <= (hoverRating || rating) ? 'star filled' : 'star'}
            onMouseOver={() => handleMouseOver(starValue)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(starValue)}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

export default Stars;
