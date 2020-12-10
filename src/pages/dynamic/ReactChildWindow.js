import React, { useEffect } from 'react';
import RGL, { WidthProvider } from "react-grid-layout";
import ChildWindow from './ChildWindow'
import Tools from './Tools'
const ReactGridLayout = WidthProvider(RGL);

const ReactChildWindow = (props) => {
    const [layout, setLayout] = React.useState([])

    const generateLayout = (widgets) => {
        const layout = [
            {x:0,y:0,w:300,h:300,i:'4'},
            {x:350,y:100,w:300,h:300,i:'5'},
          ]
        return layout
    }

    useEffect(() => {
        var l =generateLayout()
        setLayout(l);
    }, []);

    const generateDOM = () => {
        return layout.map((layoutitem, index) => {      
          return (
            <div key={index} data-grid={layoutitem}
              style={{
                display:'flex',
                flexDirection:'column',
                border:'1px solid lightgray',
                background:'whitesmoke',
                userSelect:'none',
                padding:'5px',
                margin:'0',
                borderRadius:'5px',
                boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0,0.19)'
            }}>
              <div 
                style={{
                  background: 'rgb(5,55,75)',
                  color: 'white',
                  borderBottom: '0px solid lightgray',
                  borderRadius: '5px 5px 0 0',
                  fontSize: '18px',
                  padding: '10px 0 10px 5px',
                  height: '20px',
                  display:'flex',
                  justifyContent:'space-between',
              }}>
                <div className="layout-item-draggertab" style={{cursor:'move',flex:'1',fontSize: '11px',fontWeight:'bold',paddingTop:'3px',marginLeft:'5px'}}>title</div>
                <Tools/>
              </div>         
              <ChildWindow></ChildWindow>     
              <div>footer</div>          
            </div>
          )
        })
      }

    return (
        <div 
            style={{flex:'1',        
            border:'0px solid green',
            background:'whitesmoke',
            overflow:'auto',
            width: '100%',
            height: '100%',
        }}>     
            <ReactGridLayout       
                rowHeight={1}
                cols= {1000}
                margin={[0, 0]}
                resizeHandles={['se','e','s']}
                draggableHandle='.layout-item-draggertab'
                compactType={null}
                isDraggable={true}
                isBounded={false}
                onLayoutChange = {function(layout) {
                    console.log('onLayoutChange',layout)
                }}
            >
                {generateDOM()}
            </ReactGridLayout>
        </div>
    )
}
export default ReactChildWindow