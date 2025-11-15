import React from 'react';

const DaysGrid = ({ date }) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const dayOfMonth = date.getDate();

  // Get the first day of the month (0=Sunday, 1=Monday, etc.)
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  // Get the total number of days in the month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Create an array for the empty cells at the start of the month
  const emptyCells = Array(firstDayOfMonth).fill(null);

  // Create an array for the days of the month
  const dayCells = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const calendarGrid = [...emptyCells, ...dayCells];

  return (
    <div className="days-grid">
      {calendarGrid.map((day, index) => {
        const isHighlighted = day === dayOfMonth;
        return (
          <div
            key={index}
            className={`day-cell ${isHighlighted ? 'highlighted' : ''}`}
          >
            {day}
          </div>
        );
      })}
    </div>
  );
};

export default DaysGrid;