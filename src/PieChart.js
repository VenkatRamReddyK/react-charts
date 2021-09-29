import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import ChartHelper from './ChartHelper';

const PieChart = ({
  id,
  chartData,
  chartOptions,
  setClickedElement,
  // setClickedDataset,
}) => {
  const [options, setOptions] = useState(ChartHelper.getBaseOptions());
  const [data, setData] = useState(ChartHelper.getBaseData());
  // const [clickedDataset, setClickedDataset] = useState('');
  // const [clickedElement, setClickedElement] = useState('');

  useEffect(() => {
    /* Add data and tooltips  */
    data.datasets[0].data = chartData.map((el) => el.value);
    data.datasets[0].rawData = chartData;
    data.datasets[0].tooltips = chartData.map((el) => el.tooltip);
    setData(data);

    /* Add custom options */
    options.plugins.legend.display = chartOptions?.legend?.display || false;
    setOptions(options);
  }, []);

  // const getDatasetAtEvent = (dataset) => {
  //   if (!dataset.length) return;

  //   const datasetIndex = dataset[0].datasetIndex;
  //   console.log('getDatasetAtEvent : ', datasetIndex, ' ; data: ', data);
  //   setClickedDataset(data.datasets[datasetIndex].rawData);
  // };

  const getElementAtEvent = (element) => {
    if (!element.length) return;
    // console.log('getElementAtEvent element : ', element);
    const { datasetIndex, index } = element[0];
    // console.log('getElementAtEvent : ', datasetIndex, index);
    setClickedElement({
      element: data.datasets[datasetIndex].rawData[index],
      index: index,
    });
    // setClickedElement(
    //   `${data.labels[index]} - ${data.datasets[datasetIndex].data[index]}`
    // );
  };

  return (
    <>
      <Pie
        id={`${id}-pie-chart`}
        data={data}
        options={options}
        // getDatasetAtEvent={getDatasetAtEvent}
        getElementAtEvent={getElementAtEvent}
      />
    </>
  );
};

export default PieChart;
