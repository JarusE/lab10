import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import Filter from "./components/Filter";
import ExpenseChart from "./components/ExpenseChart";
import "./App.css"

const App = () => {
  const initialExpenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses, setExpenses] = useState(initialExpenses);
  const [selectedYear, setSelectedYear] = useState("2024");

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );

  return (
    <div>
      <h1>Трекер витрат</h1>
      <ExpenseForm onAddExpense={addExpenseHandler} />
      <Filter selectedYear={selectedYear} onYearChange={setSelectedYear} />
      <ExpenseChart expenses={filteredExpenses} />
    </div>
  );
};

export default App;
