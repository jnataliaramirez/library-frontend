const getBooks = async () => {
  const response = await fetch("http://localhost:4000/books");
  const result = await response.json();
  return result;
};

export default getBooks;
