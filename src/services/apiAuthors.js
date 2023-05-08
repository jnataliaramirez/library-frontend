const apiAuthors = () => {
  return fetch('http://localhost:4000/authors')
    .then((response) => response.json())
    .then((result) => {
      return result;
    });
};

export default apiAuthors;
