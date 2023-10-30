import React from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";

export default function App() {
  return (
    <div className="app">
      <TaskForm />
      <header className="app_header"></header>
      <main className="app_main">
        <section className="task_column">Section one</section>
        <section className="task_column">Section two</section>
        <section className="task_column">Section three</section>
      </main>
    </div>
  );
}
