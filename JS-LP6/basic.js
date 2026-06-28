let a;
var b;
const c = 10;

console.log(c);

console.log(a, "  <- this is a");
a = 20;

console.log(b, "  <- this is b");

console.log(a, "  <- this is a after intilization");

let thisString = "hello";

console.log(thisString, "<- This is a string");

// c = 30; will throw a typeerror

console.log(thisString + "new string");

// ` this is backtick
// ~ this is called tild

let name = "rahul";

console.log(`${thisString} ${name} from node string template ${c}`);

// console.log(
//   thisString + " " + name + " " + "from node string template" + " " + c,
// );
