import React, { useState, useEffect } from 'react';
import './style.css';
// import ClickEvents from './ClickEvents';
import PieChart from './PieChart';
import PieChartWithEvents from './PieChartWithEvents';
// import LineChart from './LineChart';
// import Bar from './Bar';
const App = () => {
  // const [clickedDataset, setClickedDataset] = useState('');
  const [clickedElement, setClickedElement] = useState('');

  let chartOptions = {
    legend: {
      display: false,
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
  let chartOptions2 = {
    legend: {
      display: true,
    },
  };
  let chartData2 = [
    {
      value: 100,
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

  useEffect(() => {
    console.log('clickedElement: ', clickedElement);
  }, [clickedElement]);

  // useEffect(() => {
  //   console.log('clickedDataset: ', clickedDataset);
  // }, [clickedDataset]);

  return (
    <div className="chart-container">
      <PieChart
        id="1"
        chartData={chartData}
        chartOptions={chartOptions}
        setClickedElement={setClickedElement}
        // setClickedDataset={setClickedDataset}
      />

      <div className="text-center">
        {/* <pre>{clickedElement}</pre> */}
        {/* <pre>{clickedDataset}</pre> */}
      </div>
      {/* <PieChart id="2" chartData={chartData2} chartOptions={chartOptions2} /> */}
      {/* <Bar /> 
      <LineChart /> */}
      <PieChartWithEvents />
      {/* <ClickEvents /> */}
    </div>
  );
};
export default App;
