import React from "react";
import { useNavigate } from "react-router-dom";

function Header({ title = "MindSpace" }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    navigate("/");
  };

  return (
    <header className="bg-green-600 text-white py-4 px-6 flex justify-between items-center shadow-md">
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-sm">Meditation & Mindfulnes</p>
      </div>
      <button
        onClick={handleLogout}
        className="bg-white text-green-600 px-4 py-2 rounded hover:bg-gray-100 transition"
      >
        Logout
      </button>
    </header>
  );
}

export default Header;
