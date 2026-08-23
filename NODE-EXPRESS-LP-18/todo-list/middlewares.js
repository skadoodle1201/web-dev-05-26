const { validateTask, validateStatus, validateId } = require("./validator");

const updateTodoMiddleware = (request, response, next) => {
  const task = request.body.task;
  const status = request.body.status;
  const id = request.params.id;
  if (!validateTask(task, false)) {
    return response.json({
      message: "Invalid Todo input!!",
    });
  }

  if (!validateStatus(status, false)) {
    return response.json({
      message: "Invalid Status input!!",
    });
  }

  if (!validateId(id)) {
    return response.json({
      message: "Invalid Id Input",
    });
  }
  next();
};

const overwriteTodoMiddleware = (request, response, next) => {
  const task = request.body.task;
  const status = request.body.status;
  const id = request.params.id;
  if (!validateTask(task)) {
    return res.json({
      message: "Invalid Todo input!!",
    });
  }

  if (!validateStatus(status)) {
    return res.json({
      message: "Invalid Status input!!",
    });
  }

  if (!validateId(id)) {
    return res.json({
      message: "Invalid Id Input",
    });
  }
  next(); // This is manadtory to move to next middleware.
};

const createTodoMiddleware = (request, response, next) => {
  const todo = request.body.todo;
  if (!validateTask(todo)) {
    return res.json({
      message: "Invalid Todo input!!",
    });
  }
  next();
};
module.exports = {
  updateTodoMiddleware,
  overwriteTodoMiddleware,
  createTodoMiddleware,
};
