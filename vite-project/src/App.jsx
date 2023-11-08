import React, { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import { GiBullseye } from "react-icons/gi";
import { AiFillStar } from "react-icons/ai";
import { BsFillHandThumbsUpFill } from "react-icons/bs";

const oldTasks = localStorage.getItem("tasks");

export default function App() {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };
  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <header className="app_header"></header>
      <main className="app_main">
        <TaskColumn
          name="Todo"
          icon={<GiBullseye />}
          tasks={tasks}
          status="todo"
          handleDelete={handleDelete}
        />
        <TaskColumn
          name="On-going"
          icon={<AiFillStar />}
          tasks={tasks}
          status="doing"
          handleDelete={handleDelete}
        />
        <TaskColumn
          name="Accomplish"
          icon={<BsFillHandThumbsUpFill />}
          tasks={tasks}
          status="done"
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
}
