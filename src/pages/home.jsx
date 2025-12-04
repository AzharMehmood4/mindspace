import React from "react";
import { Heart, PlayCircle, Users } from "lucide-react";


// Dummy data
const classes = [
  { id: 1, title: "Vinyasa", duration: 45, level: "Intermediate", image: "/assets/images/meditation1.jpg" },
  { id: 2, title: "Hatha", duration: 50, level: "Beginner", image: "/assets/images/meditation2.jpg" },
  { id: 3, title: "Corporate Flow", duration: 30, level: "All Levels", image: "/assets/images/meditation3.jpg" },
  { id: 3, title: "Corporate Flow", duration: 30, level: "All Levels", image: "/assets/images/meditation3.jpg" },
];
const testimonials = [
  { id: 1, name: "Courtney Henry", text: "This app changed my mornings—I feel calmer and more focused than ever." },
  { id: 2, name: "Arlene McCoy", text: "I struggled with sleep for years, but now I fall asleep within minutes." },
  { id: 3, name: "Jacob Jones", text: "Excellent prenatal classes—safe, knowledgeable teachers." },
  { id: 4, name: "Theresa Webb", text: "The guided meditations feel personal and truly help me get comfort." },
];

export default function home() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 p-8">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">LIVE WITH CALM</h1>
            <p className="text-gray-700 mb-6">
              Join live & on-demand classes, guided programs, and mindful practices.
              Beginner friendly to advanced. Try 7 days free.
            </p>
            <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition">
              Get Started
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://imgs.search.brave.com/X_JBkzc7YUXPeWahSU9C09Hgb5lkDK295VJ8taTtuQg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjkv/MzIxLzkwNS9zbWFs/bC9haS1nZW5lcmF0/aXZlLW9mLWEtbWFu/LXByYWN0aWNpbmct/bWluZGZ1bG5lc3Mt/YW5kLW1lZGl0YXRp/b24taW4tYS1wZWFj/ZWZ1bC1uYXR1cmFs/LWVudmlyb25tZW50/LXNvbnktYTdzLXJl/YWxpc3RpYy1pbWFn/ZS11bHRyYS1oZC1o/aWdoLWRlc2lnbi12/ZXJ5LWRldGFpbGVk/LWZyZWUtcGhvdG8u/anBn"
              alt="Meditation Hero"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Why People Love Us */}
      <section className="max-w-7xl mx-auto py-12 px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why People Love Us</h2>

        <div className="grid md:grid-cols-3 gap-6 text-center">

          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center">
            <Heart className="w-10 h-10 text-blue-500 mb-3" />
            <h3 className="font-bold text-lg mb-2">Personalized Programs</h3>
            <p className="text-gray-600">Tailored plans for flexibility, strength, stress relief.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center">
            <PlayCircle className="w-10 h-10 text-green-500 mb-3" />
            <h3 className="font-bold text-lg mb-2">Live & On-Demand</h3>
            <p className="text-gray-600">Join real-time classes or practice anytime with library access.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center">
            <Users className="w-10 h-10 text-purple-500 mb-3" />
            <h3 className="font-bold text-lg mb-2">Community & Support</h3>
            <p className="text-gray-600">Weekly events, Q&A with teachers, member challenges.</p>
          </div>

        </div>
      </section>


      {/* Classes Section */}
      <section className="max-w-7xl mx-auto py-12 px-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Classes For Every Need</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {classes.map((cls) => (
            <div key={cls.id} className="bg-white rounded-lg shadow w-64 overflow-hidden">
              <img src="https://imgs.search.brave.com/X_JBkzc7YUXPeWahSU9C09Hgb5lkDK295VJ8taTtuQg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjkv/MzIxLzkwNS9zbWFs/bC9haS1nZW5lcmF0/aXZlLW9mLWEtbWFu/LXByYWN0aWNpbmct/bWluZGZ1bG5lc3Mt/YW5kLW1lZGl0YXRp/b24taW4tYS1wZWFj/ZWZ1bC1uYXR1cmFs/LWVudmlyb25tZW50/LXNvbnktYTdzLXJl/YWxpc3RpYy1pbWFn/ZS11bHRyYS1oZC1o/aWdoLWRlc2lnbi12/ZXJ5LWRldGFpbGVk/LWZyZWUtcGhvdG8u/anBn" alt={cls.title} className="h-40 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-lg">{cls.title}</h3>
                <p className="text-gray-500 text-sm">{cls.level} | {cls.duration} min</p>
                <button className="mt-2 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
                  Join Class
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Simple Steps Section */}
      <section className="bg-green-50 py-12 px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Simple Steps To Inner Peace</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="font-bold mb-2">Choose A Session</h3>
            <p className="text-gray-600">Pick from stress relief, sleep, focus, or healing meditations.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="font-bold mb-2">Press Play & Relax</h3>
            <p className="text-gray-600">Listen to calming voice-guided sessions.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="font-bold mb-2">Practice Anytime</h3>
            <p className="text-gray-600">Practice anytime, anywhere, and feel the difference.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto py-12 px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">What Users Say</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white p-6 rounded-lg shadow w-80">
              <p className="text-gray-700 mb-4">&quot;{t.text}&quot;</p>
              <h4 className="font-bold text-green-600">{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-gray-800 text-white py-12 px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Start Your Mindful Journey</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-gray-700 p-6 rounded-lg shadow w-64 text-center hover:bg-green-600 transition">
            <h3 className="font-bold text-xl mb-2">Master Plan</h3>
            <p className="mb-2">Limited sessions</p>
            <p className="text-2xl font-bold mb-4">$50 / month</p>
            <button className="bg-green-600 py-2 px-4 rounded hover:bg-green-700 transition">
              Choose Plan
            </button>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow w-64 text-center hover:bg-green-600 transition">
            <h3 className="font-bold text-xl mb-2">Premium Plan</h3>
            <p className="mb-2">Unlock 500+ meditations</p>
            <p className="text-2xl font-bold mb-4">$90 / month</p>
            <button className="bg-green-600 py-2 px-4 rounded hover:bg-green-700 transition">
              Choose Plan
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold mb-2">Get In Touch</h4>
            <p>Have questions or need assistance? We’re here to help!</p>
            <input
              type="email"
              placeholder="Your email address"
              className="mt-2 p-2 rounded text-gray-900 w-full md:w-64"
            />
            <button className="bg-green-600 py-2 px-4 rounded mt-2 hover:bg-green-700 transition">
              Subscribe
            </button>
          </div>
          <div>
            <p>4517 Washington Ave, Manchester, Kentucky 39495</p>
            <p>azhar@example.com</p>
            <p>facebook.com</p>
            <p>facebook.com</p>
            <p>03016011122</p>
          </div>
        </div>
        <p className="text-center mt-6 text-gray-400">© 2025 MindSpace. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
