import React from 'react';
//import { useGlobalState } from '../globalstate/GlobalStateProvider'
import { SenchaGrid } from "@sencha/sencha-grid";
//import Map from './fusion/Map'
//import Line from './fusion/Line'
//import RatingMeter from './demo/RatingMeter'

import Grid from './demo/Grid'

const Comparative = (props) => {
    var widgetRecord = props.widgetRecord
    //const [{userName,dashboardData,widgetData}, dispatch] = useGlobalState();

    const renderSign = (value) => (
        <span style={{ color: value > 0 ? 'green' : value < 0 ? 'red' : ''}}>
            {value}
        </span>
    )

    if (widgetRecord.swapGrid != undefined) {
       // console.log(widgetRecord.swapGrid.records)
    }

    return (
        <div style={{display:'flex',height:'100%',overflow:'auto',flexDirection:'column'}}>
            <div style={{flex:'1',border:'1px solid lightgray' }}>
                { widgetRecord.properties.mode === 'grid' &&
                <SenchaGrid
                    height='100%'
                    plugins= {{
                        gridsummaryrow: true
                    }}
                    data={widgetRecord.swapGrid !== undefined && widgetRecord.swapGrid.records}
                    columns={[
                        {text: "member",dataIndex: "member",},
                        {text: "Units [Sales]",dataIndex: "mid_m0_numeric", summary: 'sum'},
                        {text: "Promo [Sales]",dataIndex: "mid_m1_numeric", summary: 'sum'},
                    ]}
                />}

                { widgetRecord.properties.mode === 'chart' &&
                //  <RatingMeter style={{height:'100%'}}/>
                  <Grid/>
                }




            </div>
            {/* <div style={{padding:'5px 0 0 0'}}>
                {<button onClick={() => {
                    dispatch({type: 'UPDATE_WIDGET', payload: {id: widgetRecord.id, x: 10, y: 10, w: 500, h: 500}});
                }}>Update</button>}
            </div> */}
        </div>
    )

}

export default Comparative