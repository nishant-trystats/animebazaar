export default async function getNRandomImages(
  count: number,
  query?: string|null
): Promise<string[]> {
  const API_KEY = "A8zEnGNHoyf6TebHw5CIV0hBKqoc712a0GkzdHVLd0TSVYFduLaca9aE";
  const BASE_URL = "https://api.pexels.com/v1";

  // Choose endpoint based on whether a search query exists
  const endpoint = query
    ? `${BASE_URL}/search?query=${encodeURIComponent(query)}&per_page=${count}`
    : `${BASE_URL}/curated?per_page=${count}`;

  try {
    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        Authorization: API_KEY,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch images: ${response.statusText}`);
    }

    const data = await response.json();

    if (!data?.photos?.length) {
      return [];
    }

    // Extract landscape or original image URLs
    const imageUrls = data.photos.map(
      (photo: any) => photo.src?.landscape || photo.src?.original 
    );

    return imageUrls;
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
}
