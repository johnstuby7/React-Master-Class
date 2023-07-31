import classes from "./Card.module.css";

// props.children will pass the content of the form into the card component
// To dynamically pass in the various styles for the file we are using the `${}`
const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
