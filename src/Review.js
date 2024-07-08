import React from 'react';

const Review = ({ review }) => {
  return (
    <div className="review">
      <p>{review.text}</p>
    </div>
  );
};

export default Review;
