import React, { useState } from "react";
import { Link } from "react-router-dom";
import jtgLogo from '../assets/images/jtg-logo.png';

const Header = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/30 backdrop-blur-md shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-peach-700 hover:text-peach-900 transition-colors duration-300">
          <img
  src={jtgLogo}
  alt="Jharkhand Tourism Logo"
  className="w-20 object-contain"
/>
          </Link>

          <nav className="flex items-center gap-6 text-black font-medium">
            <Link to="/" className="hover:text-peach-700 transition-colors duration-300">
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setTimeout(() => setAboutOpen(false), 3000)}
            >
              <button className="hover:text-peach-700 transition-colors duration-300">
                About Jharkhand
              </button>
              <div
                className={`absolute bg-white shadow-md rounded-md py-2 w-48 mt-2 transition-opacity duration-300 ${aboutOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
              >
                <Link to="/about/history" className="block px-4 py-2 hover:bg-gray-100">History</Link>
                <Link to="/about/culture" className="block px-4 py-2 hover:bg-gray-100">Culture</Link>
                <Link to="/about/festivals" className="block px-4 py-2 hover:bg-gray-100">Festivals</Link>
              </div>
            </div>

            <div
              className="relative"
              onMouseEnter={() => setExploreOpen(true)}
              onMouseLeave={() => setTimeout(() => setExploreOpen(false), 3000)}
            >
              <button className="hover:text-peach-700 transition-colors duration-300">
                Explore
              </button>
              <div
                className={`absolute bg-white shadow-md rounded-md py-2 w-48 mt-2 transition-opacity duration-300 ${exploreOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
              >
                <Link to="/districts" className="block px-4 py-2 hover:bg-gray-100">Districts</Link>
                <Link to="/tourism-types" className="block px-4 py-2 hover:bg-gray-100">Tourism Types</Link>
                <Link to="/map" className="block px-4 py-2 hover:bg-gray-100">Map</Link>
              </div>
            </div>

            <Link to="/contact" className="hover:text-peach-700 transition-colors duration-300">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;