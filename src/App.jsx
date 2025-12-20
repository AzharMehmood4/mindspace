import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import MeditationPlayer from "./pages/meditationplayer";
import Meditation from "./pages/meditation";
import Profile from "./pages/profile";
import Login from "./pages/login";
import Signup from "./pages/signup";
import YogaPlayer from "./pages/yogaplayer";
import Yoga from "./pages/yoga";
import Classes from "./pages/Classes"
import { auth } from "./firebase";

/**
 * PrivateRoute for Firebase auth
 */
const PrivateRoute = ({ children }) => {
  return auth.currentUser ? children : <Navigate to="/login" replace />;
};

export default function App() {
  return (
    <div className="min-h-screen bg-linear-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors">
      <Navbar />
      <main className="pt-24">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected routes */}
          <Route
            path="/meditation"
            element={<PrivateRoute><Meditation /></PrivateRoute>}
          />
          <Route
            path="/player/:id"
            element={<PrivateRoute><MeditationPlayer/></PrivateRoute>}
          />
          <Route 
          path="/yoga" 
          element={<PrivateRoute><Yoga /></PrivateRoute>} 
          />
          <Route 
          path="/yogaplayer/:id" 
          element={<PrivateRoute><YogaPlayer /></PrivateRoute>} 
          />
          <Route
          path="/classes"
          element={<PrivateRoute><Classes /></PrivateRoute>}
        />
          <Route
            path="/profile"
            element={<PrivateRoute><Profile /></PrivateRoute>}
          />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}
