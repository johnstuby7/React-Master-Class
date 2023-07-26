import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: "January 16, 2023",
    },
    { id: "e2", title: "New TV", amount: 799.49, date: "January 1 2021" },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: "January 5 2023",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: "January 6 2023",
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expenses);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
