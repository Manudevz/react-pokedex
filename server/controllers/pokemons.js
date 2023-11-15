const baseURL = "https://pokeapi.co/api/v2/";
const limit = 20;
const offset = 0;

const getPokemons = async () => {
  try {
    const response = await fetch(
      `${baseURL}pokemon?limit=${limit}&offset=${offset}`
    );

    if (response.ok) {
      const pokemons = await response.json();
      const promisesPokemonsList = pokemons.results.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        const data = await res.json();
        return data;
      });
      const pokemonsResult = await Promise.all(promisesPokemonsList);
      return pokemonsResult;
    } else {
      throw new Error("lanza error ruta getPokemons");
    }
  } catch (error) {
    console.log("🚀 ~ file: pokemons.js:28 ~ getPokemons ~ error:", error);
  }
};

module.exports = { getPokemons };
