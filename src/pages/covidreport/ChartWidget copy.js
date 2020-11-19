import React from 'react';
import Chart from './Chart'

const ChartWidget = (props) => {
  const {name, data} = props

  return (
    <div style={{display:'flex',flex:'1',border:'1px solid gray',margin:'20px',boxShadow: '0 10px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'}}>
      <Chart dataSource={data} type={name}/>
    </div>
  )
}

export default ChartWidget