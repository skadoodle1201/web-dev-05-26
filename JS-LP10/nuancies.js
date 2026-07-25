// const a = {
//   name: "Tanish",
// };

// a.age = 10;
// a.name = "Rahul";

// console.log(a);

// const b = Object.freeze({
//   name: "Tanish",
// });

// b.age = 40;
// b.name = "Rahul";

// console.log(b);

const person = {
  name: "Ramesh",
  address: {
    city: "MP",
  },
};

// const person2 = { ...person }; //Creates a shallow copy
const person2 = JSON.parse(JSON.stringify(person)); //Creates a deep copy

person2.age = 10;
person2.address.state = "Rajasthan";
console.log(person);
console.log(person2);

const arr = [1, 2, 4, 5, 3];

// const atZero = arr[0];
const [atZero] = arr;

// const city = person.address.city;
// const name = person.name;
const {
  name,
  address: { city },
} = person;

console.log(city, name);
