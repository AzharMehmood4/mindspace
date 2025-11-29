import React from "react";

function ProfileCard() {
  const email = localStorage.getItem("userEmail") || "guest@mindspace.com";

  // Demo stats (you can later fetch from backend or calculate from progress)
  const stats = {
    meditationsCompleted: 5,
    totalTime: 120 // in minutes
  };

  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 text-center">
      <img
        src="/assets/images/avatar-placeholder.png"
        alt="User Avatar"
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h2 className="text-xl font-bold text-green-600 mb-1">{email}</h2>
      <p className="text-gray-600 mb-4">MindSpace Member</p>

      <div className="flex justify-around border-t pt-4">
        <div>
          <p className="text-lg font-bold text-gray-800">{stats.meditationsCompleted}</p>
          <p className="text-gray-500 text-sm">Completed</p>
        </div>
        <div>
          <p className="text-lg font-bold text-gray-800">{stats.totalTime} min</p>
          <p className="text-gray-500 text-sm">Meditating</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
