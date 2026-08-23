// Optimized Way For TODO
const express = require("express");
const app = express();
const TaskManager = require("./TaskManager.js");
const { validateId, validateStatus, validateTask } = require("./validator.js");
const {
  updateTodoMiddleware,
  overwriteTodoMiddleware,
  createTodoMiddleware,
} = require("./middlewares.js");
const TodoList = new TaskManager();

app.use(express.json()); // This is a middleware.

//API to get todo list
app.get("/todo", (req, res) => {
  res.json({
    message: "Success",
    data: TodoList.get(),
  });
});

app.post("/todo", createTodoMiddleware, (req, res) => {
  const todo = req.body.todo;

  TodoList.add(todo);
  res.json({
    message: "Success",
  });
});

app.put("/todo/:id", overwriteTodoMiddleware, (req, res) => {
  const task = req.body.task;
  const status = req.body.status;
  const id = req.params.id;
  console.log(id);

  const castedId = Number(id);

  try {
    // TodoList.overwrite(Number(id), task, status); this is also valid
    TodoList.overwrite(castedId, task, status);
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
  res.json({
    message: "Update Successful",
  });
});

app.patch("/todo/:id", updateTodoMiddleware, (req, res) => {
  const task = req.body.task;
  const status = req.body.status;
  const id = req.params.id;

  try {
    TodoList.update(id, task, status);
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }

  res.json({
    message: "Update Successful",
  });
});

app.delete("/todo/:id", (req, res) => {
  const id = req.params.id;
  if (!validateId(id)) {
    return res.json({
      message: "Invalid Id input!!",
    });
  }
  try {
    TodoList.delete(id);
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
  res.json({
    message: "Success",
  });
});

app.listen(3000, () => {
  console.log("TODO Application running on http://localhost:3000/");
});
