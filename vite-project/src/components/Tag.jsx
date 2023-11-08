import React from "react";
import "./Tag.css";

export default function Tag({ tagName, selectTag, selected }) {
  const tagStyle = {
    HTML: { backgroundColor: "red" },
    CSS: { backgroundColor: "blue" },
    JAVASCRIPT: { backgroundColor: "green" },
    REACT: { backgroundColor: "yellow" },
    default: { backgroundColor: "grey" },
  };
  return (
    <button
      type="button"
      className="tag"
      onClick={() => selectTag(tagName)}
      style={selected ? tagStyle[tagName] : tagStyle.default}
    >
      {tagName}
    </button>
  );
}
