import Child1 from "./Child1";
import Child2 from "./Child2";
import { useState, useEffect } from "react";
import { tasksData } from "../utils/data";

const Parent = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(tasksData);
  }, []);

  const onAddTask = (title) => {
    if (!title.trim()) return;
    const newTask = {
      id: Date.now(),
      title,
      description: "New task",
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const onDeleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const onToggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
<div className="d-flex flex-column gap-4 justify-content-center align-items-center bg-dark min-vh-100 py-5">
      <Child1 onAddTask={onAddTask} />
      <Child2 tasks={tasks} onDelete={onDeleteTask} onToggle={onToggleComplete} />
    </div>
  );
};

export default Parent;
