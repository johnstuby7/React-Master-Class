import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
    };
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData />
    </div>
  );
};

export default NewExpense;
