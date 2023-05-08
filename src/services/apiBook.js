const apiBook = (newBook) => {
  return fetch('http://localhost:4000/book', {
    method: 'POST',
    body: JSON.stringify(newBook),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => console.log('Error:', error));
};

export default apiBook;
