import React, { useState } from 'react';

const ReviewForm = ({ onAddReview }) => {
  const [reviewText, setReviewText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (reviewText.trim() === '') return;
    onAddReview(reviewText);
    setReviewText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        rows="4"
        cols="50"
        placeholder="Write your review..."
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
      />
      <br />
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
