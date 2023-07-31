import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModule.module.css";

const ErrorModel = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onConfirm}>
      <div></div>

      <Card className={classes.module}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModel;
