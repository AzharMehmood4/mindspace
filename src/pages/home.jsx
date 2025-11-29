import React, { useState } from "react";
import Navbar from "../components/navbar";
import MeditationCard from "../components//meditationcard";
import ProgressTracker from "../components/progresstracker";
import PackFilter from "../components/packfilter";
import manifest from "../audiomanifast.json";

export default function Home() {
  const [selectedPack, setSelectedPack] = useState("All");
  const packs = [...new Set(manifest.map((m) => m.pack))];

  const filtered = selectedPack === "All"
    ? manifest
    : manifest.filter((m) => m.pack === selectedPack);

  return (
    <div className="min-h-screen bg-green-50">
      <div className="max-w-7xl mx-auto p-4">
        <ProgressTracker />
        <PackFilter packs={packs} selectedPack={selectedPack} setSelectedPack={setSelectedPack} />
        <div className="flex flex-wrap justify-center">
          {filtered.map((m) => (
            <MeditationCard key={m.id} meditation={m} />
          ))}
        </div>
      </div>
    </div>
  );
}
