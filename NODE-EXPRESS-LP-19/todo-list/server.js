// Optimized Way For TODO
const express = require("express");
const app = express();
const TaskManager = require("./TaskManager.js");
const { validateId, validateStatus, validateTask } = require("./validator.js");
const {
  updateTodoMiddleware,
  overwriteTodoMiddleware,
  createTodoMiddleware,
  logRequestMiddleware,
} = require("./middlewares.js");
const {
  getTodoController,
  createTodoController,
  overwriteController,
  updateTodoController,
  deleteTodoController,
} = require("./controllers.js");
const TodoList = new TaskManager();

app.use(express.json()); // This is a middleware.

app.use(logRequestMiddleware); //This a global middleware

//API to get todo list
app.get("/todo", getTodoController);

app.post("/todo", createTodoMiddleware, createTodoController);

app.put("/todo/:id", overwriteTodoMiddleware, overwriteController);

app.patch("/todo/:id", updateTodoMiddleware, updateTodoController);

app.delete("/todo/:id", deleteTodoController);

app.listen(3000, () => {
  console.log("TODO Application running on http://localhost:3000/");
});
