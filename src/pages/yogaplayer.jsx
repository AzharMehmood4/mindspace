import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import yogaManifest from "../yogamanifest.json";

export default function YogaPlayer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const session = yogaManifest.find((y) => String(y.id) === String(id)) || yogaManifest[0];

  const handleComplete = () => {
    const done = JSON.parse(localStorage.getItem("completedYoga")) || [];
    if (!done.includes(session.id)) {
      done.push(session.id);
      localStorage.setItem("completedYoga", JSON.stringify(done));
      alert("Marked as completed!");
    } else {
      alert("Already completed!");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <button className="mb-4 text-sm text-green-600 hover:underline" onClick={() => navigate(-1)}>← Back</button>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{session.title}</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{session.description}</p>

        {/* Video */}
        {session.video && (
          <video controls className="w-full mb-4 rounded">
            <source src={session.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        {/* Audio */}
        {session.audio && (
          <audio controls className="w-full mb-4">
            <source src={session.audio} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        )}

        <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
          <p>Duration: {session.duration || "—"} minutes</p>
          <p>Level: {session.level || "All"}</p>
        </div>

        <button
          onClick={handleComplete}
          className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
        >
          Mark as Completed
        </button>
      </div>
    </div>
  );
}
