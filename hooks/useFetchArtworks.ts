import { useState, useEffect } from 'react';
import { getArtworks } from 'services/getArtworks';

// TODO: API call should be inside try catch method?
const useFetchArtworks = (category: string) => {
  const [artworks, setArtworks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async (_category: string) => {
    const images = await getArtworks(_category);
    setArtworks(images);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages(category);
  }, []);

  return {
    artworks,
    isLoading,
  };
};

export { useFetchArtworks };
