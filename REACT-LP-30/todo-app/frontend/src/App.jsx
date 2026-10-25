import { useEffect, useState } from "react";
import "./App.css";

const postTodo = async (todoTask) => {
  const data = {
    task: todoTask,
  };
  const response = await fetch("http://localhost:3000/todo", {
    method: "POST", // 1. Specify the HTTP method
    headers: {
      "Content-Type": "application/json", // 2. Tell the server you are sending JSON
    },
    body: JSON.stringify(data), // 3. Convert your JavaScript object into a JSON string
  });
  const responseData = await response.json();
  return responseData;
};

function App() {
  const [todoList, setTodoList] = useState([]);
  const [inputTask, setInputTask] = useState("");
  useEffect(() => {
    const fetchTodoList = async () => {
      const response = await fetch("http://localhost:3000/todo");
      const reponseData = await response.json();
      console.log(reponseData);
      setTodoList(reponseData.data);
    };
    fetchTodoList();
  }, []);

  const handleTaskAddition = async (event) => {
    event.preventDefault();
    console.log(inputTask);
    if (inputTask) {
      const response = await postTodo(inputTask);
      setTodoList((prev) => {
        return [...prev, response.data];
      });
      setInputTask("");
    }
  };

  return (
    <>
      <div>
        {todoList.map((todo) => {
          return (
            <p>
              {todo.task} - status : {`${todo.status}`}
            </p>
          );
        })}
      </div>

      <div>
        <form onSubmit={handleTaskAddition}>
          <input
            type="text"
            placeholder="Task"
            onChange={(event) => {
              setInputTask(event.target.value);
            }}
            value={inputTask}
          />
          <button type="submit">Add Task</button>
        </form>
      </div>
    </>
  );
}

export default App;
