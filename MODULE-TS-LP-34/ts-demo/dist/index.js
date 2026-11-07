import { add, subtract } from "./math.js";
console.log(add(10, 40));
console.log(subtract(40, 10));
let username;
let age;
let active = true;
let scores = [90, 88];
// Inferred from the value:
let city = "Delhi"; // string
// Type-checker catches this:
// age = "twenty"; //This will not work
