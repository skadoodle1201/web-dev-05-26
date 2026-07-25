const readline = require("node:readline");
const { stdin, stdout } = require("node:process");
const commandManager = require("./command-manager.js");

const terminal = readline.createInterface({
  input: stdin,
  output: stdout,
  prompt: "pokedex> ",
});

console.log("Starting Pokedex .....");

terminal.prompt();
terminal.on("line", async (input) => {
  const commands = input.split(" ");
  await commandManager(commands, terminal);
  terminal.prompt();
});

terminal.on("close", () => {
  console.log("Thank you for using pokedex!!!!");
  process.exit();
});
