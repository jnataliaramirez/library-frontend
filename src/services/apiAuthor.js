const apiAuthor = (newAuthor) => {
  return fetch('http://localhost:4000/author', {
    method: 'POST',
    body: JSON.stringify(newAuthor),
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

export default apiAuthor;
