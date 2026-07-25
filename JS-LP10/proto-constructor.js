function Animal(name, type) {
  console.log(name, type);
  if (!name || !type) {
    throw new Error("Invalid Animal!!!!!");
  }
  this.name = name;
  this.type = type;
}

Animal.prototype.run = () => {
  console.log("Running");
};

Animal.prototype.eat = () => {
  console.log("Eating");
};

Animal.prototype.sleep = () => {
  console.log("Sleeping");
};

function Lion(name, type, x) {
  Animal.call(this, name, type);
  if (!x) {
    throw new Error("Invalid Lion !!!");
  }
  this.x = x;
}
Lion.prototype = Object.create(Animal.prototype);
Lion.prototype.roar = () => {
  console.log("Roar");
};

Lion.prototype.consturctor = Lion; //Mandatory line

const simba = new Lion("name", "type");

console.log(simba);
