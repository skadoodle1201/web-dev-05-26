const getPokemonList = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log("Error getting pokemon list", error);
  }
};

const getPokemon = async (nameOrId) => {
  try {
    if (!nameOrId) {
      throw new Error("Name or Id is required");
    }
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${nameOrId}`,
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error getting pokemon", error);
  }
};

module.exports = { getPokemonList, getPokemon };
