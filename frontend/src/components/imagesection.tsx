import React, { useState, useEffect, useRef } from "react";
import getNRandomImages from "../utils/getRandomImages";

// Define the number of images to show per page
const IMAGES_PER_PAGE = 15;

interface RandomImageGridparam{
  searchQuery?:string|null
}

const RandomImageGrid: React.FC<RandomImageGridparam> = ({searchQuery}) => {
  const [fetchedImages, setFetchedImages] = useState<string[]>([]);
  // Use 'displayedImages' for the current page's slice
  const [displayedImages, setDisplayedImages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const top = useRef<HTMLDivElement | null>(null);

  // State for pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = Math.ceil(fetchedImages.length / IMAGES_PER_PAGE);

  // --- Image Fetching Logic (Only runs on mount) ---
  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      setError(null);
      try {
        // Fetch a larger set of images once
        const Nimages = await getNRandomImages(75,searchQuery);
        setFetchedImages(Nimages);
        // The first page will be calculated in the next useEffect
      } catch (err) {
        console.error(err); // Log the actual error for debugging
        setError("Failed to load images.");
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, [searchQuery]); // Empty dependency array ensures it runs only once

  // --- Pagination Logic (Runs when fetchedImages or currentPage changes) ---
  useEffect(() => {
    if (fetchedImages.length > 0) {
      const startIndex = (currentPage - 1) * IMAGES_PER_PAGE;
      const endIndex = startIndex + IMAGES_PER_PAGE;

      // Slice the fetched array to get the images for the current page
      const imagesForPage = fetchedImages.slice(startIndex, endIndex);
      setDisplayedImages(imagesForPage);
    }
  }, [fetchedImages, currentPage]);

  // --- Pagination Handlers ---
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
      // Optional: scroll to top of the grid when changing pages
      top.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
      // Optional: scroll to top of the grid when changing pages
      top.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-black text-white py-10 px-4" ref={top}>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Random Picks - Page {currentPage} of {totalPages}</h2>
          {/* Refresh button removed, replaced by pagination controls below */}
        </div>

        {loading && <p>Loading images...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {!loading && !error && displayedImages.length > 0 && (
          <>
            <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4">
              {displayedImages.map((url, index) => (
                // Key should be unique across all pages, so use a formula based on page and index
                <LazyImage
                  key={`page-${currentPage}-img-${index}`}
                  src={url}
                  alt={`Image ${index + 1}`}
                />
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center mt-8 gap-4">
              <button
                onClick={goToPrevPage}
                disabled={currentPage === 1}
                className="bg-gray-600 text-white px-6 py-2 rounded disabled:opacity-50 hover:bg-gray-700 transition-all"
              >
                Previous
              </button>

              <span className="text-lg">
                Page {currentPage} / {totalPages}
              </span>

              <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages || totalPages === 0}
                className="bg-red-600 text-white px-6 py-2 rounded disabled:opacity-50 hover:bg-red-700 transition-all"
              >
                Next
              </button>
            </div>
          </>
        )}

        {!loading && !error && fetchedImages.length === 0 && <p>No images found.</p>}
      </div>
    </section>
  );
};

interface LazyImageProps {
  src: string;
  alt: string;
}

// LazyImage component remains the same for efficient loading
const LazyImage: React.FC<LazyImageProps> = ({ src, alt }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef<HTMLDivElement | null>(null); // Changed to HTMLDivElement to match ref usage

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) observer.observe(imgRef.current);

    return () => {
      if (imgRef.current) observer.unobserve(imgRef.current);
    };
  }, []);

  return (
    <div
      ref={imgRef}
      className="mb-4 rounded shadow-lg w-full bg-gray-800 animate-pulse min-h-[200px]"
    >
      {isVisible && (
        <img
          src={src}
          alt={alt}
          // Removed 'loading="lazy"' from here as the IntersectionObserver already handles lazy loading
          className="rounded shadow-lg w-full h-auto object-cover"
        />
      )}
    </div>
  );
};

export default RandomImageGrid;