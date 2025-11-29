import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import manifest from "../audiomanifast.json";

export default function MeditationPlayer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const meditation = manifest.find(m => String(m.id) === String(id)) || manifest[0];

  const handleComplete = () => {
    const done = JSON.parse(localStorage.getItem("completedMeditations")) || [];
    if (!done.includes(meditation.id)) {
      done.push(meditation.id);
      localStorage.setItem("completedMeditations", JSON.stringify(done));
      alert("Marked as completed!");
    } else {
      alert("Already completed!");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <button className="mb-4 text-sm text-green-600 hover:underline" onClick={() => navigate(-1)}>← Back</button>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <img 
            src={meditation.image || "/assets/images/meditation-placeholder.jpg"} 
            alt={meditation.title} 
            className="w-full md:w-1/3 h-48 object-cover rounded" 
          />
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{meditation.title}</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{meditation.description || meditation.pack}</p>

            <audio controls className="w-full mb-4">
              <source src={meditation.src || meditation.file || meditation.url} />
              Your browser does not support the audio element.
            </audio>

            <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              <p>Duration: {meditation.duration || "—"} minutes</p>
              <p>Pack: {meditation.pack || "General"}</p>
            </div>

            {/* Mark as Completed Button */}
            <button
              onClick={handleComplete}
              className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
            >
              Mark as Completed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
