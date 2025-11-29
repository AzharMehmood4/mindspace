import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

/**
 * Glassmorphism navbar + dark mode toggle.
 * Requires tailwind with dark mode 'class'.
 */
export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [dark, setDark] = useState(() => {
    // initialize from localStorage or system preference
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    navigate("/");
  };

  const linkClass = (path) =>
    location.pathname === path
      ? "text-green-700 dark:text-green-300 font-semibold"
      : "text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-300";

  return (
    <nav className="fixed top-4 left-1/2 z-50 transform -translate-x-1/2 w-[94%] max-w-7xl rounded-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-white/40 dark:border-gray-700/40 shadow-lg">
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-4">
          <Link to="/home" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-linear-to-tr from-green-500 to-blue-400 flex items-center justify-center text-white font-bold shadow">
              MS
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-bold text-gray-900 dark:text-white">MindSpace</div>
              <div className="text-xs text-gray-500 dark:text-gray-300">Meditation & Mindfulness</div>
            </div>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <Link className={linkClass("/home")} to="/home">Home</Link>
          <Link className={linkClass("/meditation")} to="/meditation">Meditation</Link>
          <Link className={linkClass("/profile")} to="/profile">Profile</Link>
          <Link className={linkClass("/login")} to="/login">Login</Link>

          <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            {dark ? <SunIcon className="w-5 h-5 text-yellow-400" /> : <MoonIcon className="w-5 h-5 text-gray-600" />}
          </button>

          <button
            onClick={handleLogout}
            className="ml-2 bg-green-600 text-white px-4 py-1 rounded-full hover:bg-green-700 transition"
          >
            Logout
          </button>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden flex items-center gap-3">
          <button onClick={() => setDark(!dark)} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
            {dark ? <SunIcon className="w-5 h-5 text-yellow-400" /> : <MoonIcon className="w-5 h-5 text-gray-600" />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label="Open menu"
          >
            <svg className="w-6 h-6 text-gray-700 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* mobile panel */}
      {/* mobile panel */}
      {menuOpen && (
        <div className="md:hidden w-full bg-white dark:bg-gray-900 shadow-md">
          <div className="flex flex-col px-6 py-4 gap-3">
            <Link 
              onClick={() => setMenuOpen(false)} 
              className={`${linkClass("/home")} block w-full py-2`} 
              to="/home"
            >
              Home
            </Link>
            <Link 
              onClick={() => setMenuOpen(false)} 
              className={`${linkClass("/meditation")} block w-full py-2`} 
              to="/meditation"
            >
              Meditation
            </Link>
            <Link 
              onClick={() => setMenuOpen(false)} 
              className={`${linkClass("/profile")} block w-full py-2`} 
              to="/profile"
            >
              Profile
            </Link>
            <Link 
              onClick={() => setMenuOpen(false)} 
              className={`${linkClass("/login")} block w-full py-2`} 
              to="/login"
            >
              Login
            </Link>
            <button 
              onClick={handleLogout} 
              className="w-full bg-green-600 text-white py-2"
            >
              Logout
            </button>
          </div>
        </div>
      )}

    </nav>
  );
}
