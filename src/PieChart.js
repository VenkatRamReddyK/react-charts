import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = ({ chartData, chartOptions }) => {
  const [options, setOptions] = useState({});
  const [data, setData] = useState({});
  useEffect(() => {
    const _data = {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [
        {
          label: '# of Votes',
          data: [12833, 19333, 3333, 522, 2211, 3012],
          tooltips: [],
          rawData: [
            {
              val: 12833,
              tooltip: 'Cluster - 12833',
            },
            {
              val: 19333,
              tooltip: 'Cluster - 19333',
            },
            {
              val: 3333,
              tooltip: 'Cluster - 3333',
            },
            {
              val: 522,
              tooltip: 'Cluster - 522',
            },
            {
              val: 2211,
              tooltip: 'Cluster - 2211',
            },
            {
              val: 3012,
              tooltip: 'Cluster - 3012',
            },
          ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          hoverBackgroundColor: ['#FF6384', '#36A2EB'],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };
    const _options = {
      plugins: {
        tooltip: {
          callbacks: {
            title: function (tooltipItem) {
              tooltipItem = tooltipItem[0];
              let dataIndex = tooltipItem.dataIndex;
              console.log('title tooltipItem:', tooltipItem);
              let tooltipTitle = tooltipItem.dataset.tooltips[dataIndex].title;
              return tooltipTitle;
            },
            label: (tooltipItem) => {
              let dataIndex = tooltipItem.dataIndex;
              let label = tooltipItem.dataset.tooltips[dataIndex].body;
              let value = tooltipItem.dataset.data[dataIndex];
              // let clusterName = label.clusterName;
              // console.log('tooltipItem: ', tooltipItem);
              // console.log('datasetIndex: ', dataIndex);
              // console.log('label: ', label + ' - ' + value);
              return label + ' - ' + value; // + " - " + tooltipItem.formattedValue;
            },
          },
        },
        legend: { display: false },
      },
    };
    _data.datasets[0].data = chartData.map((el) => el.value);
    _data.datasets[0].tooltips = chartData.map((el) => el.tooltip);
    setOptions(_options);
    setData(_data);
  }, []);
  return (
    <>
      <div className="header">
        <h1 className="title">Pie Chart</h1>
        <div className="links">
          <a
            className="btn btn-gh"
            href="https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Pie.js"
          >
            Github Source
          </a>
        </div>
      </div>
      <Pie data={data} options={options} />
    </>
  );
};

export default PieChart;
