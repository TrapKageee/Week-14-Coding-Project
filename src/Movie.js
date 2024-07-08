import React, { useState } from 'react';
import Stars from './Stars';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';
import './Movie.css';

const Movie = ({ movie }) => {
  const [reviews, setReviews] = useState(movie.reviews || []);

  const handleAddReview = (reviewText) => {
    const newReview = {
      id: reviews.length + 1,
      text: reviewText,
    };
    setReviews([...reviews, newReview]);
  };

  return (
    <div className="movie">
      <img src={movie.imageUrl} alt={movie.title} className="movie-image" />
      <div className="movie-details">
        <h2>{movie.title}</h2>
        <p>{movie.synopsis}</p>
        <Stars totalStars={5} initialRating={movie.rating} onRate={(rating) => console.log(rating)} />
        <ReviewList reviews={reviews} />
        <ReviewForm onAddReview={handleAddReview} />
      </div>
    </div>
  );
};

export default Movie;
