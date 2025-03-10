import React, { useState } from "react";
import Tag from "./Tag";
import "./TaskForm.css";

const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  // TODO: should be only one difficulty tag for every task, now it's just array with several tags
  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filterTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
    // console.log(tag);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // console.log(name, value);

    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
    setTasks((prev) => {
      return [...prev, taskData];
    });
    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    });
  };

  // const [task, setTask] = useState("");
  // const [status, setStatus] = useState("todo");

  // const handleTaskChange = (e) => {
  //   setTask(e.target.value);
  // };

  // const handleStatusChange = (e) => {
  //   setStatus(e.target.value);
  // };

  // console.log(task, status);

  return (
    <header className="app-header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={taskData.task}
          className="task-input"
          placeholder="Enter your task"
          onChange={handleChange}
        />

        <div className="task-form-bottom-line">
          <div>
            <Tag
              tagName="Very Easy"
              selectTag={selectTag}
              selected={checkTag("Very Easy")}
            />
            <Tag
              tagName="Easy"
              selectTag={selectTag}
              selected={checkTag("Easy")}
            />
            <Tag
              tagName="Medium"
              selectTag={selectTag}
              selected={checkTag("Medium")}
            />
            <Tag
              tagName="Hard"
              selectTag={selectTag}
              selected={checkTag("Hard")}
            />
            <Tag
              tagName="Very Hard"
              selectTag={selectTag}
              selected={checkTag("Very Hard")}
            />
          </div>

          <div>
            <select
              name="status"
              value={taskData.status}
              className="task-status"
              onChange={handleChange}
            >
              <option value="todo">To Do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button type="submit" className="task-submit">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
