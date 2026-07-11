const person = {
  name: "rahul",
  greet: function () {
    console.log(this.name);
  },
};

person.greet();

// function abc() {
//   console.log(this);
// }
// // abc();

// const arrow = () => {
//   console.log(this);
// };

const outer = {
  a: ["apple", "banana", "pineapple"],
  arrow: () => {
    console.log(this);
  },
  inner: function () {
    this.a.forEach(() => {
      console.log(this);
    });
  },
};

outer.arrow(); //empty object as arrow functions does not have its own this and picks from parent
outer.inner();
