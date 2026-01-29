import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const MovieDetail = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  const fetchMovieDetail = async () => {
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=1c12799f&i=${id}`,
      );
      const data = await res.json();
      setMovie(data);
      //console.log(data);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
      setErr(error.message);
    }
  };

  const { id } = useParams();
  useEffect(() => {
    fetchMovieDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="h-screen flex flex-col justify-center items-center text-2xl font-semibold text-teal-600">
        <span className="animate-spin border-amber-500 inline-block size-10 border-b-2 rounded-b-full"></span>
        Loading...
      </div>
    );
  }

  if (err) {
    return (
      <div className="h-screen flex flex-col justify-center items-center text-2xl font-semibold text-teal-600">
        <span>{err}😥</span>
        <button className="try-button" onClick={() => window.location.reload()}>
          Try again
        </button>
      </div>
    );
  }

  return (
    <div className="movie-detail">
      <h2 className="text-2xl font-semibold py-3">{movie.Title ?? "N/A"}</h2>
      <img
        className="w-1/2 md:w-1/3 shadow-md shadow-teal-100 hover:shadow-lg duration-500 ring-2 ring-emerald-400"
        alt={movie.Title}
        src={movie.Poster}
      />
      <p className="mt-5">
        <strong className="text-teal-400">Genre:</strong> {movie.Genre ?? "N/A"}
      </p>
      <p>
        <strong className="text-teal-400">Released:</strong>{" "}
        {movie.Released ?? "N/A"}
      </p>
      <p>
        <strong className="text-teal-400">Language:</strong>{" "}
        {movie.Language ?? "N/A"}
      </p>
      <p>
        <strong className="text-teal-400">Country:</strong>{" "}
        {movie.Country ?? "N/A"}
      </p>
      <p>
        <strong className="text-teal-400">Type:</strong> {movie.Type ?? "N/A"}
      </p>

      <p>
        <strong className="text-teal-400">Runtime:</strong>{" "}
        {movie.Runtime ?? "N/A"}
      </p>
      <p>
        <strong className="text-teal-400">imdbRating :</strong>{" "}
        {movie.imdbRating ?? "N/A"}
      </p>
      <p>
        <strong className="text-teal-400">imdbVotes:</strong>{" "}
        {movie.imdbVotes ?? "N/A"}
      </p>
      <p>
        <strong className="text-teal-400">Rated:</strong> {movie.Rated ?? "N/A"}
      </p>
      <p>
        <strong className="text-teal-400">Website:</strong>{" "}
        {movie.Website ?? "N/A"}
      </p>
      <p>
        <strong className="text-teal-400">BoxOffice:</strong>{" "}
        {movie.BoxOffice ?? "N/A"}
      </p>

      <p>
        <strong className="text-teal-400">DVD:</strong> {movie.DVD ?? "N/A"}
      </p>
      <p>
        <strong className="text-teal-400">Metascore:</strong>{" "}
        {movie.Metascore ?? "N/A"}
      </p>
      <p>
        <strong className="text-teal-400">Production:</strong>{" "}
        {movie.Production ?? "N/A"}
      </p>
      <p>
        <strong className="text-teal-400">Awards:</strong>{" "}
        {movie.Awards ?? "N/A"}
      </p>
      <p>
        <strong className="text-teal-400">Director:</strong>{" "}
        {movie.Director ?? "N/A"}
      </p>
      <p>
        <strong className="text-teal-400">Actors:</strong>{" "}
        {movie.Actors ?? "N/A"}
      </p>
      <p>
        <strong className="text-teal-400">Writer:</strong>{" "}
        {movie.Writer ?? "N/A"}
      </p>
      <p>
        <strong className="text-teal-400">Plot:</strong> {movie.Plot ?? "N/A"}
      </p>
    </div>
  );
};
