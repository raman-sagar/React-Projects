export const PokemonCard = ({ pokemonData }) => {
  return (
    <>
      {/* Root conatiner,baad mein iski hieght ko auto par set kar dunga */}
      <div className="card view">
        {/* Image */}
        <figure className="flex items-center flex-col space-y-3">
          <img
            src={pokemonData.sprites.other.dream_world.front_default}
            alt={pokemonData.name}
            className="p-2 w-30 h-30 my-2 bg-red-200 rounded-xl shadow-lg/90 shadow-red-400"
          />
          <h1 className="font-semibold text-xl capitalize text-pink-400">
            {pokemonData.name}
          </h1>
          <p className="bg-green-400 px-4 rounded-full text-lg text-white">
            {pokemonData.types.map((curType) => curType.type.name).join(",")}
          </p>
        </figure>

        <div>
          <div className="grid grid-cols-3 space-y-3 relative right-0 left-0 bottom-0 top-3">
            <p className="text-center">
              <span className="text-emerald-600 text-lg">Height: </span>
              <span className="text-gray-500">{pokemonData.height}</span>
            </p>

            <p className="text-center">
              <span className="text-emerald-600 text-lg">Weight: </span>
              <span className="text-gray-500">{pokemonData.weight}</span>
            </p>
            <p className=" text-center">
              <span className="text-emerald-600 text-lg">Speed: </span>

              <span className="text-gray-500">
                {pokemonData.stats[5].base_stat}
              </span>
            </p>

            <div className=" text-center">
              <span className="text-gray-500">
                {" "}
                {pokemonData.base_experience}
              </span>

              <h1 className="text-emerald-600 text-lg">Experinace: </h1>
            </div>

            <div className=" text-center">
              <span className="text-gray-500">
                {pokemonData.stats[1].base_stat}
              </span>
              <h1 className="text-emerald-600 text-lg">Attack: </h1>
            </div>
            <div className="text-center">
              <span className="text-gray-500">
                {" "}
                {pokemonData.abilities
                  .map((obj) => obj.ability.name)
                  .slice(0, 1)
                  .join(",")}
              </span>
              <h1 className="text-emerald-600 text-lg">Abilities: </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
