const { getPokemonList, getPokemon } = require("./helper");
const chalk = require("chalk");

const callingParams = {
  url: "https://pokeapi.co/api/v2/pokemon",
};

function printPokemonHelpLine(command, description) {
  console.log(`${chalk.cyan(command.padEnd(18))} ${chalk.gray(description)}`);
}

const pokemonCommandManager = async (arg) => {
  try {
    const [subCommand = "list", ...params] = arg; //next -n , previous -p , search -s

    switch (subCommand) {
      case "-n": {
        const { next, previous } = await getPokemonList(callingParams.next);
        callingParams.next = next;
        callingParams.previous = previous;
        break;
      }
      case "-p": {
        const { next, previous } = await getPokemonList(callingParams.previous);
        callingParams.next = next;
        callingParams.previous = previous;
        break;
      }
      case "-s": {
        await getPokemon(params.join(""));
        break;
      }
      case "--help": {
        console.log(chalk.bold.yellow("Pokemon Command Help"));
        console.log(chalk.yellow("===================="));
        printPokemonHelpLine("pokemon list", "Show the first page of Pokemon");
        printPokemonHelpLine("pokemon -n", "Show the next page of Pokemon");
        printPokemonHelpLine("pokemon -p", "Show the previous page of Pokemon");
        printPokemonHelpLine(
          "pokemon -s <name>",
          "Show details for a Pokemon by name or ID",
        );
        break;
      }
      case "list": {
        const { next, previous } = await getPokemonList(callingParams.url);
        callingParams.next = next;
        callingParams.previous = previous;
        break;
      }
      default: {
        console.log(chalk.red(`Invalid Pokemon command '${subCommand}'`));
        console.log(
          `Type ${chalk.cyan("pokemon --help")} to see Pokemon commands.`,
        );
      }
    }
  } catch (error) {
    console.log(chalk.red("Error:"), error.message);
  }
};

module.exports = pokemonCommandManager;
