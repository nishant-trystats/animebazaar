import React from "react";
import akatsukiCloud from "../assets/png-transparent-akatsuki-logo-removebg-preview.png";
import backgroundImage from "../assets/4834078.jpg";

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative text-white min-h-[90vh] flex items-center justify-center sm:justify-start px-4 sm:px-8"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-3xl text-left p-6 sm:p-10 rounded-lg">
        {/* Logo */}
        <div className="mb-6 flex justify-start">
          <img
            src={akatsukiCloud}
            alt="Akatsuki Cloud"
            className="h-20 sm:h-32 md:h-40 object-contain animate-pulse drop-shadow-xl"
          />
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-red-600 mb-4 tracking-wide drop-shadow-lg">
          Welcome to AnimeBazaar
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-8 drop-shadow-md">
          Dive into a world of your favorite anime — search, explore, and relive epic moments.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
          <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            Start Exploring
          </button>
          <button className="border border-white bg-red-600 hover:bg-black hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
