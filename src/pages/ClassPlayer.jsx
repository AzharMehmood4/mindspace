import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { classes } from "../classesData";

export default function ClassPlayer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const cls = classes.find((c) => String(c.id) === String(id)) || classes[0];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white min-h-screen">
      {/* Back button */}
      <button
        className="mb-4 text-sm text-green-600 hover:underline"
        onClick={() => navigate("/classes")}
      >
        ← Back
      </button>

      {/* Class Title & Description */}
      <h1 className="text-3xl font-bold mb-4">{cls.title}</h1>
      <p className="text-gray-600 mb-4">{cls.description}</p>

      {/* YouTube Video */}
      <div className="mb-6 w-full h-64 md:h-96">
        <iframe
          className="w-full h-full rounded"
          src={cls.youtube}
          title={cls.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      {/* Class Details */}
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div>
          <p>
            <strong>Duration:</strong> {cls.duration} min
          </p>
          <p>
            <strong>Level:</strong> {cls.level}
          </p>
          <p>
            <strong>Instructor:</strong> {cls.instructor}
          </p>
          <p>
            <strong>Type:</strong> {cls.type}
          </p>
        </div>
        <div>
          <ul className="list-disc list-inside space-y-1 mt-2 md:mt-0">
            {cls.benefits.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
