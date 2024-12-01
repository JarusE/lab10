import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const ExpenseChart = ({ expenses }) => {
  const monthlyExpenses = Array(12).fill(0);

  expenses.forEach((expense) => {
    const month = expense.date.getMonth(); 
    monthlyExpenses[month] += expense.amount;
  });

  const chartData = monthlyExpenses.map((amount, index) => ({
    month: new Date(0, index).toLocaleString("uk-UA", { month: "short" }),
    amount,
  }));

  return (
    <BarChart width={600} height={300} data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="amount" fill="#8884d8" />
    </BarChart>
  );
};

export default ExpenseChart;
