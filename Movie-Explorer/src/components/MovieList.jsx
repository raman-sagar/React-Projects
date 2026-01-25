import React from "react";
import { MovieCard } from "./MovieCard";

export const MovieList = ({ movies }) => {
  if (movies.lenght === 0) {
    return (
      <div className="movie-list">
        <h2>No movies found</h2>
      </div>
    );
  }

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};
