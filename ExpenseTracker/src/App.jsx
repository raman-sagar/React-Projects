import { useState, useEffect } from "react";
import { ExpenseForm } from "./components/ExpenseForm";
import { ExpenseList } from "./components/ExpenseList";
import "./index.css";
function App() {
  const [expense, setExpense] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expense));
  }, [expense]);

  const addExpense = (obj1) => {
    setExpense((prev) => [...prev, obj1]);
  };

  const deleteExpense = (id) => {
    if (confirm("Are you sure?")) {
      const arr = expense.filter((obj1) => {
        if (obj1.id !== id) return obj1;
      });
      setExpense(arr);
    }
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="flex justify-center">
          <h1 className="text-2xl font-bold mb-4 text-indigo-600">
            Expense Tracker Dashboard
          </h1>
        </div>
        <ExpenseForm onAddExpense={addExpense} />
        <ExpenseList expenses={expense} onDelete={deleteExpense} />
      </div>
    </>
  );
}

export default App;
