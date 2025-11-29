import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    localStorage.setItem("userEmail", email); // store email for later
    setEmail("");
    setPassword("");
    navigate("/"); // navigate to login
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <form
        className="bg-white p-8 rounded-lg shadow-md w-96"
        onSubmit={handleSignup}
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-green-600">Sign Up</h2>
        <label className="block mb-2 font-medium">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border border-gray-300 p-2 rounded mb-4"
        />
        <label className="block mb-2 font-medium">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full border border-gray-300 p-2 rounded mb-4"
        />
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
        >
          Sign Up
        </button>

        <p className="mt-4 text-center text-gray-700">
          Already have an account?{" "}
          <Link to="/" className="text-green-600 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
