import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <form className="bg-white p-8 rounded-lg shadow-md w-96" onSubmit={handleLogin}>
        <h2 className="text-2xl font-bold mb-6 text-center text-green-600">Login</h2>
        <label className="block mb-2 font-medium">Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full border border-gray-300 p-2 rounded mb-4" />
        <label className="block mb-2 font-medium">Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full border border-gray-300 p-2 rounded mb-4" />
        <button type="submit" className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition">Login</button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <p className="mt-4 text-center text-gray-700">
          Don't have an account? <Link to="/signup" className="text-green-600 hover:underline">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
