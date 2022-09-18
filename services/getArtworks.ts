import { ArtObject } from 'types';

// TODO: Error handling
const getArtworks = async (query: string) => {
  // TODO: query to lowercase?

  // TODO: Use Axios
  const url = `https://www.rijksmuseum.nl/api/en/collection?key=KHn4xrLx&imgonly=True&q=${query}`;
  const response = await fetch(url);
  const { artObjects } = await response.json();

  // TODO: Return just the used data?
  const artworks = artObjects.map((artwork: ArtObject) => ({
    id: artwork.id,
    title: artwork.title,
    author: artwork.principalOrFirstMaker,
    site_link: artwork.links.web,
    img_link: artwork.webImage.url,
  }));

  return artworks;
};

export { getArtworks };
