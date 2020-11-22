import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import './Chart.css'

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme)

const ChartWidget = (props) => {
  const {type, dataSource} = props

  return (
    <div style={{display:'flex',flex:'1',border:'1px solid gray',margin:'20px',boxShadow: '0 10px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'}}>
      <ReactFC
        className='chartc'
        type={type}
        width="100%"
        height="100%"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    </div>
  )
}

export default ChartWidget