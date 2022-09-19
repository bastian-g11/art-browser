const getArtworks = async (query: string) => {
  try {
    const response = await fetch(`/api/artworks?query=${query}`);
    const data = await response.json();

    return data;
  } catch (err) {
    return err;
  }
};

export { getArtworks };
