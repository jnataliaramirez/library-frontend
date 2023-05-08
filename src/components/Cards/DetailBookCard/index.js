import { Link } from "react-router-dom";

const DetailBookCard = (props) => {
  return (
    <div className="card">
      <section id={props.book} className="library__card">
        <h4 className="library__card--book">
          <span className="bold">Book: </span>
          {props.book.name}
        </h4>
        <p className="library__card--author">
          <span className="bold">Author: </span>
          {props.book.author.first_name} {props.book.author.last_name}
        </p>
        <p className="library__card--isbn">
          <span className="bold">ISBN: </span>
          {props.book.isbn}
        </p>
        <Link to={`/`}>
          <button className="btn library__card--btn">Return</button>
        </Link>
      </section>
    </div>
  );
};

export default DetailBookCard;
