// TODO: Error handling
const getArtworks = async (query: string) => {
  // TODO: query to lowercase?

  const response = await fetch(`/api/artworks?query=${query}`);
  const data = await response.json();

  return data;
};

export { getArtworks };
