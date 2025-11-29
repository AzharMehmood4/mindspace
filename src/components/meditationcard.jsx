import React from "react";

function MeditationCard({ meditation }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-72 m-2 hover:shadow-xl transition">
      <img
        src={meditation.image || "/assets/images/meditation-placeholder.jpg"}
        alt={meditation.title}
        className="h-40 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{meditation.title}</h3>
        <p className="text-gray-600 mb-2">{meditation.duration} min</p>
        <p className="text-gray-500 text-sm">{meditation.pack}</p>
      </div>
    </div>
  );
}

export default MeditationCard;
