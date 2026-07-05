/**
 * 1. Boil Water
 * 2. Add Tea Leaves
 * 3. Add Sugar
 * 4. Serve
 */

async function boilWater() {
  console.log("Starting To Boil...");
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Water is Boiling");
      res();
    }, 5000);
  });
}

async function addTeaLeaves() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Added Tea Leaves");
      res();
    }, 1000);
  });
}

async function addSugar() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Added sugar");
      res();
    }, 1000);
  });
}

async function server() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Tea is ready !!");
      res();
    }, 1000);
  });
}

(async () => {
  await boilWater();
  await addTeaLeaves();
  await addSugar();
  await server();
})();
