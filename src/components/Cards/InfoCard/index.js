import { Link } from "react-router-dom";

const InfoCard = (props) => {
  return (
    <Link to={`/book/${props.book.uuid}`}>
      <h4 className="library__card--book">{props.book.name}</h4>
      <button className="btn library__card--btn">More info</button>
    </Link>
  );
};

export default InfoCard;
