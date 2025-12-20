import React, { useState, useEffect } from "react";
import { classes as allClasses } from "../classesData";

export default function Classes() {
  const [selectedClass, setSelectedClass] = useState(null);
  const [filteredClasses, setFilteredClasses] = useState(allClasses);
  const [levelFilter, setLevelFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [introText, setIntroText] = useState(
    "Our classes are designed to suit all levels. Find your perfect session and start today!"
  );

  useEffect(() => {
    let temp = allClasses;

    if (levelFilter !== "All") {
      temp = temp.filter((cls) => cls.level === levelFilter);
      switch (levelFilter) {
        case "Beginner":
          setIntroText(
            "Beginner classes are perfect for those who are new to yoga or fitness. Start slow, gain confidence, and build your foundation."
          );
          break;
        case "Intermediate":
          setIntroText(
            "Intermediate classes are for those with some experience. Strengthen your skills, improve flexibility, and boost your stamina."
          );
          break;
        case "Advanced":
          setIntroText(
            "Advanced classes challenge your skills, stamina, and mindfulness for maximum results. Push your limits safely."
          );
          break;
        default:
          setIntroText(
            "Our classes are designed to suit all levels. Find your perfect session and start today!"
          );
      }
    } else {
      setIntroText(
        "Our classes are designed to suit all levels. Find your perfect session and start today!"
      );
    }

    if (searchTerm) {
      temp = temp.filter((cls) =>
        cls.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredClasses(temp);
  }, [levelFilter, searchTerm]);

  const startClass = (cls) => setSelectedClass(cls);
  const goBack = () => setSelectedClass(null);

  if (selectedClass) {
    return (
      <div className="bg-white min-h-screen py-12 px-4 md:px-12">
        <button
          onClick={goBack}
          className="mb-6 text-green-600 hover:underline transition"
        >
          &larr; Back to Classes
        </button>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{selectedClass.title}</h1>
        <img
          src={selectedClass.image}
          alt={selectedClass.title}
          className="w-full h-64 md:h-96 object-cover rounded mb-8 shadow-lg"
        />
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-2">
            <p><strong>Duration:</strong> {selectedClass.duration} min</p>
            <p><strong>Level:</strong> {selectedClass.level}</p>
            <p><strong>Instructor:</strong> {selectedClass.instructor}</p>
            <p><strong>Type:</strong> {selectedClass.type}</p>
          </div>
          <div>
            <p className="mb-4">{selectedClass.description}</p>
            <ul className="list-disc list-inside space-y-1">
              {selectedClass.benefits.map((benefit, i) => (
                <li key={i}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
        <a
          href={selectedClass.videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 text-white py-3 px-8 rounded hover:bg-green-700 transition text-lg font-semibold"
        >
          Start Class
        </a>
      </div>
    );
  }


  return (
    <div className="bg-white min-h-screen py-12 px-4 md:px-8">
      {/* Hero */}
      <section className="max-w-5xl mx-auto mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Explore Our Classes</h2>
        <p className="text-gray-700 text-lg md:text-xl mb-6">{introText}</p>
        <p className="text-gray-600 md:text-lg">
          Whether you are looking to start a new fitness journey, improve your flexibility, 
          or practice mindfulness, our curated classes are tailored to help you achieve your goals.
        </p>
      </section>
      {/* Why Choose Our Classes */}
        <section className="max-w-6xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Why Choose Our Classes
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-green-50 p-6 rounded shadow hover:shadow-lg transition transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
            <p className="text-gray-600">
                Learn from certified professionals with years of experience guiding students at all levels.
            </p>
            </div>
            <div className="bg-green-50 p-6 rounded shadow hover:shadow-lg transition transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">Flexible Learning</h3>
            <p className="text-gray-600">
                Attend classes anytime, anywhere. Perfect for busy schedules and self-paced learning.
            </p>
            </div>
            <div className="bg-green-50 p-6 rounded shadow hover:shadow-lg transition transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">Holistic Benefits</h3>
            <p className="text-gray-600">
                Strengthen your body, calm your mind, and improve overall well-being through our diverse classes.
            </p>
            </div>
        </div>
        </section>


      {/* Filters */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4 max-w-5xl mx-auto">
        <input
          type="text"
          placeholder="Search classes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-full sm:w-2/3 md:w-1/2 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
        />
        <select
          value={levelFilter}
          onChange={(e) => setLevelFilter(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-full sm:w-1/3 md:w-1/4 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
        >
          <option value="All">All Levels</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>

      {/* Classes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredClasses.length === 0 && (
          <p className="text-center text-gray-500 col-span-full">No classes found.</p>
        )}
        {filteredClasses.map((cls) => (
          <div
            key={cls.id}
            className="bg-white rounded-lg shadow overflow-hidden hover:shadow-2xl transition transform hover:scale-105 cursor-pointer"
            onClick={() => startClass(cls)}
          >
            <img
              src={cls.image}
              alt={cls.title}
              className="h-48 md:h-56 w-full object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold">{cls.title}</h3>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">{cls.level}</span>
              </div>
              <p className="text-gray-600 mb-2">{cls.duration} min</p>
              <p className="text-gray-500 mb-4">{cls.shortDescription}</p>
              <button
                onClick={() => startClass(cls)}
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition font-medium"
              >
                Start Class
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
