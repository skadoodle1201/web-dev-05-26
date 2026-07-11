// let i = 0;
// function abc() {
//   i = 10;
//   return function xyc() {
//     console.log(i);
//   };
// }

// const xyc = abc();
// console.log(i) //10
// i = 40;

// console.log(i); //40
// xyc(); //40

const counter = () => {
  let count = 10;

  return function increment() {
    count++;
    return count;
  };
};

const inc = counter();
console.log(inc()); //11
console.log(inc()); //12
console.log(inc()); //13
console.log(inc()); //14
console.log(inc()); //15

const inc2 = counter();
console.log(inc2()); //11
console.log(inc2()); //12

console.log("INC 1 ", inc(), "-------", "INC 2", inc2());
