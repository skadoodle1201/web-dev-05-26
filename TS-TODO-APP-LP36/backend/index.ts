import express from "express";
import type { ITask, TodoMapType } from "./interfaces/task.js";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "*",
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const todoMap: TodoMapType = {};

app.post("/todo", (req: express.Request, res: express.Response) => {
  const { task, status = false }: Omit<ITask, "id"> = req.body;

  const id = Math.floor(Math.random() * 1000);
  todoMap[id] = {
    task,
    status,
    id,
  };
  return res.json({
    message: "Success",
  });
});

app.get("/todo", (req: express.Request, res: express.Response) => {
  const todoList: Array<ITask> = Object.values(todoMap);
  return res.json({
    data: todoList,
  });
});

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Ok");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
