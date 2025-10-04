import React, { useState } from "react";
import RandomImageGrid from '../components/imagesection'

const suggestedKeywords = [
  "strategy",
  "history",
  "veterans",
  "stories",
  "commander in chief",
  "drafts",
  "diaries",
];

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [finalSearchQuery,setfinalSearchQuery] = useState<string|null>(null);

  const handleSearch = () => {
    if (query.trim() === "") return;

    // Avoid duplicates, store only last 5
    setRecentSearches((prev) => {
      const updated = [query, ...prev.filter((q) => q !== query)];
      return updated.slice(0, 5);
    });

    console.log("Search for:", query);
    setfinalSearchQuery(query);
    setQuery(""); // Clear input after search
  };

  const handleKeywordClick = (keyword: string) => {
    setQuery(keyword);
  };

  return (
    <div className="  bg-black text-white py-8">
      <div className="w-full max-w-2xl mx-auto">
        {/* Search Box */}
        <div className="border border-red-500 rounded-md shadow-md p-4 bg-gray-900">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="flex-1 px-4 py-2 bg-gray-800 text-white placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              onClick={handleSearch}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              Search
            </button>
          </div>

          {/* Suggested Keywords */}
          <div className="mt-4">
            <p className="text-sm text-gray-400 mb-2">
              Suggested Keywords: Select a keyword to add it to your search
            </p>
            <div className="flex flex-wrap gap-2">
              {suggestedKeywords.map((word, index) => (
                <button
                  key={index}
                  onClick={() => handleKeywordClick(word)}
                  className="px-3 py-1 rounded-full text-sm font-medium bg-red-900 text-red-300 hover:bg-red-700 hover:text-white transition-colors"
                >
                  {word}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Searches */}
        {recentSearches.length > 0 && (
          <div className="mt-4 p-4 bg-gray-900 text-white rounded-md border border-gray-700">
            <h3 className="text-sm font-semibold text-gray-300 mb-2">
              Recent Searches
            </h3>
            <div className="flex flex-wrap gap-2">
              {recentSearches.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleKeywordClick(item)}
                  className="px-3 py-1 rounded-full text-sm font-medium bg-red-900 text-red-300 hover:bg-red-700 hover:text-white transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <RandomImageGrid searchQuery={finalSearchQuery} />

    </div>

  );
};

export default SearchBar;
