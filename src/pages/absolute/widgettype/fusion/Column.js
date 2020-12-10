import React from "react";
import FusionChart from "./FusionChart";

const theme = 'gammel'
const chartType = 'column2d'
//const chartType = 'scrollline2d'
const caption = "Countries With Most Oil Reserves [2017-18]"

const chartData = [
  { label: "Venezuela", value: "290" },
  { label: "Saudi", value: "260" },
  { label: "Canada", value: "180" },
  { label: "Iran", value: "140" },
  { label: "Russia", value: "115" },
  { label: "UAE", value: "100" },
  { label: "US", value: "30" },
  { label: "China", value: "30" }
];

const dataSource = {
  chart: {
    caption: caption,    //Set the chart caption
    subCaption: "In MMbbl = One Million barrels",             //Set the chart subcaption
    xAxisName: "Country",           //Set the x-axis name
    yAxisName: "Reserves (MMbbl)",  //Set the y-axis name
    numberSuffix: "K",
    theme: theme                 //Set the theme for your chart
  },
  data: chartData
}

class Column extends React.Component {
  render() {
    return (
       <div className="FusionParent" style={{flex:'1',overflow:'auto'}}>
        <FusionChart
          chartType={chartType}
          dataSource={dataSource}
        />
       </div>
    );
  }
}

export default Column;
