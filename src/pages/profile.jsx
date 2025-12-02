import React, { useEffect, useState } from "react";
import manifest from "../audiomanifast.json";
import { auth } from "../firebase";

function Profile() {
  const [completedMeditations, setCompletedMeditations] = useState([]);
  const [username, setUsername] = useState("User");
  // track logged-in email
  const [email, setEmail] = useState(""); 

  useEffect(() => {
    // Load completed meditations
    const done = JSON.parse(localStorage.getItem("completedMeditations")) || [];
    setCompletedMeditations(manifest.filter((m) => done.includes(m.id)));

    // Set username and email from Firebase currentUser
    if (auth.currentUser) {
      setUsername(auth.currentUser.displayName || "User");
      setEmail(auth.currentUser.email || "");
    }
  }, []);

  // Total meditation time in hours and minutes
  const totalMinutes = completedMeditations.reduce((sum, m) => sum + (m.duration || 0), 0);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  // Top 3 longest meditations
  const topMeditations = [...completedMeditations]
    .sort((a, b) => b.duration - a.duration)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-green-50 py-8">
      <h1 className="text-3xl font-bold text-green-600 text-center mb-2">
        Welcome, {username}!
      </h1>
      <p className="text-center text-gray-600 mb-6">
        Logged in as: <span className="font-semibold">{email}</span>
      </p>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Inline Profile Card */}
        <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 text-center">
          <img
            src="/assets/images/avatar-placeholder.png"
            alt="User Avatar"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-bold text-green-600 mb-1">{username}</h2>
          <p className="text-gray-600 mb-4">{email}</p>

          <div className="flex space-x-3 justify-around border-t pt-4">
            <div>
              <p className="text-lg font-bold text-gray-800">{completedMeditations.length}</p>
              <p className="text-gray-500 text-sm">Completed</p>
            </div>
            <div>
              <p className="text-lg font-bold text-gray-800">{totalMinutes} min</p>
              <p className="text-gray-500 text-sm">Meditating</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Meditation Stats</h2>

          <p>Total Meditations Completed: <span className="font-bold">{completedMeditations.length}</span></p>
          <p>Total Time Meditating: <span className="font-bold">{hours}h {minutes}m</span></p>

          <div className="w-full bg-gray-200 h-4 rounded mt-2">
            <div
              className="bg-green-500 h-4 rounded"
              style={{ width: `${(completedMeditations.length / manifest.length) * 100}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-500 mt-1">Progress towards goal</p>

          <h2 className="text-xl font-bold mb-4 mt-6">Top 3 Longest Meditations</h2>
          <ul className="space-y-2">
            {topMeditations.map((m) => (
              <li key={m.id} className="flex justify-between p-2 bg-green-50 rounded">
                <span>{m.title}</span>
                <span className="text-gray-600">{m.duration} min</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Completed Meditations Full List */}
      {completedMeditations.length > 0 && (
        <div className="max-w-5xl mx-auto mt-12">
          <h2 className="text-2xl font-bold mb-4 text-green-600">All Completed Meditations</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {completedMeditations.map((m) => (
              <div key={m.id} className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
                <img
                  src={m.image || "/assets/images/meditation-placeholder.jpg"}
                  alt={m.title}
                  className="w-full h-32 object-cover rounded mb-2"
                />
                <h3 className="font-bold text-lg">{m.title}</h3>
                <p className="text-gray-600 text-sm">{m.duration} min</p>
                <p className="text-gray-400 text-xs">{m.pack}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
