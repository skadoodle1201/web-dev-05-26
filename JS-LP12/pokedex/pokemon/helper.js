const chalk = require("chalk");

const getPokemonList = async (url) => {
  if (!url) {
    throw new Error("Page does not exist");
  }
  const response = await fetch(url);
  const data = await response.json();
  console.log(chalk.bold.yellow("Pokemon List"));
  console.log(chalk.yellow("============"));
  data.results.forEach((element) => {
    console.log(chalk.green(`- ${element.name}`));
  });
  return {
    next: data.next,
    previous: data.previous,
  };
};

const getPokemon = async (nameOrId) => {
  if (!nameOrId) {
    throw new Error("Name or ID is required");
  }
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`);
  const data = await response.json();
  console.log(chalk.bold.yellow("Pokemon Details"));
  console.log(chalk.yellow("==============="));
  console.log(`${chalk.cyan("Name:")} ${chalk.green(data.name)}`);
  console.log(chalk.bold.magenta("Abilities"));
  data.abilities.forEach((ele, index) => {
    const ability = ele.ability;
    console.log(`${chalk.gray(`${index + 1}.`)} ${ability.name}`);
  });

  console.log(`${chalk.cyan("Height:")} ${data.height}`);
  console.log(`${chalk.cyan("Weight:")} ${data.weight}`);
  console.log(`${chalk.cyan("Experience:")} ${data.base_experience}`);

  const types = data.types.map((ele) => {
    return ele.type.name;
  });

  console.log(`${chalk.cyan("Type:")} ${chalk.green(types.join(" "))}`);
};

module.exports = {
  getPokemonList,
  getPokemon,
};
