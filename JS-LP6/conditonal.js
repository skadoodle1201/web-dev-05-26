let a = 10;

if (a < 10) {
  console.log("smaller than 10");
} else if (a == 10 || a == 100) {
  console.log("is 10 or 100");
} else {
  console.log("greater than 10");
}

console.log(10 + 10); //20

console.log(a == 10); //true

console.log(a == "10"); //true -> because == checks the value not the type
console.log(a === "10"); //false -> because === checks the value and type

console.log(a + "hey"); //10hey

console.log(a + 10 + "hey"); //20hey

//Ternanry Opertors
console.log(a == 10 ? true : false);
true && true; //logical and condition
false || true; //logical or condition
