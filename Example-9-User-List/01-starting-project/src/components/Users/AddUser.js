import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  // this is called array destructuring: useState always returns two elements, and with this syntax we store them in seperate
  // constants EntereduserNamea and setenteredUsername
  // enteredUsername contains the latest snapshot of the field
  // setEnteredUsername contains a function that changes the state of the enteredUsername, causing a rerender cycle
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }

    // forwarding the updated values to the app on each button click
    props.onAddUser(enteredUsername, enteredAge);
    // This will reset both input fields to blanks after submission
    // For the inputs down below, you need to update them so that they have a value={enteredAge}, with that change our current state
    // for the inputs will be captured correctly
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    // event.target.value is the current value of the field
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="text"
          value={enteredAge}
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add User </Button>
      </form>
    </Card>
  );
};

export default AddUser;
