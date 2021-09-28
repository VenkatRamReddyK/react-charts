import React from 'react';
import './style.css';
import ClickEvents from './ClickEvents';
// import PieChart from './PieChart';
export default function App() {
  return (
    <div className="chart-container">
      {/* <PieChart /> */}
      <ClickEvents />
    </div>
  );
}
