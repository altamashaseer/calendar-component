# React Calendar Component

A small, reusable React component that renders a month view for a provided Date and highlights the selected day.

## Simple explanation
This project contains a single reusable component: `<Calendar date={someDate} />`.  
Given a Date it renders:
- A header with the month and year.
- A row of weekday headings.
- A grid of days for that month, aligned to weekdays.
- The supplied date cell highlighted.
- The Calendar component validates the prop and shows "Invalid date provided." if `date` is missing or not a Date instance.

## Project structure
- src/
  - components/
    - Calendar.jsx        — main component that composes the calendar
    - CalendarHeader.jsx  — displays Month and Year
    - WeekDays.jsx        — weekday headings (Sun–Sat)
    - DayGrid.jsx         — builds the grid of day cells and highlights the date
    - calendar.css        — component styles
  - App.jsx               — example usage
  - main.jsx              — app entry
- public/                 — static HTML/assets
- package.json
- vite.config.js
- README.md

## Usage / run locally
1. Install dependencies:
   ```
   npm install
   ```
2. Start dev server:
   ```
   npm run dev
   ```
3. Build for production:
   ```
   npm run build
   ```
4. Preview production build:
   ```
   npm run serve
   ```

## Example
Use the component in your app:
```jsx
import Calendar from './components/Calendar';

function App() {
  return <Calendar date={new Date('2022-10-03')} />;
}
```


<img width="467" height="551" alt="image" src="https://github.com/user-attachments/assets/3c5cf59c-117d-4887-819d-fd690655eb96" />

