import { useState } from 'react';
import Calendar from './components/Calendar';
import './App.css';

function App() {

  return (
    <div className="App">
      <Calendar date={new Date('2022-10-03')} />
    </div>
  );
}

export default App;