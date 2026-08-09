const express = require("express");
const app = express();

const TodoList = [
  {
    task: "Swim",
    status: false,
  },
];

//API to get todo list
app.get("/todo", (req, res) => {
  res.json({
    message: "Success",
    data: TodoList,
  });
});

app.listen(3000, () => {
  console.log("TODO Application running on http://localhost:3000/");
});
