// libraries
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
// data
import getBooks from "../services/getBooks";
import getAuthors from "../services/getAuthors";
import postAuthor from "../services/postAuthor";
import postBook from "../services/postBook";
// components
import Header from "./Header";
import Home from "./Home";
import DetailBookCard from "./Cards/DetailBookCard";
import Footer from "./Footer";

function App() {
  // states variables
  const [books, setBooks] = useState([]);
  const [nameBook, setNameBook] = useState("");
  const [authorBook, setAuthorBook] = useState(0);
  const [isbnBook, setIsbnBook] = useState("");
  const [newAuthor, setNewAuthor] = useState({ first_name: "", last_name: "" });
  const [authors, setAuthors] = useState([]);

  // Fetch get
  useEffect(() => {
    getBooks().then((response) => {
      setBooks(response);
    });
  }, [isbnBook]);

  useEffect(() => {
    getAuthors().then((responde) => {
      setAuthors(responde);
    });
  }, [newAuthor]);

  // handler
  const handleNameBook = (value) => {
    setNameBook(value);
  };

  const handleAuthorBook = (value) => {
    setAuthorBook(value);
  };

  const handleIsbnBook = (value) => {
    setIsbnBook(value);
  };

  const handleCreateBook = () => {
    const newBook = {
      name: nameBook,
      author: authorBook,
      isbn: isbnBook,
    };

    postBook(newBook);

    setNameBook("");
    setAuthorBook([0]);
    setIsbnBook("");
  };

  const handleUpdateBook = () => {
    const newBook = {
      name: nameBook,
      author: authorBook,
      isbn: isbnBook,
    };

    setBooks([...books, newBook]);

    setNameBook("");
    setAuthorBook("");
    setIsbnBook("");
  };

  const handleFirstName = (value) => {
    newAuthor.first_name = value;
    setNewAuthor({ ...newAuthor });
  };

  const handleLastName = (value) => {
    newAuthor.last_name = value;
    setNewAuthor({ ...newAuthor });
  };

  const handleCreateAuthor = () => {
    postAuthor(newAuthor);
    setNewAuthor({ first_name: "", last_name: "" });
  };

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              authors={authors}
              books={books}
              nameBook={nameBook}
              authorBook={authorBook}
              isbnBook={isbnBook}
              handleNameBook={handleNameBook}
              handleAuthorBook={handleAuthorBook}
              handleIsbnBook={handleIsbnBook}
              handleCreateBook={handleCreateBook}
              handleUpdateBook={handleUpdateBook}
              firstName={newAuthor.first_name}
              lastName={newAuthor.last_name}
              handleFirstName={handleFirstName}
              handleLastName={handleLastName}
              handleCreateAuthor={handleCreateAuthor}
            />
          }
        />
        <Route
          path="/book/:uuid"
          element={<DetailBookCard books={books} />}
        ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
