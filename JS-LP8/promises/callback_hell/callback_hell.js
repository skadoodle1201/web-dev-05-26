/**
 * 1. Boil Water
 * 2. Add Tea Leaves
 * 3. Add Sugar
 * 4. Serve
 */

function boilWater(cb) {
  console.log("Starting To Boil...");
  setTimeout(() => {
    console.log("Water is Boiling");
    cb();
  }, 5000);
}

function addTeaLeaves(cb) {
  setTimeout(() => {
    console.log("Added Tea Leaves");
    cb();
  }, 1000);
}

function addSugar(cb) {
  setTimeout(() => {
    console.log("Added sugar");
    cb();
  }, 1000);
}

function server() {
  setTimeout(() => {
    console.log("Tea is ready!!");
  }, 2000);
}

boilWater(() => {
  addTeaLeaves(() => {
    addSugar(() => {
      server();
    });
  });
});
