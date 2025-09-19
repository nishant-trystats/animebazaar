

// Fetch curated images from Pexels API
const getImages = async (count: number): Promise<any> => {
  const response = await fetch(`https://api.pexels.com/v1/curated?per_page=${count}`, {
    method: 'GET',
    headers: {
      'Authorization': 'A8zEnGNHoyf6TebHw5CIV0hBKqoc712a0GkzdHVLd0TSVYFduLaca9aE',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch images: ${response.statusText}`);
  }

  return await response.json();
};

// Extract image URLs and return them as an array of strings
export default async function getNRandomImages(count: number): Promise<string[]> {
  const data = await getImages(count);

  if (!data || !data.photos) {
    return [];
  }

  // Extract the landscape image URLs
  const imageUrls = data.photos.map((photo: any) => photo.src?.original|| photo.src?.landscape );

  return imageUrls;
}
