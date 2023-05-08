const apiBook = async (newBook) => {
  try {
    const response = await fetch("http://localhost:4000/book", {
      method: "POST",
      body: JSON.stringify(newBook),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    return console.log("Error:", error);
  }
};

export default apiBook;
