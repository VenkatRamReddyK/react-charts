let ChartHelper = {
  getBaseData,
  getBaseOptions,
};

function getBaseData() {
  return {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '',
        data: [],
        rawData: [],
        tooltips: [],
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
}

function getBaseOptions() {
  return {
    plugins: {
      tooltip: {
        callbacks: {
          title: function (tooltipItem) {
            tooltipItem = tooltipItem[0];
            let dataIndex = tooltipItem.dataIndex;
            // console.log('title tooltipItem:', tooltipItem);
            let tooltipTitle = tooltipItem.dataset.tooltips[dataIndex].title;
            return tooltipTitle;
          },
          label: (tooltipItem) => {
            let dataIndex = tooltipItem.dataIndex;
            let label = tooltipItem.dataset.tooltips[dataIndex].body;
            let value = tooltipItem.dataset.data[dataIndex];
            // console.log('tooltipItem.formattedValue: ', tooltipItem);
            return label + ' - ' + value; // + " - " + tooltipItem.formattedValue;
          },
        },
      },
      legend: { display: false },
    },
  };
}

export default ChartHelper;
