import { useState } from "react";
import "./styles.css";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const addTask = () => {
    if (title.trim() === "") {
      setError("Task title is required");
      return;
    }
    setTasks([...tasks, { title, completed: false }]);
    setTitle("");
    setError("");
  };

  const completeTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = true;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>Task Manager</h1>

      <div className="form">
        <input
          placeholder="Enter task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      {error && <p className="error">{error}</p>}

      {tasks.length === 0 ? (
        <p className="empty">No tasks yet</p>
      ) : (
        tasks.map((task, index) => (
          <div key={index} className="task">
            <span className={task.completed ? "done" : ""}>
              {task.title}
            </span>
            <div>
              {!task.completed && (
                <button onClick={() => completeTask(index)}>✔</button>
              )}
              <button onClick={() => deleteTask(index)}>🗑</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
    }
