import { useState, useEffect } from 'react';
import { getArtworks } from 'services/getArtworks';

const useFetchArtworks = (query: string) => {
  const [artworks, setArtworks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // TODO: Refactor method name and param
  const search = async (_query: string) => {
    const images = await getArtworks(_query);
    setArtworks(images);
    setIsLoading(false);
  };

  useEffect(() => {
    search(query);
  }, [query]);

  return {
    artworks,
    isLoading,
  };
};

export { useFetchArtworks };
