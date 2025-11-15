import React from 'react';

const WeekDays = () => {
  const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  return (
    <div className="week-days">
      {days.map(day => (
        <div key={day} className="week-day">{day}</div>
      ))}
    </div>
  );
};

export default WeekDays;