import React from "react";
import { useNavigate } from "react-router-dom";
import yogaManifest from "../yogamanifest.json";

export default function Yoga() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
    <div className="max-w-4xl mx-auto p-6 ">
      <h1 className="text-3xl font-bold mb-6">Yoga Sessions</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {yogaManifest.map((session) => (
          <div key={session.id} className="bg-white  rounded-lg shadow p-4 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{session.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mt-1">{session.description}</p>
              <p className="text-sm text-gray-500 mt-2">Duration: {session.duration} mins</p>
              <p className="text-sm text-gray-500">Level: {session.level}</p>
            </div>
            <button
              onClick={() => navigate(`/yogaplayer/${session.id}`)}
              className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              Start Session
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
