import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Heart, PlayCircle, Users } from "lucide-react";
import sarah from "../images/sarah.png"
import Mike from "../images/Mike.png"
import Emma from "../images/Emma.png"
import David from "../images/David.png"
import Lisa from "../images/Lisa.png"
import James from "../images/James.png"

// Data
const classes = [
  { id: 1, title: "Vinyasa", duration: 45, level: "Intermediate", image: "https://imgs.search.brave.com/X_JBkzc7YUXPeWahSU9C09Hgb5lkDK295VJ8taTtuQg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjkv/MzIxLzkwNS9zbWFs/bC9haS1nZW5lcmF0/aXZlLW9mLWEtbWFu/LXByYWN0aWNpbmct/bWluZGZ1bG5lc3Mt/YW5kLW1lZGl0YXRp/b24taW4tYS1wZWFj/ZWZ1bC1uYXR1cmFs/LWVudmlyb25tZW50/LXNvbnktYTdzLXJl/YWxpc3RpYy1pbWFn/ZS11bHRyYS1oZC1o/aWdoLWRlc2lnbi12/ZXJ5LWRldGFpbGVk/LWZyZWUtcGhvdG8u/anBn" },
  { id: 2, title: "Hatha", duration: 50, level: "Beginner", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHDZoZPGPo_D_1IR2co_X012S2c-iqsF9aJQ&s" },
  { id: 3, title: "Corporate Flow", duration: 30, level: "All Levels", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnhgZrDWughzGPwX6tS1bVJuEcCwFEqYZ-tQ&s" },
  { id: 4, title: "Flow", duration: 30, level: "All Levels", image: "https://imgs.search.brave.com/NT7tonOQu6ELV7Y4twq0td52wZZ5p1g_1ENOSzNpruw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9odW1hbi1oZWFk/LXdpdGgtZ2xvd2lu/Zy1uZXVyb25zLWJy/YWluLWVzb3Rlcmlj/LW1lZGl0YXRpb24t/Y29uY2VwdC1jb25u/ZWN0aW9uLXdpdGgt/b3RoZXItd29ybGRz/Z2VuZXJhdGl2ZS1h/aV84NDEyMjktNTMu/anBnP3NlbXQ9YWlz/X2h5YnJpZCZ3PTc0/MCZxPTgw" },
];
// User Reviews Data
  const reviews = [
    {
      name: "Sarah Johnson",
      location: "Birmingham",
      review:
        "Mindspace has completely changed my daily routine. The guided meditations help me stay calm and focused throughout the day. I feel more balanced and in control of my emotions.",
      rating: "5.0",
      img: sarah,
    },
    {
      name: "Mike Thompson",
      location: "Solihull",
      review:
        "As someone who deals with constant stress at work, Mindspace has been a life-saver. The breathing sessions and sleep stories have improved my sleep quality dramatically.",
      rating: "5.0",
      img: Mike,
    },
    {
      name: "Emma Williams",
      location: "West Bromwich",
      review:
        "I never thought meditation apps actually worked until I tried Mindspace. The calming music and short sessions are perfect for my busy schedule. Highly recommended!",
      rating: "5.0",
      img: Emma,
    },
    {
      name: "David Brown",
      location: "Coventry",
      review:
        "Mindspace helped me deal with anxiety during a very tough period of my life. The voice guidance feels warm and comforting. It has truly made a difference.",
      rating: "5.0",
      img: David,
    },
    {
      name: "Lisa Davis",
      location: "Dudley",
      review:
        "I use Mindspace every morning after waking up. It helps set the tone for my day and keeps me mentally centered. The app design is beautiful and easy to use.",
      rating: "5.0",
      img: Lisa,
    },
    {
      name: "James Wilson",
      location: "Walsall",
      review:
         "The daily motivation sessions and relaxation exercises on Mindspace have helped me break out of negative thought patterns. I feel happier and more hopeful now.",
      rating: "5.0",
      img: James,
    },
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
              Access guided meditations, breathing exercises, and daily wellness tools all in one place. Stay consistent and track your progress effortlessly.
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
              <img src={cls.image} alt={cls.title} className="h-40 w-full object-cover" />
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
    <section
      id="reviews"
      className="bg-white w-full pt-20 pb-16 px-5 sm:px-10 overflow-hidden"
    >
      {/* Section Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          What Users Say
        </h2>
        <p className="text-gray-400 mt-2 text-sm tracking-wide uppercase">
          Real experiences from people who found peace, focus, and balance with Mindspace.
        </p>  
      </div>

      <div className="w-full flex justify-center py-0 relative">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerGroup={1}
          centeredSlides={false}
          slidesOffsetBefore={0}
          slidesOffsetAfter={0}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full max-w-6xl pb-12"
          style={{
            overflow: "hidden",
            paddingTop: "3rem",
            paddingBottom: "3.5rem",
            minHeight: "480px",
          }}
        >
          {reviews.map((card, i) => (
            <SwiperSlide
              key={i}
              className="flex justify-center"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "stretch",
              }}
            >
              <div
                className="bg-gray-50 rounded-2xl pt-16 pb-0 px-5 text-center shadow-md w-full max-w-xs relative transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{
                  minHeight: "280px",
                  maxHeight: "340px",
                }}
              >
                {/* Profile Image */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-20">
                  <img
                    src={card.img}
                    alt={card.name}
                    className="w-20 h-20 rounded-full border-4 border-gray-700 object-cover bg-white"
                  />
                </div>

                <p className="text-sm my-4 leading-relaxed">
                  "{card.review}"
                </p>
                <h4 className="font-semibold mb-1">{card.name}</h4>
                <p className="text-gray-500 text-sm mb-2">{card.location}</p>

                <div className="flex justify-center items-center mt-2">
                  <span className="text-yellow-400 font-bold text-base">
                    {card.rating}
                  </span>
                  <span className="text-yellow-400 text-lg ml-1">★</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Global CSS for Swiper Pagination */}
      <style>{`
        .swiper-pagination {
          margin-top: 1rem !important;
          text-align: center !important;
        }

        .swiper-pagination-bullet {
          background: #d1d5db !important;
          opacity: 1 !important;
          transition: background 0.3s ease, transform 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          background: #3d3e42 !important;
          transform: scale(1.2);
        }
      `}</style>
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
            <p>4517 F-7 islamabad stret 14</p>
            <p>azhar@example.com</p>
            <p>facebook.com</p>
            <p>03016011122</p>
          </div>
        </div>
        <p className="text-center mt-6 text-gray-400">© 2025 MindSpace. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
