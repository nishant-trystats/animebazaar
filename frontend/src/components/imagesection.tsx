import React, { useState, useEffect } from "react";
import getNRandomImages from "../utils/getRandomImages";

const RandomImageGrid: React.FC = () => {
  const [fetchedImages, setFetchedImages] = useState<string[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

 const randomimage = (array: string[]): string[] => {
  const uniqueImages = new Set<string>();

  // Prevent infinite loop if array has fewer items than 15
  const maxCount = Math.min(15, array.length);

  while (uniqueImages.size < maxCount) {
    const random = array[Math.floor(Math.random() * array.length)];
    uniqueImages.add(random);
  }

  return Array.from(uniqueImages);
};


  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      setError(null);
      try {
        const Nimages = await getNRandomImages(75);
        setFetchedImages(Nimages);

        setImages(randomimage(Nimages));
      } catch (err) {
        setError("Failed to load images.");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const refreshImages = async () => {
    setLoading(true);
    setError(null);
    try {
      // const fetchedImages = await getNRandomImages(15);
      setImages(randomimage(fetchedImages));
    } catch (err) {
      setError("Failed to load images.");
    } finally {
      setLoading(false);
    }
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

        {loading && <p>Loading images...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {!loading && !error && images.length > 0 && (
<div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4">
  {images.map((url, index) => (
    <img
      key={index}
      src={url}
      alt={`Image ${index + 1}`}
      loading="lazy"
      className="mb-4 rounded shadow-lg w-full"
    />
  ))}
</div>

        )}

        {!loading && !error && images.length === 0 && <p>No images found.</p>}
      </div>
    </section>
  );
};

export default RandomImageGrid;
