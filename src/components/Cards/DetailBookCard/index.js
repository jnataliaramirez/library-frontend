import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import getBook from "../../../services/getBook";

const DetailBookCard = () => {
  const { uuid } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    getBook(uuid).then((response) => {
      setBook(response);
    });
  }, [uuid]);

  if (!book) {
    return <div>Cargando...⏳ </div>;
  }

  return (
    <div className="card">
      <section className="library__card">
        <h4 className="library__card--book">
          <span className="bold">Book: </span>
          {book.name}
        </h4>
        <p className="library__card--author">
          <span className="bold">Author: </span>
          {book.author.first_name} {book.author.last_name}
        </p>
        <p className="library__card--isbn">
          <span className="bold">ISBN: </span>
          {book.isbn}
        </p>
        <Link to={`/`}>
          <button className="btn library__card--btn">Return</button>
        </Link>
      </section>
    </div>
  );
};

export default DetailBookCard;
