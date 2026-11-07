import { add, CONFIG_VALUE, substract } from "./math.js";
import abc from "./math2.js";

import { divide, percentage } from "./math3.js";

import { thisIsFromCJS } from "./test.cjs";

console.log(add(5, 7));
console.log(substract(10, 8));
console.log(CONFIG_VALUE);
console.log(abc(10, 8));

console.log(divide(10, 2));
console.log(percentage(100, 10));

thisIsFromCJS();
