import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const DetailBookCard = (props) => {
  const { uuid } = useParams();

  const book = props.books.find((item) => item.uuid.toString() === uuid);

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
