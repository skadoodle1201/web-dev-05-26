const TaskManager = require("./TaskManager");
const { validateId } = require("./validator");

const TodoList = new TaskManager();

const getTodoController = (req, res) => {
  res.json({
    message: "Success",
    data: TodoList.get(),
  });
};

const createTodoController = (req, res) => {
  const todo = req.body.todo;

  TodoList.add(todo);
  res.json({
    message: "Success",
  });
};

const overwriteController = (req, res) => {
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
};

const updateTodoController = (req, res) => {
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
};

const deleteTodoController = (req, res) => {
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
};

module.exports = {
  getTodoController,
  createTodoController,
  overwriteController,
  updateTodoController,
  deleteTodoController,
};
