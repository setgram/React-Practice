import React from "react";
import "./TaskForm.css";
import Tag from "./Tag";

export default function TaskForm() {
  return (
    <header className="app_header">
      <form>
        <input type="text" className="task_input" placeholder="Enter Task" />
        <div className="task_form_bottom_line">
          <div>
            <Tag />
            <Tag />
            <Tag />
            <Tag />
          </div>
          <div>
            <select name="" id="" className="task_status">
              <option value="todo">Todo</option>
              <option value="doing">Ongoing</option>
              <option value="done">Accomplished</option>
            </select>
            <button type="submit" className="task_submit">
              + Add
            </button>
          </div>
        </div>
      </form>
    </header>
  );
}
