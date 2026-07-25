function Animal(type) {
  this.type = type;
  this.dangerous2 = function () {
    // this is creates extra memory for each object
    if (this.type === "carnivous") {
      console.log("Very Dangerous");
    } else {
      console.log("Safe");
    }
  };
}

Animal.prototype.dangerous = function () {
  if (this.type === "carnivous") {
    console.log("Very Dangerous");
  } else {
    console.log("Safe");
  }
};

const cat = new Animal("omnivorous");
const lion = new Animal("carnivous");
const dog = new Animal("omnivorous");

cat.dangerous();
lion.dangerous();

console.log(cat.__proto__);
