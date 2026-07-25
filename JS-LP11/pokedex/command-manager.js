const { getPokemonList } = require("./pokemon");

async function commandManager(commands, terminal) {
  const [type] = commands;
  switch (type) {
    case "pokemon": {
      const pokemonList = await getPokemonList();
      console.log(pokemonList);
      break;
    }
    case "exit": {
      terminal.close();
      return;
    }
    default:
      console.log(`Command '${type}' not found`);
  }
}

module.exports = commandManager;
