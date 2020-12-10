import React from 'react';
//import { useGlobalState } from '../globalstate/GlobalStateProvider'
import { SenchaGrid } from "@sencha/sencha-grid";


const Grid = (props) => {
    //var widgetRecord = props.widgetRecord
   // const [{userName,dashboardData,widgetData}, dispatch] = useGlobalState();


    return (
        <div style={{display:'flex',height:'100%',overflow:'auto',flexDirection:'column'}}>
            <div style={{flex:'1',border:'1px solid lightgray' }}>
          
                <SenchaGrid
                    height='100%'
                    store={{
                        fields: ['name','progress'],
                        data: [
                            { name: 'Test 1', progress: 0.10 },
                            { name: 'Test 2', progress: 0.23 },
                            { name: 'Test 3', progress: 0.86 },
                            { name: 'Test 4', progress: 0.31 }
                        ]
                    }}
                   
                    columns= {[{
                        text: 'Test Number',
                        dataIndex: 'name',
                        width: 100
                    },
                    //  {
                    //     xtype: 'widgetcolumn',
                    //     text: 'Progress',
                    //     width: 120,
                    //     dataIndex: 'progress',
                    //     widget: {
                    //         xtype: 'progressbarwidget',
                    //         textTpl: '{value:percent}'
                    //     }
                    // }
                ]}
                
                />
</div>
</div>

    )

}

export default Grid