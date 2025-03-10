import React from "react";
import "./TaskCard.css";
import Tag from "./Tag";

const TaskCard = ({ title, tags, handleDelete, index }) => {
  return (
    <article>
      <p className="task-text">{title}</p>
      <div className="task-card-bottom-line">
        <div className="task-card-tags">
          {tags.map((tag, index) => (
            <Tag key={index} tagName={tag} selected={true} />
          ))}
        </div>
        <div className="task-delete" onClick={() => handleDelete(index)}>
          delete icon
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
