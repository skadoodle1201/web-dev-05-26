console.log("A");
console.log("B");

// const xyz = () => {
//   console.log("xyz");
// };
// const abc = () => {
//   xyz();
//   console.log("abc");
// };

// abc();

// for (let i = 0; i < 10000000000; i++) {} //Blocking In nature

setTimeout(() => {
  console.log("TIMEOUT");
});

new Promise((resolve, reject) => {
  resolve("PROMISE");
}).then((res) => {
  console.log(res);
});

console.log("C");
console.log("D");
