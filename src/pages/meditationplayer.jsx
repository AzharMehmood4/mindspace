import React, { useRef, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaPlay,
  FaPause,
  FaVolumeMute,
  FaVolumeUp,
  FaBackward,
  FaForward
} from "react-icons/fa";
import manifest from "../audiomanifast.json";

export default function MeditationPlayer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const meditation =
    manifest.find(m => String(m.id) === String(id)) || manifest[0];

  const audioRef = useRef(null);
  const videoRef = useRef(null);

  // AUDIO STATE
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // VIDEO STATE
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [videoTime, setVideoTime] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);

  // AUDIO EFFECT
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

  // VIDEO EFFECT
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setVideoTime(video.currentTime);
    const setMeta = () => setVideoDuration(video.duration);

    video.addEventListener("timeupdate", updateTime);
    video.addEventListener("loadedmetadata", setMeta);

    return () => {
      video.removeEventListener("timeupdate", updateTime);
      video.removeEventListener("loadedmetadata", setMeta);
    };
  }, []);

  // AUDIO FUNCTIONS
  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) audio.pause();
    else audio.play();
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const skip = sec => {
    const audio = audioRef.current;
    audio.currentTime = Math.min(Math.max(0, audio.currentTime + sec), duration);
  };

  const handleSliderChange = e => {
    const audio = audioRef.current;
    audio.currentTime = e.target.value;
    setCurrentTime(e.target.value);
  };

  // VIDEO FUNCTIONS
  const toggleVideoPlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isVideoPlaying) video.pause();
    else video.play();
    setIsVideoPlaying(!isVideoPlaying);
  };

  const toggleVideoMute = () => {
    const video = videoRef.current;
    video.muted = !isVideoMuted;
    setIsVideoMuted(!isVideoMuted);
  };

  const skipVideo = sec => {
    const video = videoRef.current;
    video.currentTime = Math.min(Math.max(0, video.currentTime + sec), videoDuration);
  };

  const handleVideoSliderChange = e => {
    const video = videoRef.current;
    video.currentTime = e.target.value;
    setVideoTime(e.target.value);
  };

  const formatTime = sec => {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  // MARK COMPLETED
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

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <button
        className="mb-4 text-sm text-green-600 hover:underline"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <div className="bg-white rounded-lg shadow p-6">
        {/* VIDEO SECTION */}
        {meditation.video && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-700">Video</h2>
            <video
              ref={videoRef}
              src={meditation.video}
              className="w-full h-64 rounded-lg object-cover"
              muted
            />
            <div className="flex items-center gap-3 mt-3">
              <button onClick={() => skipVideo(-10)}>
                <FaBackward />
              </button>
              <button onClick={toggleVideoPlay}>
                {isVideoPlaying ? <FaPause /> : <FaPlay />}
              </button>
              <button onClick={() => skipVideo(10)}>
                <FaForward />
              </button>
              <button onClick={toggleVideoMute}>
                {isVideoMuted ? <FaVolumeMute /> : <FaVolumeUp />}
              </button>
              <input
                type="range"
                min={0}
                max={videoDuration || 0}
                value={videoTime}
                onChange={handleVideoSliderChange}
                className="flex-1"
              />
              <span className="text-sm">{formatTime(videoTime)}</span>
              <span className="text-sm">{formatTime(videoDuration)}</span>
            </div>
          </div>
        )}


        <h1 className="text-2xl font-bold mb-2">{meditation.title}</h1>
        <p className="text-gray-600 mb-4">{meditation.pack}</p>

        {/* AUDIO SECTION */}
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">Audio</h2>
          <audio ref={audioRef} src={meditation.audio} hidden />
          <div className="flex items-center gap-2 mb-2">
            <button onClick={toggleMute}>
              {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
            </button>
            <span>{formatTime(currentTime)}</span>
            <input
              type="range"
              min={0}
              max={duration || 0}
              value={currentTime}
              onChange={handleSliderChange}
              className="flex-1"
            />
            <span>{formatTime(duration)}</span>
          </div>
          <div className="flex justify-center gap-6 text-xl">
            <button onClick={() => skip(-10)}>
              <FaBackward />
            </button>
            <button onClick={handlePlayPause}>
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <button onClick={() => skip(10)}>
              <FaForward />
            </button>
          </div>
        </div>

        <button
          onClick={handleComplete}
          className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
        >
          Mark as Completed
        </button>
      </div>
    </div>
  );
}
