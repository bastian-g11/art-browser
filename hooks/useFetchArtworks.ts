import { useState, useEffect } from 'react';
import { getArtworks } from 'services/getArtworks';

const useFetchArtworks = (category: string) => {
  const [artworks, setArtworks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // TODO: Refactor method name
  const search = async (_category: string) => {
    const images = await getArtworks(_category);
    setArtworks(images);
    setIsLoading(false);
  };

  useEffect(() => {
    search(category);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    artworks,
    isLoading,
  };
};

export { useFetchArtworks };
