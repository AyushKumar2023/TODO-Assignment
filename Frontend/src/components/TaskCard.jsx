export default function TaskCard({ task, onDelete, onToggle, onUpdate }) {
  return (
    <div className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-medium text-gray-800">
            {task.title}
          </h3>
          <p className="text-gray-600 text-sm mt-1">
            {task.description}
          </p>
        </div>

        <span
          className={`px-2 py-1 text-xs rounded-lg ${
            task.completed
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {task.completed ? "Completed" : "Pending"}
        </span>
      </div>

      <div className="flex gap-3 mt-4">
        <button
          onClick={() => onToggle(task.id)}
          className="px-3 py-1 bg-blue-500 text-white text-xs rounded shadow hover:bg-blue-600 transition"
        >
          Toggle
        </button>

        <button
          onClick={() => {
            const newDesc = prompt("Update description:", task.description);
            if (newDesc) onUpdate(task.id, newDesc);
          }}
          className="px-3 py-1 bg-gray-600 text-white text-xs rounded shadow hover:bg-gray-700 transition"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(task.id)}
          className="px-3 py-1 bg-red-500 text-white text-xs rounded shadow hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
