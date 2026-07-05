/**
 * 1. Boil Water
 * 2. Add Tea Leaves
 * 3. Add Sugar
 * 4. Serve
 */

function boilWater() {
  console.log("Starting To Boil...");
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Water is Boiling");
      res();
    }, 5000);
  });
}

function addTeaLeaves() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Added Tea Leaves");
      res();
    }, 1000);
  });
}

function addSugar() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Added sugar");
      res();
    }, 1000);
  });
}

function server() {
  setTimeout(() => {
    console.log("Tea is ready !!");
  }, 1000);
}

boilWater().then(addTeaLeaves).then(addSugar).then(server);
