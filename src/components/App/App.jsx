import TaskList from "../TaskList/TaskList";
import initialTasks from "../../tasks.json";
import Form from "../Form/Form";
import Filter from "../Filter/Filter";
import css from "./App.module.css";
import { useState } from "react";
function App() {
  // состояние тасков
  const [tasks, setTasks] = useState(initialTasks);
  // создаем состояние для фильтра
  const [filter, setFilter] = useState("");

  // функция изменения состояния тасков
  const addTask = (newTask) => {
    setTasks((prevTasks) => {
      return [...prevTasks, newTask];
    });
  };

  // создаю функцию ужадения тасков
  const deleteTask = (taskId) => {
    // console.log(taskId);
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== taskId);
    });
  };
  const visibleTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      {/* передаем функцию изменения состояний там, где ее нужно вызвать */}
      <Form onAdd={addTask} />
      <Filter value={filter} onFilter={setFilter} />
      <TaskList tasks={visibleTasks} onDelete={deleteTask} />
    </>
  );
}

export default App;
