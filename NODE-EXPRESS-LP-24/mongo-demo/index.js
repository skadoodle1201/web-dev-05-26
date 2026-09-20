const express = require("express");

const app = express();

const mongoose = require("mongoose");

app.use(express.json());

const connectWithMongo = async () => {
  await mongoose.connect(
    "mongodb://dbUser:2A4sm9ekznxEGe9C@cluster0-shard-00-00.qsvctw.mongodb.net:27017,cluster0-shard-00-01.qsvctw.mongodb.net:27017,cluster0-shard-00-02.qsvctw.mongodb.net:27017/?ssl=true&replicaSet=atlas-11wsg9-shard-0&authSource=admin&appName=Cluster0",
  );
  console.log("MongoDB Connected");
};
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  task: String,
  status: Boolean,
});

const TodoModel = mongoose.model("todo_list", TodoSchema);

app.post("/todo", async (req, res) => {
  const { task, status = false } = req.body;
  const todo = new TodoModel({
    task: task,
    status: status,
  });
  await todo.save();

  res.json({
    message: "Success",
    data: todo,
  });
});

app.patch("/todo", async (req, res) => {
  const { id, task, status } = req.body;

  await TodoModel.findByIdAndUpdate(id, {
    task,
    status,
  });

  res.json({
    message: "Success",
  });
});

app.get("/todo", async (req, res) => {
  const id = req.query.id;
  const searchQuery = {};

  if (id) {
    searchQuery._id = id;
  }
  const todoList = await TodoModel.find(searchQuery);

  res.json({
    message: "Success",
    data: todoList,
  });
});

app.get("/health", (_req, res) => {
  const status = mongoose.connection.readyState;

  // Map the numeric status to readable text
  const statusStates = {
    0: "Disconnected",
    1: "Connected",
    2: "Connecting",
    3: "Disconnecting",
  };

  res.json({
    health: "OK",
    database_status: statusStates[status],
  });
});

(async () => {
  await connectWithMongo();
})();

app.listen(3000, () => {
  console.log("Application Listening on http://localhost:3000");
});
