import React, { useState } from "react";
import MeditationCard from "../components/meditationcard";
import ProgressTracker from "../components/progresstracker";
import PackFilter from "../components/packfilter";
import manifest from "../audiomanifast.json"; // your meditation data

export default function Meditation() {
  const [selectedPack, setSelectedPack] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [levelFilter, setLevelFilter] = useState("All");

  const packs = [...new Set(manifest.map((m) => m.pack))];
  const levels = ["All", "Beginner", "Intermediate", "Advanced"];

  // Filter meditations
  const filtered = manifest
    .filter((m) =>
      selectedPack === "All" ? true : m.pack === selectedPack
    )
    .filter((m) =>
      levelFilter === "All" ? true : m.level === levelFilter
    )
    .filter((m) =>
      m.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="min-h-screen bg-green-50">
      <div className="max-w-7xl mx-auto p-4">
        <ProgressTracker />

        {/* Search */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search meditations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/2 p-2 border rounded mb-2"
          />
        </div>

        {/* Filters */}
        <PackFilter packs={packs} selectedPack={selectedPack} setSelectedPack={setSelectedPack} />
        <div className="flex flex-wrap mb-4">
          {levels.map((lvl) => (
            <button
              key={lvl}
              className={`mr-2 mb-2 px-4 py-1 rounded ${
                levelFilter === lvl ? "bg-green-500 text-white" : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setLevelFilter(lvl)}
            >
              {lvl}
            </button>
          ))}
        </div>

        {/* Meditation Cards */}
        <div className="flex flex-wrap justify-center">
          {filtered.map((m) => (
            <MeditationCard key={m.id} meditation={m} />
          ))}
        </div>
      </div>
    </div>
  );
}
