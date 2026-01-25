import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const MovieDetail = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  const fetchMovieDetail = async () => {
    try {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=1c12799f&i=${id}`
      );
      const data = await res.json();
      setMovie(data);
      // console.log(data);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setErr(error.message);
      setLoading(false);
    }
  };

  const { id } = useParams();
  useEffect(() => {
    fetchMovieDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="movie-detail">
        <h2>Loading...</h2>
      </div>
    );
  }

  if (err) {
    return (
      <div className="movie-detail">
        <h2>{err}</h2>
      </div>
    );
  }

  return (
    <div className="movie-detail">
      <h2>{movie.Title}</h2>
      <img alt={movie.Title} src={movie.Poster} />
      <p>
        <strong>Genre:</strong> {movie.Genre}
      </p>
      <p>
        <strong>Released:</strong> {movie.Released}
      </p>
      <p>
        <strong>Language:</strong> {movie.Language}
      </p>
      <p>
        <strong>Runtime:</strong> {movie.Runtime}
      </p>
      <p>
        <strong>imdbRating :</strong> {movie.imdbRating}
      </p>
      <p>
        <strong>Plot:</strong> {movie.Plot}
      </p>
    </div>
  );
};
