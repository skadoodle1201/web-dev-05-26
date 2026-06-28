let obj = {
  name: "tanish",
  age: 26,
  address: {
    lane: "rajpur road",
    area: "civil line",
  },
};

console.log(obj.age, obj["name"], obj.address.lane);

obj.gender = "Male";

console.log(obj.gender);

obj.age = 27;
console.log(obj);

console.log(obj.address?.house?.no); //Optional Chaining otherwise will throw error

//FOR OF LOOP DOES NOT WORK ON OBJECTS
for (const key in obj) {
  console.log(obj[key]);
}
