import React from "react";

function ProgressTracker() {
  const completed = 3; // demo
  const total = 10;

  const percent = (completed / total) * 100;

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <h3 className="text-gray-700 font-bold mb-2">Progress</h3>
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-green-500 h-4 rounded-full"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
      <p className="text-gray-600 mt-1">{completed} of {total} meditations completed</p>
    </div>
  );
}

export default ProgressTracker;
