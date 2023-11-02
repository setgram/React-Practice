import React from "react";
import "./TaskCard.css";
import Tag from "./Tag";

export default function TaskCard() {
  return (
    <article className="task_card">
      <p className="task_text">Sample text</p>
      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          <Tag name="HTML" />
          <Tag name="CSS" />
        </div>
        <div c