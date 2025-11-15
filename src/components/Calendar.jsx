import React from 'react';
import CalendarHeader from './CalendarHeader';
import WeekDays from './WeekDays';
import DaysGrid from './DayGrid';
import './calendar.css';

const Calendar = ({ date }) => {
  if (!date || !(date instanceof Date)) {
    return <div>Invalid date provided.</div>;
  }

  return (
    <div className="calendar-container">
      <CalendarHeader date={date} />
      <WeekDays />
      <DaysGrid date={date} />
    </div>
  );
};

export default Calendar;