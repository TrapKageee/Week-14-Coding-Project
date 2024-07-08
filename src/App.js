import React from 'react'; // Import React
import './App.css'; // Import css styles for App
import MovieList from './MovieList'; // Import MovieList component
import Stars from './Stars'; // Import Stars component

const App = () => {  // Creating fake movies, adding synopsis, placeholders and some pre-made reviews
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

  const handleReviewSubmit = (reviewText) => {
    console.log('Submitted review:', reviewText);
    // Implement logic to update movie reviews here
  };

  return (
    <div className="App">
      <h1>Movie Reviews</h1>
      <MovieList movies={movies} onReviewSubmit={handleReviewSubmit} />
    </div>
  );
};

export default App;
