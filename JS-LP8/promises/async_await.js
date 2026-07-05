const boilWater = async () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("water boiled");
      res("water boiled");
    }, 5000);
  });
};

// async function abc() {}

(async () => {
  try {
    console.log("A");
    const res = await boilWater();
    console.log(res);
    console.log("B");
  } catch (err) {
    console.log(err);
  }
})();
