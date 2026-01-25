import { useState, useRef } from "react";

export const ExpenseForm = ({ onAddExpense }) => {
  const [input, setInput] = useState({ title: "", amount: "" });
  const titleRef = useRef(null);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(input);
    if (!input.title || !input.amount) {
      return alert("Please fill all fields");
    }
    const newExpesne = {
      id: Date.now(),
      title: input.title,
      amount: input.amount,
    };
    onAddExpense(newExpesne);
    //Reset form
    setInput({ title: "", amount: "" });
    titleRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit} className="form-control">
      <input
        type="text"
        placeholder="Title"
        value={input.title}
        name="title"
        onChange={handleChange}
        className="input-field"
        ref={titleRef}
        required
      />

      <input
        type="number"
        placeholder="Amount in indian rupee"
        value={input.amount}
        min={0}
        onChange={handleChange}
        name="amount"
        className="input-field"
      />
      <button type="submit" className="btn">
        Add
      </button>
    </form>
  );
};
