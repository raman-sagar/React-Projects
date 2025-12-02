import { useEffect, useState } from "react";
import { PokemonCard } from "./PokemonCard";

export const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const API = "https://pokeapi.co/api/v2/pokemon?limit=200";

  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      // console.log("Get data", data);

      //map method start
      const detailedPokemonData = data.results.map(async (obj) => {
        // console.log(obj.url);
        const res = await fetch(obj.url);
        const data = await res.json();
        // console.log("Object.url", data);
        return data;
      }); //map method end

      const detailedResponse = await Promise.all(detailedPokemonData);
      // console.log("Array of objects ", detailedResponse);
      setPokemon(detailedResponse);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
      setError(error);
    }
  };
  useEffect(() => {
    fetchPokemon();
  }, []);

  // Search functionality

  const searchContent = pokemon.filter((obj) =>
    obj.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center text-gray-500">
        <h1 className="font-mono text-4xl">Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen flex justify-center items-center text-red-500">
        <h1 className="font-mono text-4xl">!{error.message}😢</h1>
      </div>
    );
  }
  return (
    <>
      {/* Root Container */}
      <div className="rootContainer">
        <center className="pokemonProject">Pokemon Project</center>
        {/* Input Field */}
        <div className="searchContainer">
          <p className="text-lg font-semibold text-pink-700">
            Search Pokemon card
          </p>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search here"
            className="input-control"
          ></input>
        </div>
        {/* Unordered List */}
        <div>
          <ul className="grid-container">
            {searchContent.map((obj) => {
              return <PokemonCard key={obj.id} pokemonData={obj} />;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
