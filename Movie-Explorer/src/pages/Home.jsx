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
        `http://www.omdbapi.com/?apikey=1c12799f&s=${query}`
      );
      const data = await res.json();
      setMovies(data.Search || []);
      // console.log("Movies", data.Search);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setErr(error.message);
      setLoading(false);
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
    // InputRef.current.value=""
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (err) {
    return <div>{err}</div>;
  }

  return (
    <div className="home">
      <form onSubmit={handleSearch}>
        <input
          className="searchInput"
          ref={InputRef}
          placeholder="Search for a movie..."
        />
        <button type="submit">Search 🔎</button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
};
