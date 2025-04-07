import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="w-full h-screen bg-cover bg-center relative flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('../images/E_OI6qMUUAYIYQg.jpg')", 
      }}
    >
      {/* Blur overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-peach-100 drop-shadow-xl">
          Discover the <br/>Beauty of Jharkhand
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200 drop-shadow-sm">
          Explore 24 districts of natural landscapes,
          <br/>spiritual sanctuaries, art & culture, and more.
        </p>
        <Link
          to="/districts"
          className="bg-peach-600 hover:bg-peach-700 text-white py-3 px-6 rounded-full font-semibold transition-all duration-300 shadow-lg hover:scale-105"
        >
          Start Exploring
        </Link>
      </div>
    </section>
  );
}
