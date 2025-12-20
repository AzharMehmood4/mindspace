import React, { useRef, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp, FaBackward, FaForward } from "react-icons/fa";
import manifest from "../audiomanifast.json";

export default function MeditationPlayer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const meditation = manifest.find(m => String(m.id) === String(id)) || manifest[0];

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", () => setDuration(audio.duration));

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
    };
  }, []);

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) audio.pause();
    else audio.play();
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const skip = (seconds) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.min(Math.max(0, audio.currentTime + seconds), duration);
  };

  const handleSliderChange = (e) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = e.target.value;
    setCurrentTime(e.target.value);
  };

  const handleComplete = () => {
    const done = JSON.parse(localStorage.getItem("completedMeditations")) || [];
    if (!done.includes(meditation.id)) {
      done.push(meditation.id);
      localStorage.setItem("completedMeditations", JSON.stringify(done));
      alert("Marked as completed!");
    } else {
      alert("Already completed!");
    }
  };

  const formatTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const seconds = Math.floor(sec % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <button className="mb-4 text-sm text-green-600 hover:underline" onClick={() => navigate(-1)}>← Back</button>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <img 
            src={meditation.image || "/assets/images/meditation-placeholder.jpg"} 
            alt={meditation.title} 
            className="w-full md:w-1/3 h-48 object-cover rounded" 
          />
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-2 text-gray-900">{meditation.title}</h1>
            <p className="text-gray-600 mb-4">{meditation.description || meditation.pack}</p>

            <audio ref={audioRef} src={meditation.audio} className="w-full hidden" />

            {/* Progress*/}
            <div className="flex items-center gap-2 mb-4">
              <button onClick={toggleMute} className="text-xl text-gray-700 hover:text-green-600 transition">
                {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
              </button>
              <span className="text-sm text-gray-600">{formatTime(currentTime)}</span>
              <input
                type="range"
                min={0}
                max={duration || 0}
                value={currentTime}
                onChange={handleSliderChange}
                className="flex-1"
              />
              <span className="text-sm text-gray-600">{formatTime(duration)}</span>
            </div>

            {/* Playback controls*/}
            <div className="flex items-center gap-6 justify-center mb-4 text-gray-700 text-xl">
              <button onClick={() => skip(-10)} className="hover:text-green-600 transition">
                <FaBackward />
              </button>
              <button onClick={handlePlayPause} className="hover:text-green-600 transition text-2xl">
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
              <button onClick={() => skip(10)} className="hover:text-green-600 transition">
                <FaForward />
              </button>
            </div>

            <div className="mt-4 text-sm text-gray-600">
              <p>Duration: {meditation.duration || "—"} minutes</p>
              <p>Pack: {meditation.pack || "General"}</p>
            </div>

            <button
              onClick={handleComplete}
              className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
            >
              Mark as Completed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
