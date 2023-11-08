import React from "react";
import "./TaskCard.css";
import Tag from "./Tag";
import { AiFillDelete } from "react-icons/ai";

export default function TaskCard({ name, tags, handleDelete, index }) {
  return (
    <article className="task_card">
      <p className="task_text">{name}</p>
      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          {tags.map((tag, index) => (
            <Tag key={index} tagName={tag} selected={true} />
          ))}
        </div>
        <div className="task_delete">
          {" "}
          <AiFillDelete
            className="task_delete"
            onClick={() => handleDelete(index)}
          />
        </div>
      </div>
    </article>
  );
}
