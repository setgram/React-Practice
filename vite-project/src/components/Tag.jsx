import React from "react";
import "./Tag.css";

export default function Tag(props) {
  return <button className="tag">{props.name}</button>;
}
