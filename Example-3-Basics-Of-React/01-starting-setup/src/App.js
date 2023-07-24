import React from "react";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: "January 16, 2020",
    },
    { id: "e2", title: "New TV", amount: 799.49, date: "January 1 2021" },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: "January 5 2022",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: "January 6 2023",
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
