import React from 'react';

const CalendarHeader = ({ date }) => {
  const monthName = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();

  return (
    <div className="calendar-header">
      {monthName} {year}
    </div>
  );
};

export default CalendarHeader;