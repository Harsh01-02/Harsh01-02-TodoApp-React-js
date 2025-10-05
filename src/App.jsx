import React, { useState } from "react";

const App = () => {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  return (
    <div>
      <h1>Todo List</h1>
      <p>Task: {task}</p>
      <p>Number of tasks: {todoList.length}</p>
    </div>
  );
};

export default App;
