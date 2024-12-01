import React from "react";
import "./Filter.css";

const Filter = ({ selectedYear, onYearChange }) => {
  const yearChangeHandler = (event) => {
    onYearChange(event.target.value);
  };

  return (
    <div className="filter">
      <label>Фільтрувати за роком</label>
      <select value={selectedYear} onChange={yearChangeHandler}>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
      </select>
    </div>
  );
};

export default Filter;
