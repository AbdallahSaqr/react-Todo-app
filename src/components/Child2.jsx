import { TaskList } from "./TaskList";

const Child2 = ({ tasks, onDelete, onToggle }) => {
  return (
    <div className="w-50 mx-auto">
      <div className="bg-secondary text-white p-4 rounded shadow">
        <h4 className="text-center mb-3">Let's Get Some Work Done!</h4>
        <ul className="list-group gap-2">
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <TaskList
                key={task.id}
                data={task}
                onDelete={onDelete}
                onToggle={onToggle}
              />
            ))
          ) : (
            <li className="list-group-item text-center text-muted">
              No tasks available.
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Child2;
