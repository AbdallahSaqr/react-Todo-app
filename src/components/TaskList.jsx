export const TaskList = ({ data: task, onDelete, onToggle }) => {
  return (
    <li className="list-group-item bg-light p-0 rounded overflow-hidden m-0">
      <div className="d-flex align-items-center">
        <div className="form-check d-flex flex-column align-items-start px-3 py-2 flex-grow-1 w-100 ps-5">
          <div className="d-flex align-items-center">
            <input
              className="form-check-input me-2"
              type="checkbox"
              id={`checkbox-${task.id}`}
              checked={task.completed}
              onChange={() => onToggle(task.id)}
            />
            <label
              className={`form-check-label mb-0 fw-semibold ${
                task.completed ? "text-decoration-line-through text-muted" : ""
              }`}
              htmlFor={`checkbox-${task.id}`}
            >
              {task.title}
            </label>
          </div>
          <p className="mb-0 mt-1 text-muted small">{task.description}</p>
        </div>
        <button
          className="btn btn-secondary rounded me-md-2"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};
