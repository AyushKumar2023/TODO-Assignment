export default function Navbar({ onLogout }) {
  return (
    <header className="bg-white border-b shadow-sm">
      <div className="max-w-4xl mx-auto flex justify-between items-center py-4 px-4">
        <h1 className="text-xl font-semibold text-gray-800">Todo Manager</h1>

        <button
          onClick={onLogout}
          className="px-4 py-2 bg-red-500 text-white text-sm rounded-lg shadow hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
