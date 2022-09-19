const getAuthors = async (query: string) => {
  try {
    const response = await fetch(`/api/authors?query=${query}`);
    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
};

export { getAuthors };
