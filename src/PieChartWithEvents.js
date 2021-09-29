import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';

const data = {
  labels: ['MFA', 'NON-MFA'],
  datasets: [
    {
      data: [5667, 2238, 999, 828],
      backgroundColor: ['#FF6384', '#36A2EB'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB'],
    },
  ],
};

const PieChartWithEvents = () => {
  const [clickedDataset, setClickedDataset] = useState('');
  const [clickedElement, setClickedElement] = useState('');
  const [clickedElements, setClickedElements] = useState('');

  const getDatasetAtEvent = (dataset) => {
    if (!dataset.length) return;

    const datasetIndex = dataset[0].datasetIndex;
    console.log(
      'getDatasetAtEvent : ',
      datasetIndex,
      data.datasets[datasetIndex]
    );
    setClickedDataset(data.datasets[datasetIndex].label);
  };

  const getElementAtEvent = (element) => {
    if (!element.length) return;

    const { datasetIndex, index } = element[0];
    console.log('getElementAtEvent : ', datasetIndex, index);
    setClickedElement(
      `${data.labels[index]} - ${data.datasets[datasetIndex].data[index]}`
    );
  };

  const getElementsAtEvent = (elements) => {
    if (!elements.length) return;
    console.log('getElementsAtEvent : ', elements);
    setClickedElements(elements.length);
  };
  const option = {
    responsive: true,
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
      // custom: () => <div>Hello</div>,
    },
  };
  const showTooltip = (tooltip) => {
    if (tooltip.opacity === 0) {
      this.setState({
        showTooltip: false,
        tooltip: undefined,
      });
    } else {
      this.setState({
        showTooltip: true,
        tooltip,
      });
    }
  };
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
      <Pie
        data={data}
        options={option}
        getDatasetAtEvent={getDatasetAtEvent}
        getElementAtEvent={getElementAtEvent}
        getElementsAtEvent={getElementsAtEvent}
      />
      <div className="text-center">
        <p>{clickedElement}</p>
        <p>{clickedDataset}</p>
        <p>{clickedElements}</p>
      </div>
    </>
  );
};

export default PieChartWithEvents;
