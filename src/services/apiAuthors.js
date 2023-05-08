const apiAuthors = async () => {
  const response = await fetch('http://localhost:4000/authors');
  const result = await response.json();
  return result;
};

export default apiAuthors;
