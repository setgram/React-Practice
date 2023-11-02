import React from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import { GiBullseye } from "react-icons/gi";
import { AiFillStar } from "react-icons/ai";
import { BsFillHandThumbsUpFill } from "react-icons/bs";

export default function App() {
  return (
    <div className="app">
      <TaskForm />
      <header className="app_header"></header>
      <main className="app_main">
        <TaskColumn name="Todo" icon={<GiBullseye />} />
        <TaskColumn name="On-going" icon={<AiFillStar />} />
        <TaskColumn name="Accomplish" icon={<BsFillHandThumbsUpFill />} />
      </main>
    </div>
  );
}
