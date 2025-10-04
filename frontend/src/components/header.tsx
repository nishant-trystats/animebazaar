import React, { useState } from "react";
import logo from "../assets/png-transparent-akatsuki-logo-removebg-preview.png";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black border-b-2 border-b-gray-600 text-white px-4 md:px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo + Title */}
        <div className="flex items-center space-x-4">
          <div className="relative w-16 h-16 md:w-20 md:h-20">
            <img
              src={logo}
              alt="Akatsuki cloud"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide text-red-500">
            AnimeBazaar
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-10 text-lg font-medium">
          <ul className="flex space-x-8">
            <li className="hover:text-red-500 transition-colors cursor-pointer">Home</li>
            <li className="hover:text-red-500 transition-colors cursor-pointer">Category</li>
            <li className="hover:text-red-500 transition-colors cursor-pointer">About</li>
          </ul>
        </nav>

        {/* Auth Buttons Desktop */}
        <div className="hidden md:flex space-x-4 ml-6">
          <button className="px-4 py-2 bg-transparent text-red-500 border border-red-500 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-400">
            Sign Up
          </button>
          <button className="px-4 py-2 bg-transparent text-white border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white">
            Sign In
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden ml-2 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            // Close Icon (X)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-red-500"
            >
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-gray-900 rounded-md shadow-lg p-4">
          <ul className="flex flex-col space-y-4 text-center">
            <li className="hover:text-red-500 cursor-pointer">Home</li>
            <li className="hover:text-red-500 cursor-pointer">Category</li>
            <li className="hover:text-red-500 cursor-pointer">About</li>
            <li className="mt-2">
              <button className="w-full px-4 py-2 bg-transparent text-red-500 border border-red-500 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out">
                Sign Up
              </button>
            </li>
            <li>
              <button className="w-full px-4 py-2 bg-transparent text-white border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
                Sign In
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
