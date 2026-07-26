const readline = require("node:readline");
const { stdin, stdout } = require("node:process");
const chalk = require("chalk");
const CreateCommandManager = require("./command-manager.js");

const terminal = readline.createInterface({
  input: stdin,
  output: stdout,
  prompt: chalk.cyan("pokedex> "),
});

const commandManager = CreateCommandManager(terminal);

console.log(
  chalk.bold.yellow("============= Welcome To Pokedex ============="),
);
console.log(
  `${chalk.green("Tip:")} Type ${chalk.cyan("help")} to see available commands.`,
);
console.log(
  chalk.gray("Search, browse, and inspect Pokemon from your terminal."),
);

terminal.prompt();
terminal.on("line", async (input) => {
  const commands = input.trim().split(/\s+/);
  await commandManager(commands);
  terminal.prompt();
});

terminal.on("close", () => {
  console.log(chalk.green("Thank you for using Pokedex!"));
  process.exit();
});
