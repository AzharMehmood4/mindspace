import React, { useEffect, useState } from "react";

function ProgressTracker() {
  const [completed, setCompleted] = useState(0);
  const total = 10; // total meditations or can be dynamic

  useEffect(() => {
    const done = JSON.parse(localStorage.getItem("completedMeditations")) || [];
    setCompleted(done.length);
  }, []);

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
