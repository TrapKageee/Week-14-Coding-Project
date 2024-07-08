import React from 'react';
import Movie from './Movie';

const movies = [
  {
    id: 1,
    title: 'Movie 1',
    synopsis: 'Synopsis for Movie 1',
    imageUrl: 'https://via.placeholder.com/150',
    rating: 3.5,
    reviews: [
      { id: 1, text: 'Good movie!' },
      { id: 2, text: 'Could be better.' },
    ],
  },
  {
    id: 2,
    title: 'Movie 2',
    synopsis: 'Synopsis for Movie 2',
    imageUrl: 'https://via.placeholder.com/150',
    rating: 4.2,
    reviews: [
      { id: 1, text: 'Awesome!' },
      { id: 2, text: 'Must-watch!' },
    ],
  },
];

const MovieList = () => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
