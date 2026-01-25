import React from "react";
import { ExpenseItem } from "./ExpenseItem";

export const ExpenseList = ({ expenses, onDelete }) => {
  const totalExpense = expenses.reduce((acc, obj1) => {
    return Number(acc) + Number(obj1.amount);
  }, 0);

  if (expenses.length === 0) {
    return (
      <>
        <h1 className="heading1">Expense List</h1>
        <p className="font-semibold">
          Total Amount:{" "}
          <span className="text-red-700">Rs.{totalExpense.toFixed(2)}</span>
        </p>
        <div className="p-2 border-2 rounded-md border-blue-500 bg-neutral-400 gap-4 grid grid-cols-1 md:grid-cols-4">
          <p className="font-bold text-stone-800">No Expenses Yet</p>
        </div>
      </>
    );
  }

  return (
    <>
      <h1 className="heading1">Expense List</h1>
      <p className="font-semibold">
        Total Amount:{" "}
        <span className="text-red-700">Rs.{totalExpense.toFixed(2)}</span>
      </p>
      <div className="p-2 border-2 rounded-md border-blue-500 bg-neutral-400 gap-4 grid grid-cols-1 md:grid-cols-4">
        {expenses.map((obj) => (
          <ExpenseItem key={obj.id} content={obj} onDelete={onDelete} />
        ))}
      </div>
    </>
  );
};
