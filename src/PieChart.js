import React from 'react';
import { Pie } from 'react-chartjs-2';

const COLORS = ['#087CB8', '#9b59b6', '#e74c3c', ...]

let labelColors = {}; // colors used for each label
const prepareChartData = () => {
  const { rawData } = this.state.rawData;
  // If we have received the data we need to render chart
  if (rawData !== null) {
    // group users by device type
    const mapByDevice = user => user.deviceType;
    const usersPerDevice = groupBy(rawData, mapByDevice); // for ex: { { iPhone XS: [ { name: John, ... }, { name: Jade, ... }, ... ] }
    
    // Prepare data for chartJS    
    const data = Object.values(appsByDemo).map(users => users.length); // for ex: [ 22, 44, 35, ...]
    const labels = Object.keys(usersPerDevice); // for ex: [ iPhone XS, Pixel 3, ... ]
    return { labels, data };
}

const mapColorsToLabels = labels => {
  const usedKeys = intersection(Object.keys(labelColors), labels);
  let firstAvailColor = usedKeys.length; // sensible place to start looking for new colors
  
  let chartColors = [];
  let usedColors = {};
  
  // get previously used colors for all labels in current report
  usedKeys.forEach(label => {
    usedColors[labelColors[label]] = true;
  });
  
  labels.forEach(label => {
    // if we've never seen this label before
    if (!labelColors[label]) {
      
      while (usedColors[COLORS[firstAvailColor]]) {
        // if we are already using this color, get the next color
        firstAvailColor += 1;
      }
      // if we are not already using this color, save it
      labelColors[label] = COLORS[firstAvailColor];
      firstAvailColor += 1;
    }
    
    // add color for new label to array that we will push to Chart.js
    chartColors.push(labelColors[label]);
  });
  
  // return 1D array of colors assigned to current labels
  return chartColors;
};

const PieChart = () => {
  const { labels, data } = prepareChartData();
  const colors = mapColorsToLabels(labels);
  return (
    <Pie
      data={
        labels: labels,
        datasets: [{
          label: "# Users per device",
          backgroundColor: 'rgb(255, 99, 132)',
          data: data,
        }]
      }
    />
  );
}

// render() {
//   // your other code
//   {this.renderPieChart}
// }
export default PieChart;
