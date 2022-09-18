import { useState } from 'react';
import { getArtworks } from 'services/getArtworks';

const useFetchArtworks = () => {
  const [artworks, setArtworks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // TODO: Refactor method name and param
  const search = async (query: string) => {
    const images = await getArtworks(query);
    setArtworks(images);
    setIsLoading(false);
  };

  return {
    artworks,
    isLoading,
    search,
  };
};

export { useFetchArtworks };
