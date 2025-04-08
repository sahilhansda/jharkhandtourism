import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import jtgLogo from '../assets/images/jharkhand-tourism-logo.png';

const Header = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/30 backdrop-blur-md shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-peach-700 hover:text-peach-900 transition-colors duration-300">
            <img src={jtgLogo} alt="Jharkhand Tourism Logo" className="w-40 object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-black font-medium">
            <Link to="/" className="hover:text-peach-700 transition-colors duration-300">
              Home
            </Link>

            <div
              className="relative group"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setTimeout(() => setAboutOpen(false), 3000)}
            >
              <button className="hover:text-peach-700 transition-colors duration-300">
                About Jharkhand
              </button>
              <div
                className={`absolute bg-white shadow-md rounded-md py-2 w-48 mt-2 transition-all duration-300 transform ${aboutOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
              >
                <Link to="/about/history" className="block px-4 py-2 hover:bg-gray-100">History</Link>
                <Link to="/about/culture" className="block px-4 py-2 hover:bg-gray-100">Culture</Link>
                <Link to="/about/festivals" className="block px-4 py-2 hover:bg-gray-100">Festivals</Link>
              </div>
            </div>

            <Link to="/explore" className="hover:text-peach-700 transition-colors duration-300">
              Explore
            </Link>

            <Link to="/contact" className="hover:text-peach-700 transition-colors duration-300">
              Contact
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileOpen(!mobileOpen)} className="text-peach-700 focus:outline-none">
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden flex flex-col gap-4 mt-4 pb-4 text-black font-medium animate-fade-in-down">
            <Link to="/" className="hover:text-peach-700 transition-colors duration-300" onClick={() => setMobileOpen(false)}>
              Home
            </Link>
            <div>
              <p className="text-peach-700 font-semibold">About Jharkhand</p>
              <div className="ml-4 space-y-1">
                <Link to="/about/history" className="block hover:text-peach-600" onClick={() => setMobileOpen(false)}>History</Link>
                <Link to="/about/culture" className="block hover:text-peach-600" onClick={() => setMobileOpen(false)}>Culture</Link>
                <Link to="/about/festivals" className="block hover:text-peach-600" onClick={() => setMobileOpen(false)}>Festivals</Link>
              </div>
            </div>
            <Link to="/explore" className="hover:text-peach-700 transition-colors duration-300" onClick={() => setMobileOpen(false)}>
              Explore
            </Link>
            <Link to="/contact" className="hover:text-peach-700 transition-colors duration-300" onClick={() => setMobileOpen(false)}>
              Contact
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;