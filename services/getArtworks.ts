// TODO: Error handling
const getArtworks = async (query: string) => {
  const url = `https://www.rijksmuseum.nl/api/nl/collection?key=KHn4xrLx&q=${query}`;
  const response = await fetch(url);
  const { artObjects } = await response.json();

  // TODO: Return just the used data?
  const artObjectsWithImage = artObjects.filter(
    artObject => artObject.hasImage === true
  );

  return artObjectsWithImage;
};

export { getArtworks };
