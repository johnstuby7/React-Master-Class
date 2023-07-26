import "./Expenses.css";
import ExpenseItem from "../Expenses/ExpenseItem";
import Card from "../UI/Card";
import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";

// Forward it to here and
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  let filterInfoText = "2024, 2025 & 2026";

  if (filteredYear === "2024") {
    filterInfoText = "2023, 2025 & 2026";
  } else if (filteredYear === "2025") {
    filterInfoText = "2023, 2024 & 2026";
  } else {
    filterInfoText = "2023, 2024 & 2025";
  }

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  //  will return true if the year stored in the date is the same as the year stored in the filter, thus updating the list.
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
