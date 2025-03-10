import React from "react";
import "./Tag.css";

const Tag = ({ tagName, selectTag, selected }) => {
  const tagStyle = {
    "Very Easy": { backgroundColor: "#de07b3" },
    Easy: { backgroundColor: "#004f01" },
    Medium: { backgroundColor: "#0308a1" },
    Hard: { backgroundColor: "#a1030b" },
    "Very Hard": { backgroundColor: "#35004f" },
    default: { backgroundColor: "#fda821" },
  };

  return (
    <button
      type="button"
      className="tag"
      style={selected ? tagStyle[tagName] : tagStyle.default}
      onClick={() => selectTag(tagName)}
    >
      {tagName}
    </button>
  );
};

export default Tag;
