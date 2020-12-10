import React, { useEffect, useState } from 'react';
import './data/dashboardData'
import Widget from './Widget'
// { GlobalStateProvider } from './globalstate/GlobalStateProvider';


const Absolute = () => {
  const [widgetData, setWidgetData] = useState(null)

  useEffect(() => {
    setWidgetData(window.dashboardData.dashboard.widgets)
  }, []);

  return (
    // <GlobalStateProvider>
    <div id='absolute' className='absolute' style={{width:'100%',flex:'1',position:'relative',border:'0px solid #73AD21',display: 'flex'}}>
    {widgetData !== null &&
      widgetData.map((widgetRecord) => {
        return (
          <Widget key={widgetRecord.id} widgetRecord={widgetRecord}></Widget>
        )
      })
    }
    </div>
    // </GlobalStateProvider>
  )
}

export default Absolute