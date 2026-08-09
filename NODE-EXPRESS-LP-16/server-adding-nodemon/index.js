const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hi from /, Returned by nodemon");
});

app.listen(3000, () => {
  console.log("Server started, http://localhost:3000/");
});
