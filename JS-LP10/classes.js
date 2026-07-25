class Animal {
  constructor(type) {
    if (!type) {
      throw new Error("Invalid Animal");
    }
    this.type = type;
  }
  run() {
    console.log("Running");
  }
  eat() {
    console.log("Eat");
  }
}

class Lion extends Animal {
  constructor(type, name) {
    super(type);
    if (!name) {
      throw new Error("Invalid Lion");
    }
    this.name = name;
  }
  roar() {
    console.log("Roar");
  }
}

const simba = new Lion("Carnivor", "Simba");
console.log(simba);
simba.eat();
simba.roar();
