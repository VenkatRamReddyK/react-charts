import React from 'react';
import './style.css';
// import ClickEvents from './ClickEvents';
// import PieChart from './PieChart';
import PieChartWithEvents from './PieChartWithEvents';
export default function App() {
  return (
    <div className="chart-container">
      {/* <PieChart /> */}
      <PieChartWithEvents />
      {/* <ClickEvents /> */}
    </div>
  );
}
