const apiBooks = () => {
  return fetch('http://localhost:4000/books')
    .then(response => response.json())
    .then(result => {
      return result;
   });
};

export default apiBooks;
