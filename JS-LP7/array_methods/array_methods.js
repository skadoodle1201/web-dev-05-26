const arr = [10, 20, 30, 40];

//forEach
arr.forEach((element, index) => {
  console.log(`${element} at ${index}`);
});

// //map
// //Always returns
const addedSum = arr.map((element, index) => {
  return element + 20;
});

console.log(addedSum);

//filter
const filterSum = arr.filter((element, index) => {
  if (element < 30) {
    return element;
  }
});

// const filterSum = arr.filter((el) => el < 30);

console.log(filterSum);

//reduce
const sum = arr.reduce((accumilator, element) => {
  return accumilator + element;
}, 0);
console.log(sum);

// //includes
console.log(arr.includes(1));
