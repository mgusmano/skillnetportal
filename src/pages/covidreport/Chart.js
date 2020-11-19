import React from 'react'

import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import './Chart.css'

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme)

class Chart extends React.Component {
  render() {
    const { dataSource , type} = this.props;
    return (
      <ReactFC
        className='chart'
        xstyle={{width:'100%',height:'100%'}}
        type={type}
        width="100%"
        height="100%"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }
}

export default Chart;
