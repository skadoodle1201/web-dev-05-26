const express = require("express");
const { connectToMongoDB } = require("./dbConnection");
const Todo = require("./todo");
const app = express();
const cors = require("cors");

app.use(express.json());

app.use(cors());

(async () => {
  await connectToMongoDB();
})();

app.get("/todo", async (req, res) => {
  const todos = await Todo.find({});
  res.json({
    data: todos,
  });
});

app.post("/todo", async (req, res) => {
  const { task } = req.body;

  const newTask = await Todo.create({
    task,
  });

  res.json({
    message: "success",
    data: newTask,
  });
});

app.get("/", (req, res) => {
  res.json({
    status: "ok",
  });
});

app.listen(3000, () => {
  console.log("application listening on http://localhost:3000");
});
