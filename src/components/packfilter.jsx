import React from "react";

function PackFilter({ packs, selectedPack, setSelectedPack }) {
  return (
    <div className="flex flex-wrap mb-4">
      <button
        className={`mr-2 mb-2 px-4 py-1 rounded ${
          selectedPack === "All" ? "bg-green-500 text-white" : "bg-gray-200 text-gray-700"
        }`}
        onClick={() => setSelectedPack("All")}
      >
        All
      </button>
      {packs.map((pack) => (
        <button
          key={pack}
          className={`mr-2 mb-2 px-4 py-1 rounded ${
            selectedPack === pack ? "bg-green-500 text-white" : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setSelectedPack(pack)}
        >
          {pack}
        </button>
      ))}
    </div>
  );
}

export default PackFilter;
