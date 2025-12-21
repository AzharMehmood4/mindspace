import React, { useRef, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp, FaBackward, FaForward } from "react-icons/fa";
import yogaManifest from "../yogamanifest.json";

export default function YogaPlayer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const session = yogaManifest.find((y) => String(y.id) === String(id)) || yogaManifest[0];

  const audioRef = useRef(null);
  const videoRef = useRef(null);

  // --- Audio State ---
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isAudioMuted, setIsAudioMuted] = useState(false);
  const [audioTime, setAudioTime] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);

  // --- Video State ---
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(false);
  const [videoTime, setVideoTime] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);

  // --- Audio Effects ---
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setAudioTime(audio.currentTime);
    const setMeta = () => setAudioDuration(audio.duration);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", setMeta);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", setMeta);
    };
  }, [session]);

  // --- Video Effects ---
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
  }, [session]);

  const formatTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const seconds = Math.floor(sec % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // --- Audio Controls ---
  const handleAudioPlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isAudioPlaying) audio.pause();
    else audio.play();
    setIsAudioPlaying(!isAudioPlaying);
  };

  const toggleAudioMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !isAudioMuted;
    setIsAudioMuted(!isAudioMuted);
  };

  const skipAudio = (seconds) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.min(Math.max(0, audio.currentTime + seconds), audioDuration);
  };

  const handleAudioSlider = (e) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = e.target.value;
    setAudioTime(e.target.value);
  };

  // --- Video Controls ---
  const handleVideoPlayPause = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isVideoPlaying) video.pause();
    else video.play();
    setIsVideoPlaying(!isVideoPlaying);
  };

  const toggleVideoMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !isVideoMuted;
    setIsVideoMuted(!isVideoMuted);
  };

  const skipVideo = (seconds) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = Math.min(Math.max(0, video.currentTime + seconds), videoDuration);
  };

  const handleVideoSlider = (e) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = e.target.value;
    setVideoTime(e.target.value);
  };

  const handleComplete = () => {
    const done = JSON.parse(localStorage.getItem("completedYoga")) || [];
    if (!done.includes(session.id)) {
      done.push(session.id);
      localStorage.setItem("completedYoga", JSON.stringify(done));
      alert("Marked as completed!");
    } else {
      alert("Already completed!");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <button className="mb-4 text-sm text-green-600 hover:underline" onClick={() => navigate(-1)}>← Back</button>
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-4 text-gray-900">{session.title}</h1>
        <p className="text-gray-600 mb-4">{session.description}</p>

        {/* --- AUDIO SECTION --- */}
        {session.audio && (
          <div className="mb-6">
            <h2 className="font-semibold mb-2 text-gray-700">Audio</h2>
            <audio ref={audioRef} src={session.audio} className="w-full" />
            <div className="flex items-center gap-4 mt-2">
              <button onClick={() => skipAudio(-10)}><FaBackward /></button>
              <button onClick={handleAudioPlayPause}>{isAudioPlaying ? <FaPause /> : <FaPlay />}</button>
              <button onClick={() => skipAudio(10)}><FaForward /></button>
              <button onClick={toggleAudioMute}>{isAudioMuted ? <FaVolumeMute /> : <FaVolumeUp />}</button>
              <span>{formatTime(audioTime)} / {formatTime(audioDuration)}</span>
            </div>
            <input
              type="range"
              min={0}
              max={audioDuration || 0}
              value={audioTime}
              onChange={handleAudioSlider}
              className="w-full mt-1"
            />
          </div>
        )}

        {/* --- VIDEO SECTION --- */}
{session.youtube ? (
  <div className="mb-6">
    <h2 className="font-semibold mb-2 text-gray-700">Video</h2>
    <div className="w-full h-64">
      <iframe
        className="w-full h-full rounded"
        src={session.youtube} // <-- unique YouTube embed link for each session
        title={session.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  </div>
) : (
  session.video && (
    <div className="mb-6">
      <h2 className="font-semibold mb-2 text-gray-700">Video</h2>
      <video ref={videoRef} src={session.video} className="w-full rounded" />
      <div className="flex items-center gap-4 mt-2">
        <button onClick={() => skipVideo(-10)}><FaBackward /></button>
        <button onClick={handleVideoPlayPause}>{isVideoPlaying ? <FaPause /> : <FaPlay />}</button>
        <button onClick={() => skipVideo(10)}><FaForward /></button>
        <button onClick={toggleVideoMute}>{isVideoMuted ? <FaVolumeMute /> : <FaVolumeUp />}</button>
        <span>{formatTime(videoTime)} / {formatTime(videoDuration)}</span>
      </div>
      <input
        type="range"
        min={0}
        max={videoDuration || 0}
        value={videoTime}
        onChange={handleVideoSlider}
        className="w-full mt-1"
      />
    </div>
  )
)}


        <div className="mt-4 text-sm text-gray-600">
          <p>Duration: {session.duration || "—"} minutes</p>
          <p>Level: {session.level || "All"}</p>
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
