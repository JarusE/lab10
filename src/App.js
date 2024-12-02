import React, { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import Filter from "./components/Filter";
import ExpenseChart from "./components/ExpenseChart";
import Loader from "./components/Loader"; 
import { getExpenses, addExpense } from "./services/expenseService"; 
import "./App.css";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [selectedYear, setSelectedYear] = useState("2024"); 
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    const fetchExpenses = async () => {
      setLoading(true);
      try {
        const data = await getExpenses();
        setExpenses(data);
      } catch (error) {
        console.error("Помилка завантаження витрат:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchExpenses();
  }, []);

  const addExpenseHandler = async (expense) => {
    setLoading(true);
    try {
      const addedExpense = await addExpense(expense);
      setExpenses((prevExpenses) => [...prevExpenses, { id: addedExpense.id, ...expense }]);
    } catch (error) {
      console.error("Помилка додавання витрати:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date && expense.date.getFullYear().toString() === selectedYear
  );

  return (
    <div>
      <h1>Трекер витрат</h1>
      {loading ? (
        <Loader />
      ) : (
        <>
          <ExpenseForm onAddExpense={addExpenseHandler} />
          <Filter selectedYear={selectedYear} onYearChange={setSelectedYear} />
          <ExpenseChart expenses={filteredExpenses} />
        </>
      )}
    </div>
  );
};

export default App;
