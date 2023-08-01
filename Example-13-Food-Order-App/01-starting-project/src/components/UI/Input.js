import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <labeL htmlFor={props.input.id}>{props.label}</labeL>
      <input id={props.input.id} {...props.input} />
    </div>
  );
};

export default Input;
