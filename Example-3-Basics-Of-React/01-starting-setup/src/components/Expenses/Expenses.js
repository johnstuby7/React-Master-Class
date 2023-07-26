import "./Expenses.css";
import ExpenseItem from "../Expenses/ExpenseItem";
import Card from "../UI/Card";
import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";

// Forward it to here and
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");
  const [filteredInfoText, setFilterInfoText] = useState("2023, 2024 & 2025");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    if (selectedYear === "2023") {
      setFilterInfoText("2024, 2025 & 2026");
    } else if (selectedYear === "2024") {
      setFilterInfoText("2023, 2025 & 2026");
    } else if (selectedYear === "2025") {
      setFilterInfoText("2023, 2024 & 2026");
    } else {
      setFilterInfoText("2023, 2024 & 2025");
    }
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <p>Data for years {filteredInfoText} is hidden</p>
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
};

export default Expenses;