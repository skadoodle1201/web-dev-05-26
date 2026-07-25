function Animal() {}

Animal.prototype.run = () => {
  console.log("Running");
};

Animal.prototype.eat = () => {
  console.log("Eating");
};

Animal.prototype.sleep = () => {
  console.log("Sleeping");
};

function Lion() {}
Lion.prototype = Object.create(Animal.prototype);
Lion.prototype.roar = () => {
  console.log("Roar");
};

function Wolf() {}
Wolf.prototype = Object.create(Animal.prototype);
Wolf.prototype.howl = () => {
  console.log("Howl");
};

const simba = new Lion();
const mufasa = new Lion();

const ghost = new Wolf();
const summer = new Wolf();

simba.eat();
mufasa.run();
mufasa.roar();

ghost.howl();
summer.run();
