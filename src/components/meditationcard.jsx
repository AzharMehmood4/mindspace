import React from "react";
import { useNavigate } from "react-router-dom";

function MeditationCard({ meditation }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/player/${meditation.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-lg shadow-md overflow-hidden w-72 m-2 cursor-pointer hover:shadow-xl transition"
    >
      <img
        src={meditation.image || "https://imgs.search.brave.com/X_JBkzc7YUXPeWahSU9C09Hgb5lkDK295VJ8taTtuQg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjkv/MzIxLzkwNS9zbWFs/bC9haS1nZW5lcmF0/aXZlLW9mLWEtbWFu/LXByYWN0aWNpbmct/bWluZGZ1bG5lc3Mt/YW5kLW1lZGl0YXRp/b24taW4tYS1wZWFj/ZWZ1bC1uYXR1cmFs/LWVudmlyb25tZW50/LXNvbnktYTdzLXJl/YWxpc3RpYy1pbWFn/ZS11bHRyYS1oZC1o/aWdoLWRlc2lnbi12/ZXJ5LWRldGFpbGVk/LWZyZWUtcGhvdG8u/anBn"}
        alt={meditation.title}
        className="h-40 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{meditation.title}</h3>
        <p className="text-gray-600 mb-2">{meditation.duration} min</p>
        <p className="text-gray-500 text-sm">{meditation.pack}</p>
      </div>
    </div>
  );
}

export default MeditationCard;
