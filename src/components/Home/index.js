// components
import Header from "../Header"
import Footer from "../Footer";
import InfoCard from "../Cards/InfoCard";
import FormCreateAuthor from "../Forms/CreateAuthor";
// styles
import "../../styles/reset.css";
import "../../styles/App.css";
import FormNewBook from "../Forms/NewBook";

const Home = (props) => {
  const renderBooks = () => {
    return props.books.map((book, i) => {
      return (
        <li className="library__card" id={book.uuid} key={`book-${book.uuid}`}>
          <InfoCard book={book} />
        </li>
      );
    });
  };

  return (
    <>
      <Header />
      <main className="main">
        <div className="content-wrapper">
          <section className="main-books">
            <h2 className="main__title">The books</h2>
            <ul className="library">{renderBooks()}</ul>
          </section>
          <section className="main-form">
            <div className="form-wrap">
              <FormNewBook
                nameBook={props.nameBook}
                authorBook={props.authorBook}
                isbnBook={props.isbnBook}
                handleNameBook={props.handleNameBook}
                handleAuthorBook={props.handleAuthorBook}
                handleIsbnBook={props.handleIsbnBook}
                handleCreateBook={props.handleCreateBook}
                handleUpdateBook={props.handleUpdateBook}
                authors={props.authors}
              />
              <FormCreateAuthor
                firstName={props.firstName}
                lastName={props.lastName}
                handleFirstName={props.handleFirstName}
                handleLastName={props.handleLastName}
                handleCreateAuthor={props.handleCreateAuthor}
              />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
