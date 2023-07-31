import react from "React";
import classes from "./Card.module.css";

// props.children will pass the content of the form into the card component
const Card = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
