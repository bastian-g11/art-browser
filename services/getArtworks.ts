import { ArtObject } from 'types';

// TODO: Error handling
const getArtworks = async (query: string) => {
  const url = `https://www.rijksmuseum.nl/api/nl/collection?key=KHn4xrLx&q=${query}`;
  const response = await fetch(url);
  const { artObjects } = await response.json();

  // TODO: Return just the used data?
  const artworks = artObjects
    .filter((artwork: ArtObject) => artwork.hasImage === true)
    .map((artwork: ArtObject) => ({
      id: artwork.id,
      title: artwork.title,
      author: artwork.principalOrFirstMaker,
      site_link: artwork.links.web,
      img_link: artwork.webImage.url,
    }));

  return artworks;
};

export { getArtworks };
