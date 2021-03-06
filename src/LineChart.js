import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  responsive: true,
  tooltips: {
    callbacks: {
      title: function (tooltipItems, data) {
        return 'hello ' + tooltipItems[0].xLabel;
      },
      label: function (tooltipItems, data) {
        return 'Hi ' + tooltipItems.yLabel;
      },
    },
  },
};

const LineChart = () => (
  <>
    <div className="header">
      <h1 className="title">Line Chart</h1>
    </div>
    <Line data={data} options={options} />
  </>
);

export default LineChart;
