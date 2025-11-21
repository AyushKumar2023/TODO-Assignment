import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTasks,
  createTask,
  deleteTask,
  toggleTask,
  updateDescription,
} from "../features/taskSlice";

import Navbar from "../components/Navbar";
import TaskCard from "../components/TaskCard";
import { logout } from "../features/authSlice";

export default function Tasks() {
  const dispatch = useDispatch();
  const { list } = useSelector((s) => s.tasks);

  const [form, setForm] = useState({ title: "", description: "" });

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  const handleCreate = async () => {
    if (!form.title || !form.description) return;
    await dispatch(createTask(form));
    setForm({ title: "", description: "" });
    dispatch(fetchTasks());
  };

  return (
    <>
      <Navbar onLogout={() => dispatch(logout())} />

      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="bg-white border rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Add New Task
          </h2>

          <input
            type="text"
            className="w-full border px-3 py-2 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Task title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />

          <textarea
            className="w-full border px-3 py-2 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Task description"
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
          />

          <button
            onClick={handleCreate}
            className="w-full bg-blue-600 text-white py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Add Task
          </button>
        </div>

        <div className="grid gap-4">
          {list.length === 0 ? (
            <p className="text-center text-gray-600 text-sm">
              No tasks yet — start by adding one!
            </p>
          ) : (
            list.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onDelete={(id) => {
                  dispatch(deleteTask(id));
                  dispatch(fetchTasks());
                }}
                onToggle={(id) => {
                  dispatch(toggleTask(id));
                  dispatch(fetchTasks());
                }}
                onUpdate={(id, desc) => {
                  dispatch(updateDescription({ id, description: desc }));
                  dispatch(fetchTasks());
                }}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}
