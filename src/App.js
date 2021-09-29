import React from 'react';
import './style.css';
// import ClickEvents from './ClickEvents';
import PieChart from './PieChart';
import PieChartWithEvents from './PieChartWithEvents';
// import LineChart from './LineChart';
// import Bar from './Bar';
export default function App() {
  let chartOptions = {
    tooltips: {
      header: '',
      body: '',
    },
  };
  let chartData = [
    {
      value: 10,
      tooltip: { title: 'title is 10', body: ' value is 10' },
    },
    {
      value: 20,
      tooltip: { title: 'title is 20', body: ' value is 20' },
    },
    {
      value: 30,
      tooltip: { title: 'title is 30', body: ' value is 30' },
    },
    {
      value: 40,
      tooltip: { title: 'title is 40', body: ' value is 40' },
    },
  ];
  return (
    <div className="chart-container">
      <PieChart chartData={chartData} chartOptions={chartOptions} />
      {/* <Bar />
      <LineChart /> */}
      {/* <PieChartWithEvents /> */}
      {/* <ClickEvents /> */}
    </div>
  );
}
