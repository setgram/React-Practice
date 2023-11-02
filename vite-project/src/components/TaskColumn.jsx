import React from "react";
//import { GiBullseye } from "react-icons/gi";
import "./TaskColumn.css";

export default function TaskColumn(props) {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <span className="task_column_icon">{props.icon}</span>
        {props.name}
      </h2>
    </section>
  );
}
