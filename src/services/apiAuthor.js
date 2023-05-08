const apiAuthor = async (newAuthor) => {
  try {
    const response = await fetch('http://localhost:4000/author', {
      method: 'POST',
      body: JSON.stringify(newAuthor),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    return console.log('Error:', error);
  }
};

export default apiAuthor;
