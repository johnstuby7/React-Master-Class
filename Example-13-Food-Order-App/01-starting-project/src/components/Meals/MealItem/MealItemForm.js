import React from "react";
import classes from "./MealItemForm.module.css";
import MealItem from "./Mealltem";

const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <MealItem />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
