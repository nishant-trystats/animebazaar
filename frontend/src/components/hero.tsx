import React from "react";
import akatsukiCloud from "../assets/png-transparent-akatsuki-logo-removebg-preview.png";
import backgroundImage from "../assets/4834078.jpg"; // Import the background image

const HeroSection: React.FC = () => {
  return (
    <section
      className="text-white min-h-[90vh] flex items-center justify-start px-8"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-3xl text-left p-10 rounded-lg pt-40">
        {/* Logo */}
        <div className="mb-6 flex justify-start">
          <img
            src={akatsukiCloud}
            alt="Akatsuki Cloud"
            className="h-50 object-contain animate-pulse"
          />
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-red-600 mb-4 tracking-wide">
          Welcome to AnimeBazaar
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-black mb-8">
          Dive into a world of your favorite anime — search, explore, and relive epic moments.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-start space-x-4">
          <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full font-semibold transition-all duration-300">
            Start Exploring
          </button>
          <button className="border bg-red-600 border-white hover:bg-black hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
