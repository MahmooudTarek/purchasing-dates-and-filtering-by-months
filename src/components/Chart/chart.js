import React from "react";
import ChartBar from "./chartBar";
import "./chart.css";
const Chart = (props) => {

    const dataPointsValues=props.dataPoints.map(dataPoint=>dataPoint.value)
    const totalMaximum = Math.max(...dataPointsValues)

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
