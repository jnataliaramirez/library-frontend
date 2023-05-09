const getBook = async (uuid) => {
  const response = await fetch(`http://localhost:4000/book/${uuid}`);
  const result = await response.json();
  return result;
};

export default getBook;
