import React from "react";
import { Facebook, Twitter, Instagram, Github } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-300 border-t-2 border-gray-700 px-8 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-extrabold text-red-500">AnimeBazaar</h2>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            Your gateway to the world of anime merch, art, and collectibles.
            Built for fans, by fans. ❤️
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:text-red-500 transition-colors cursor-pointer">
              Home
            </li>
            <li className="hover:text-red-500 transition-colors cursor-pointer">
              Category
            </li>
            <li className="hover:text-red-500 transition-colors cursor-pointer">
              About
            </li>
            <li className="hover:text-red-500 transition-colors cursor-pointer">
              Contact
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-6">
            <a
              href="#"
              className="p-2 rounded-full border border-gray-600 hover:border-red-500 hover:text-red-500 transition-all"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full border border-gray-600 hover:border-red-500 hover:text-red-500 transition-all"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full border border-gray-600 hover:border-red-500 hover:text-red-500 transition-all"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full border border-gray-600 hover:border-red-500 hover:text-red-500 transition-all"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} AnimeBazaar. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
