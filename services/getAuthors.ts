import { ArtObject } from 'types';

// TODO: Error handling
const getAuthors = async (query: string) => {
  // TODO: query to lowercase?
  const url = `https://www.rijksmuseum.nl/api/en/collection?key=KHn4xrLx&imgonly=True&q=${query}`;
  const response = await fetch(url);
  const { artObjects } = await response.json();

  // eslint-disable-next-line no-console

  // // TODO: Return just the used data?
  const artworks = artObjects.map((artwork: ArtObject) => ({
    id: artwork.id,
    title: artwork.title,
  }));

  return artworks;
};

export { getAuthors };
