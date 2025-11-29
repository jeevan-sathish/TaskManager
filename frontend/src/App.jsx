import React, { useState, useEffect } from 'react';

const App = () => {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  function handleTask(e) {
    setTask(e.target.value);
  }

  // 👉 Add task
  async function handleAddTask(e) {
    e.preventDefault();

    if (!task.trim()) return;

    try {
      const response = await fetch("http://localhost:3000/task", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ task }) 
      });

      const data = await response.json();
      console.log("Task added:", data);

      setTask("");
      fetchTasks();   // refresh list
    } catch (err) {
      console.log("Error:", err);
    }
  }

  // 👉 Fetch tasks from backend
  async function fetchTasks() {
    try {
      const response = await fetch("http://localhost:3000/task");
      const data = await response.json();
      setTodoList(data);
    } catch (err) {
      console.log("Error fetching tasks:", err);
    }
  }
  async function deleteTask(id) {
  try {
    await fetch(`http://localhost:3000/task/${id}`, {
      method: "DELETE"
    });

    fetchTasks(); // Refresh task list
  } catch (err) {
    console.log("Error deleting task:", err);
  }
}


  // 👉 Load tasks on page load
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <form onSubmit={handleAddTask}>
        <input 
          type="text" 
          placeholder="Enter your task" 
          value={task}
          onChange={handleTask} 
        />
        <button type="submit">Add</button>
      </form>

      {/* List tasks */}
      <ul>
  {todoList.map((item) => (
    <li key={item.id}>
      {item.task}

      <button onClick={() => deleteTask(item.id)}>
        delete
      </button>
    </li>
  ))}
</ul>

    </div>
  );
};

export default App;
