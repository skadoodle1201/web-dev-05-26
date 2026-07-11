function Person(name) {
  this.name = name;
  this.greet = () => {
    console.log("Hello", this.name);
  };
  this.setName = (newName) => {
    this.name = newName;
  };
}

//New keyword create a empty object {} and binds it to the funciton
const person = new Person("rahul");
person.greet();

person.setName("Ramesh");
person.greet();
