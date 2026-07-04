const person = {
  name: "Tanish",
  greet: function () {
    console.log("Hello");
  },
  greetArrow: () => {
    console.log("hello from arrow");
  },
};

person.getAddress = () => {
  console.log("Address");
};

person.greet();
person.greetArrow();
person.getAddress();
