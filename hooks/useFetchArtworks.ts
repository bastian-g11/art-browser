import { useState } from 'react';
import { getArtworks } from 'services/getArtworks';

const useFetchArtworks = () => {
  const [artworks, setArtworks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // TODO: Pass in page number as args and isSearch to reset the images displayed
  const search = async (query: string) => {
    setIsLoading(true);
    const images = await getArtworks(query);
    // FIXME: With pagination do [...artworks, images]
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
