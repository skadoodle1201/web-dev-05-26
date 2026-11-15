import { useEffect, useState } from "react";

interface ITask {
  id: number;
  task: string;
  status: boolean;
}

const fetchTodoList = async (): Promise<ITask[]> => {
  const response = await fetch("http://localhost:3000/todo");
  const responseData = await response.json();
  return responseData.data;
};
function App() {
  const [todoList, setTodoList] = useState<ITask[] | never>([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    const setData = async () => {
      const data = await fetchTodoList();
      setTodoList(data);
    };
    setData();
  }, []);

  const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    await fetch("http://localhost:3000/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        task: task,
        status: false,
      }),
    });
    const listData = await fetchTodoList();
    setTodoList(listData);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <button>Add Task</button>
      </form>

      <div>
        {todoList.map((todo) => {
          return (
            <div>
              <p>{todo.task}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
