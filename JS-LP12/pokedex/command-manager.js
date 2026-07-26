const pokemonCommandManager = require("./pokemon");
const chalk = require("chalk");

function printHelpLine(command, description) {
  console.log(`${chalk.cyan(command.padEnd(18))} ${chalk.gray(description)}`);
}

async function commandManager(commands, terminal) {
  const [type, ...arg] = commands;
  switch (type) {
    case "pokemon": {
      await pokemonCommandManager(arg);
      break;
    }
    case "exit": {
      terminal.close();
      return;
    }
    case "help": {
      console.log(chalk.bold.yellow("Pokedex Help"));
      console.log(chalk.yellow("============"));
      printHelpLine("pokemon list", "Show the first page of Pokemon");
      printHelpLine("pokemon -n", "Show the next page of Pokemon");
      printHelpLine("pokemon -p", "Show the previous page of Pokemon");
      printHelpLine(
        "pokemon -s <name>",
        "Show details for a Pokemon by name or ID",
      );
      printHelpLine("pokemon --help", "Show Pokemon command help");
      printHelpLine("help", "Show this help document");
      printHelpLine("exit", "Exit the program");
      break;
    }
    case "": {
      break;
    }
    default:
      console.log(chalk.red(`Command '${type}' not found`));
      console.log(`Type ${chalk.cyan("help")} to see available commands.`);
  }
}

module.exports = commandManager;
