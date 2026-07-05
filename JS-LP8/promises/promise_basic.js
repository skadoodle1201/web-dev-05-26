console.log("Start");

// const fetchData = () => {
//   for (let i = 0; i < 100000000000; i++) {}
//   return "Data Fetched";
// };

// const data = fetchData();
// console.log(data);

const fetchData = (a) => {
  const getData = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a > 10) resolve("Data Fetched");
      else reject("Failed");
    }, 5000);
  });

  return getData;
};
fetchData(1)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("END");
