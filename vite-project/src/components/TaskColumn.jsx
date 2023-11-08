import React from "react";
import "./TaskColumn.css";
import TaskCard from "./TaskCard";

export default function TaskColumn({
  icon,
  name,
  tasks,
  status,
  handleDelete,
}) {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <span className="task_column_icon">{icon}</span>
        {name}
      </h2>
      {tasks.map(
        (task, index) =>
          task.status === status && (
            <TaskCard
              key={index}
              name={task.task}
              tags={task.tags}
              handleDelete={handleDelete}
              index={index}
            />
          )
      )}
    </section>
  );
}
