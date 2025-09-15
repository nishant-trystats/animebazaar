import React from "react";
import logo from "../assets/png-transparent-akatsuki-logo-removebg-preview.png";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center  text-white px-6  bg-black border-b-gray-600 border-b-2 ">
      {/* Logo + Title */}
      <div className="flex items-center ">
        <div className="relative w-32 h-32">
          <img
            src={logo}
            alt="Akatsuki cloud"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>

        <h1 className="text-3xl font-extrabold tracking-wide text-red-500">
          AnimeBazaar
        </h1>
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className="flex space-x-28 text-lg font-medium">
          <li className="hover:text-red-500 transition-colors cursor-pointer">
            Home
          </li>
          <li className="hover:text-red-500 transition-colors cursor-pointer">
            Category
          </li>
          <li className="hover:text-red-500 transition-colors cursor-pointer">
            About
          </li>
        </ul>
      </nav>

      {/* Auth Links */}
<div>
  <ul className="flex space-x-4 text-base font-semibold">
    <li>
      <button className="px-5 py-2 bg-transparent text-red-500 border border-red-500 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-400">
        Sign Up
      </button>
    </li>
    <li>
      <button className="px-5 py-2 bg-transparent text-white border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white">
        Sign In
      </button>
    </li>
  </ul>
</div>

    </header>
  );
};

export default Header;
