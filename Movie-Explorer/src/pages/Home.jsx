import { useState, useEffect, useRef } from "react";
import { MovieList } from "../components/MovieList";

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  const InputRef = useRef(null);

  const fetchMovies = async (query) => {
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=${query}`,
      );
      const data = await res.json();
      setMovies(data.Search || []);
      //console.log("Movies", data);
      setLoading(false);
      if (data.Error) {
        setErr(data.Error);
      }
    } catch (error) {
      console.log(error.message);
      setLoading(false);
      setErr(error.message);
    }
  };

  useEffect(() => {
    fetchMovies("Avengers");
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    const query = InputRef.current.value.trim();
    if (query) {
      fetchMovies(query);
    }
    // Reset the input field
    //InputRef.current.value = "";
  };

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
    <div className="home">
      <form className="space-x-2" onSubmit={handleSearch}>
        <input
          className="searchInput"
          ref={InputRef}
          placeholder="Search for a movie..."
        />
        <button className="submit-button" type="submit">
          Search 🔎
        </button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
};
