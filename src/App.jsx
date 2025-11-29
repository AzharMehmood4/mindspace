// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import Navbar from "./components/navbar";
// import Home from "./pages/home";
// import MeditationPlayer from "./pages/meditationplayer";
// import Meditation from "./pages/meditation";
// import Profile from "./pages/profile";
// import Login from "./pages/login";
// import Signup from "./pages/signup";

// /**
//  * Simple auth check: checks localStorage userEmail
//  * In future replace this with real auth
//  */
// const PrivateRoute = ({ children }) => {
//   const user = localStorage.getItem("userEmail");
//   return user ? children : <Navigate to="/" replace />;
// };

// export default function App() {
//   return (
//     <div className="min-h-screen bg-linear-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors">
//       <Navbar />
//       <main className="pt-24"> {/* leave space for sticky navbar */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />

//           {/* protected */}
//           <Route path="/home" element={
//             <PrivateRoute><Home /></PrivateRoute>
//           } />
//           <Route path="/meditation" element={
//             <PrivateRoute><Meditation /></PrivateRoute>
//           } />
//           <Route path="/player/:id" element={
//             <PrivateRoute><MeditationPlayer /></PrivateRoute>
//           } />
//           <Route path="/profile" element={
//             <PrivateRoute><Profile /></PrivateRoute>
//           } />

//           {/* fallback */}
//           <Route path="*" element={<Navigate to="/" replace />} />
//         </Routes>
//       </main>
//     </div>
//   );
// }




import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import MeditationPlayer from "./pages/meditationplayer";
import Meditation from "./pages/meditation";
import Profile from "./pages/profile";
import Login from "./pages/login";
import Signup from "./pages/signup";
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
      <main className="pt-24"> {/* space for sticky navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Routes */}
          <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/meditation" element={<PrivateRoute><Meditation /></PrivateRoute>} />
          <Route path="/player/:id" element={<PrivateRoute><MeditationPlayer /></PrivateRoute>} />
          <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}
