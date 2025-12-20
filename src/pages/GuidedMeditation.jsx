import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaPlay,
  FaPause,
  FaBackward,
  FaForward,
  FaVolumeMute,
  FaVolumeUp,
} from "react-icons/fa";
import meditations from "../meditations.json";

export default function GuidedMeditation() {
  const navigate = useNavigate();

  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const [searchText, setSearchText] = useState("");

  // Filtered data based on language & search
  const filteredMeditations = meditations
    .filter(
      (lang) =>
        selectedLanguage === "All" || lang.language === selectedLanguage
    )
    .map((lang) => ({
      ...lang,
      sessions: lang.sessions.filter((s) =>
        s.title.toLowerCase().includes(searchText.toLowerCase())
      ),
    }))
    .filter((lang) => lang.sessions.length > 0); // Remove empty sections

  const languages = ["All", "English", "Arabic", "Hindi"];

  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-8">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-green-600 font-medium mb-6 hover:underline"
      >
        ← Back
      </button>

      <section className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-4">
          Welcome to Guided Meditations
        </h1>
        <p className="text-gray-700 mb-4">
          Begin your mindfulness journey with our free guided meditations,
          designed to help you reduce stress, improve focus, and cultivate a
          calm mind. Each session is recorded by real instructors in authentic
          scenarios to give you a genuine mindfulness experience.
        </p>
        <p className="text-gray-600 text-sm">
          You can stream the meditations by clicking the "Play" button on any
          session.
        </p>
      </section>

      {/* Filter and search*/}
      <div className="max-w-4xl mx-auto flex justify-between items-center mb-8">
        {/* Filter */}
        <div className="flex gap-4">
          {languages.map((lang) => (
            <button
              key={lang}
              className={`px-4 py-2 rounded ${
                selectedLanguage === lang
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-green-100"
              }`}
              onClick={() => setSelectedLanguage(lang)}
            >
              {lang}
            </button>
          ))}
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search sessions..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="px-4 py-2 border rounded w-60 focus:outline-green-500"
        />
      </div>

      {/* Meditation Cards */}
      {filteredMeditations.map((lang, index) => (
        <div key={index} className="mb-12">
          <h2 className="text-2xl font-semibold mb-5 text-green-600">
            {lang.language}
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {lang.sessions.map((session) => (
              <AudioCard key={session.id} session={session} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function AudioCard({ session }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const setMeta = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", setMeta);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", setMeta);
    };
  }, []);

  const playAudio = () => {
    const audio = audioRef.current;
    if (isPlaying) audio.pause();
    else audio.play();
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const skip = (sec) => {
    const audio = audioRef.current;
    audio.currentTime = Math.min(
      Math.max(0, audio.currentTime + sec),
      duration
    );
  };

  const handleSliderChange = (e) => {
    const audio = audioRef.current;
    audio.currentTime = e.target.value;
    setCurrentTime(e.target.value);
  };

  const formatTime = (sec) => {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <div className="bg-gray-100 p-5 rounded-lg shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <h3 className="font-semibold text-lg mb-2">{session.title}</h3>
      <p className="text-gray-500 mb-4">{session.duration}</p>

      <audio ref={audioRef} src={session.audio} hidden />

      <div className="flex justify-center gap-4 text-xl">
        <button onClick={() => skip(-10)}>
          <FaBackward />
        </button>
        <button onClick={playAudio}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <button onClick={() => skip(10)}>
          <FaForward />
        </button>
        <button onClick={toggleMute}>
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>
      </div>

      <input
        type="range"
        min={0}
        max={duration || 0}
        value={currentTime}
        onChange={handleSliderChange}
        className="w-full mt-2"
      />

      <div className="flex justify-between text-sm mt-1">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
}
