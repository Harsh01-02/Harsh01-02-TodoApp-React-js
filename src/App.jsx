import React, { useState } from "react";

const App = () => {
  const [task, setTask] = useState(""); // current input value
  const [todoList, setTodoList] = useState([]); // all tasks

  // Add task function
  const addTask = () => {
    if (task.trim() === "") return; // avoid empty input
    const newTask = { text: task, completed: false }; // store task as object
    setTodoList([...todoList, newTask]); // add to list
    setTask(""); // clear input
  };

  // Delete task function
  const deleteTask = (index) => {
    const updatedList = todoList.filter((_, i) => i !== index);
    setTodoList(updatedList);
  };

  // Toggle complete/incomplete
  const toggleTask = (index) => {
    const updatedList = todoList.map((item, i) =>
      i === index ? { ...item, completed: !item.completed } : item
    );
    setTodoList(updatedList);
  };

  return (
    <div>
      <h1>Todo List</h1>

      {/* Input + Button */}
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add</button>

      {/* Display tasks */}
      <h3>Tasks ({todoList.length})</h3>
      <ul>
        {todoList.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(index)}
            />
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.text}
            </span>{" "}
            <button onClick={() => deleteTask(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
