const express = require("express");
const app = express(); //Creates a instance of a express application.

//This is Route Creation for "/"
//Request and Response are params that we get when this route is called.
app.get("/", (request, response) => {
  console.log("HELLO FROM /", request); // this is request object

  console.log("RESPONSE", response); //This is response object
  response.send("hello from /");
});

//This is server Creation at port 3000
//This creates a long running process.
app.listen(3000, () => {
  console.log("Server listening on port 3000, http://localhost:3000/");
});
