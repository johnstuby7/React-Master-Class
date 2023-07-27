import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  // transforming objects to numbers to be used in chart, dataPointValues just returns the numbers
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  // use the spread operator to pull out all the array elements, and add them as standalone arguments to this Math.Max argument,
  // which requires comma sepparated values to work
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
