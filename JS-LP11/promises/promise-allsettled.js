const P1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("p1");
  }, 1000);
});

const P2 = new Promise((res, rej) => {
  setTimeout(() => {
    res("p2");
  }, 2000);
});

const P3 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("p3");
  }, 2000);
});

const execute = async () => {
  try {
    console.time("start");
    const resposne = await Promise.allSettled([P1, P2, P3]);
    resposne.forEach((ele) => {
      if (ele.status === "fulfilled") {
        console.log("Result: ", ele.value);
      } else {
        console.log("Error", ele.reason);
      }
    });
  } catch (error) {
    console.log("error", error);
  } finally {
    console.timeEnd("start");
  }
};

execute();

// console.time("start");
// Promise.all([P1, P2, P3]).then((result) => {
//   console.log(result);
//   console.timeEnd("start");
// });
