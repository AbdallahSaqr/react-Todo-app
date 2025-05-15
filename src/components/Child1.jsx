import { useState } from "react";

const Child1 = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleAddClick = () => {
    onAddTask(newTask);
    setNewTask(""); 
  };

  return (
    <div className="w-50 mx-auto">
      <div className="bg-secondary text-white p-4 rounded shadow">
        <h1 className="text-end mb-3">To-Do App!</h1>
        <p className="text-end">Add New To-Do</p>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter New Task"
            value={newTask} 
            onChange={(e) => setNewTask(e.target.value)} 
          />
          <button className="btn btn-light" onClick={handleAddClick}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Child1;
