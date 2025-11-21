import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Tasks from "./pages/Tasks";

export default function App() {
  const { token } = useSelector((s) => s.auth);

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={token ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={token ? <Tasks /> : <Navigate to="/login" />} />

      </Routes>
    </BrowserRouter>
  );
}
