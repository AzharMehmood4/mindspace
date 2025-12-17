import React from "react";
import { useNavigate } from "react-router-dom";
import yogaManifest from "../yogamanifest.json";

export default function Yoga() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-green-50">
      
      {/* Hero Section */}
      <section className="bg-gray-800 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Find Your Inner Peace with Yoga
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
          Explore guided yoga sessions for stress relief, flexibility, strength, and balance. Practice anytime, anywhere.
        </p>
        <button
          onClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}
          className="bg-white text-gray-800 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition"
        >
          Browse Sessions
        </button>
      </section>

      {/* Why Yoga Section */}
      <section className="max-w-7xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Why Practice Yoga?
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <h3 className="font-bold text-xl mb-2">Stress Relief</h3>
            <p className="text-gray-600">Reduce anxiety and feel calm with daily sessions.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <h3 className="font-bold text-xl mb-2">Flexibility & Strength</h3>
            <p className="text-gray-600">Improve posture, balance, and overall body strength.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <h3 className="font-bold text-xl mb-2">Mind & Body Connection</h3>
            <p className="text-gray-600">Enhance focus, mindfulness, and inner peace.</p>
          </div>
        </div>
      </section>

      {/* Yoga Sessions Grid */}
      <section className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Yoga Sessions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {yogaManifest.map((session) => (
            <div
              key={session.id}
              className="bg-white rounded-lg shadow p-6 flex flex-col justify-between hover:shadow-lg transition"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{session.title}</h3>
                <p className="text-gray-600 mb-2">{session.description}</p>
                <p className="text-sm text-gray-500">Duration: {session.duration} mins</p>
                <p className="text-sm text-gray-500">Level: {session.level}</p>
              </div>
              <button
                onClick={() => navigate(`/yogaplayer/${session.id}`)}
                className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                Start Session
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="font-bold text-xl mb-2">1. Choose a Session</h3>
            <p className="text-gray-600">Select from stress relief, focus, flexibility, or healing sessions.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">2. Follow the Guidance</h3>
            <p className="text-gray-600">Listen to voice instructions or follow the video guides step by step.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">3. Track Your Progress</h3>
            <p className="text-gray-600">Keep track of completed sessions and improvement in your flexibility and focus.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Our Users Say</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 rounded-lg shadow p-6">
            <p className="text-gray-700 mb-4">
              "Yoga sessions helped me relieve stress and feel more energetic during the day!"
            </p>
            <h4 className="font-bold text-gray-900">– Sarah J.</h4>
          </div>
          <div className="bg-green-50 rounded-lg shadow p-6">
            <p className="text-gray-700 mb-4">
              "The guided yoga is easy to follow and makes a huge difference in my mood."
            </p>
            <h4 className="font-bold text-gray-900">– Mike T.</h4>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-600 text-white py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Start Your Yoga Journey Today</h2>
        <p className="mb-6">Join our community and experience a calmer, healthier lifestyle.</p>
        <button
          onClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}
          className="bg-white text-green-600 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition"
        >
          Browse Sessions
        </button>
      </section>

    </div>
  );
}
