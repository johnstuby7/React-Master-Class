import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState();

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      // get previous entry and update with uname/uage entered values
      return [...prevUsersList, { name: uName, age: uAge }];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
