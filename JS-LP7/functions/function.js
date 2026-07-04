function greet(name) {
  console.log(`Inside function, Hello ${name}`);
  return "i am returned";
}

// const val = greet();
// console.log(val);
console.log(greet("tanish"));

function greetAdvance(name, age = "N/A", address = "N/A") {
  console.log(`Inside function, Hello ${name} ${age} ${address}`);
}
greetAdvance("tanish");

const abc = function () {
  console.log("This is ABC");
};

abc();

const thisArrowFunction = () => {
  console.log("This is arrow function");
};

thisArrowFunction();
