import React, { useState, useEffect } from "react";

// Your image URLs here
const allImages = [
  "https://wallpapercave.com/wp/wp2568896.jpg",
  "https://images8.alphacoders.com/115/1155290.jpg",
  "https://wallpapercave.com/wp/wp6907749.jpg",
  "https://images2.alphacoders.com/111/1116306.jpg",
  "https://wallpapercave.com/wp/wp2585886.jpg",
  "https://wallpapercave.com/wp/wp9155410.jpg",
  "https://wallpaperaccess.com/full/1747191.jpg",
  "https://images8.alphacoders.com/117/1176380.jpg",
  "https://cdn.wallpapersafari.com/69/93/lz5NMI.jpg",
  "https://wallpapercave.com/wp/wp4636915.jpg",
  "https://wallpaperaccess.com/full/317501.jpg",
  "https://images4.alphacoders.com/101/1018898.jpg",
  "https://wallpapercave.com/wp/wp11557460.jpg",
  "https://wallpapercave.com/wp/wp4561390.jpg",
  "https://rare-gallery.com/mushishi.jpg",  // example, check correct URL
];


const getRandomImages = (count: number) => {
  const shuffled = [...allImages].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const RandomImageGrid: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    setImages(getRandomImages(15));
  }, []);

  const refreshImages = () => {
    setImages(getRandomImages(15));
  };

  return (
    <section className="bg-black text-white py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Random Anime Picks</h2>
          <button
            onClick={refreshImages}
            className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition-all"
          >
            Refresh
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {images.map((url, index) => (
            <div key={index} className="overflow-hidden rounded shadow-lg">
              <img
                src={url}
                alt={`Anime ${index}`}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RandomImageGrid;
