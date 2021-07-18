import React, { useEffect } from 'react';
// import Vertical from '../../layout/Vertical'
// import Horizontal from '../../layout/Horizontal'
// import Splitter from '../../layout/Splitter'

import Tools from './Tools'

import './react-grid-layout.css';
import RGL, { WidthProvider } from "react-grid-layout";
//import ChildWindow from './ChildWindow'
import ReactChildWindow from './ReactChildWindow'
const ReactGridLayout = WidthProvider(RGL);


//import Widget from './Widget'
//import Context from './Context'
//import Util from '../../Util'
// import Button from '@material-ui/core/Button';
// import AddWidgetDialog from '../../dialog/AddWidgetDialog'
// import ImportDialog from '../../dialog/ImportDialog'
// import ExportDialog from '../../dialog/ExportDialog'
// import { useModal } from "react-modal-hook";
// import Divider from '@material-ui/core/Divider';
// import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
// import Grid from '@material-ui/core/Grid';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
//import './Dashboard.css'
//import ImportFile from './ImportFile'

const Dynamic = (props) => {
  //const [widgets, setWidgets] = React.useState([])
  const [layout, setLayout] = React.useState([])
  //const [dashboardTitle, setDashboardTitle] = React.useState('')

  //const [addWidgetOpen, setAddWidgetOpen] = React.useState(false);
  //const [importOpen, setImportOpen] = React.useState(false);
  //const [exportOpen, setExportOpen] = React.useState(false);


  //const [open, setOpen] = React.useState(false);
  //const [anchorEl, setAnchorEl] = React.useState(null);

  const generateLayout = (widgets) => {
    console.log(widgets)
    var widgetArray = []
    var i;
    for (i = 0; i < widgets.length; i++) {
      var position = widgets[i].properties.position
      var size = widgets[i].properties.size
      var x = position.x
      var y = position.y
      var w = size.width
      var h = size.height
      var wid
      if (widgets.length === 100) {
        wid = { x: x, y: y, w: w, h: h, i: i.toString(), draggableHandle: ".x-title-text", isDraggable: false, onDragStart: function() {console.log('onDragStart')} }
      }
      else {
        wid = { x: x, y: y, w: w, h: h, i: i.toString(), draggableHandle: ".x-title-text", isDraggable: true, onDragStart: function() {console.log('onDragStart')}}
      }

      console.log('wid',wid)
      widgetArray.push(wid)
    }
    return widgetArray
  }

  useEffect(() => {
    console.log('useEffect for dynamic ')
    setTimeout(function(){
      //setWidgets(window.dashboardData.dashboard.widgets)
      console.log(window.dashboardData.apptitle)
      //setDashboardTitle(window.dashboardData.appTitle)
      //setDashboardTitle('SkillNet Dashboard')

      var l =generateLayout(window.dashboardData.dashboard.widgets)
      setLayout(l);

      // requestAnimationFrame(function() {
      //   console.log(widgets)
      // })

      var element = document.getElementById("initialLoadMask");
      if (element !== null) {
        element.parentNode.removeChild(element);
      }
    }, 0);
  }, []);

  // const fromWidget = (e) => {
  //   console.log('fromWidget')
  //   console.log(e)

  //   switch(e.command) {
  //     // case 'init':
  //     //   console.log('init')
  //     //   break;

  //     case 'resize':
  //       console.log('resize')
  //       console.log(e.box)
  //       //change box and then do a setWidget

  //       var position = {
  //         x: parseInt(e.box.left.slice(0, e.box.left.length - 2)),
  //         y: parseInt(e.box.top.slice(0, e.box.top.length - 2)),
  //       }

  //       var size = {
  //         width: parseInt(e.box.width.slice(0, e.box.width.length - 2)),
  //         height: parseInt(e.box.height.slice(0, e.box.left.length - 2)),
  //       }


  //       const newWidgetsResize = [...widgets]
  //       var index = newWidgetsResize.map(item => item.id).indexOf(e.id);
  //       console.log(index)
  //       if (index !== -1) {

  //         console.log(newWidgetsResize[index].properties.position)
  //         console.log(newWidgetsResize[index].properties.size)


  //         newWidgetsResize[index].properties.position = position
  //         newWidgetsResize[index].properties.size = size

  //         console.log(newWidgetsResize[index].properties.position)
  //         console.log(newWidgetsResize[index].properties.size)
  //         //var n = newWidgetsResize[index];
  //         //console.log(n)
  //         //console.log(position)
  //         //console.log(size)

  //         // newWidgets.splice(index, 1);
  //         console.log(newWidgetsResize)
  //         setWidgets(newWidgetsResize)
  //       }
  //       break;

  //     case 'delete':
  //       console.log('delete')
  //       //setWidgets(widgets.concat(values))
  //       const newWidgets = [...widgets]
  //       var index = newWidgets.map(item => item.id).indexOf(e.id);
  //       console.log(index)
  //       if (index !== -1) {
  //         newWidgets.splice(index, 1);
  //         console.log(newWidgets)
  //         setWidgets(newWidgets)
  //       }
  //       break;
  //     default:
  //       console.log('default',e)
  //   }
  // };

  // const handleAddWidgetOpen = () => {
  //   setAddWidgetOpen(true);
  // };

  // const handleAddWidgetClose = (values) => {
  //   console.log(values)
  //   setAddWidgetOpen(false);
  //   if (values == null) {return}
  //   console.log(widgets)
  //   var maxId = Math.max.apply(Math, widgets.map(function(o) { return o.id; }))
  //   console.log(maxId)
  //   if (maxId == -Infinity) {
  //     maxId = 0
  //   }
  //   console.log(maxId)
  //   values.forEach(value => {
  //     value.id = ++maxId
  //   })
  //   console.log(values)
  //   setWidgets(widgets.concat(values))
  // };

  // const handleImportOpen = () => {
  //   setImportOpen(true);
  // };
  // const handleImportClose = (values) => {
  //   setImportOpen(false);

  //   var j = JSON.parse(values)
  //   //console.log(j)

  //   setWidgets([])
  //   setDashboardTitle('')


  //   requestAnimationFrame(function() {
  //     console.log(j.dashboardData.appTitle)
  //     setDashboardTitle(j.dashboardData.appTitle)
  //     setWidgets(j.dashboardData.dashboard.widgets)
  //   })
  //   // setTimeout(function(){
  //   //   setWidgets(j)
  //   // }, 0);
  // };

  // const handleExportOpen = () => {
  //   setExportOpen(true);
  // };
  // const handleExportClose = (values) => {
  //   setExportOpen(false);
  // };

  // const onClearClick = (e) => {
  //   setWidgets([])
  //   //dispatch({type: 'CLEAR_WIDGETS', payload: {}});
  // };

  // const handleMenuClose = (e) => {

  // };

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

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
            <div className="layout-item-dragger" style={{cursor:'move',flex:'1',fontSize: '11px',fontWeight:'bold',paddingTop:'3px',marginLeft:'5px'}}>title</div>
            <Tools/>
          </div>
          <ReactChildWindow></ReactChildWindow>
          <div>footer</div>
        </div>



      )
    })
  }


  return (
    <ReactGridLayout
      rowHeight={1}
      cols= {1000}
      margin={[0, 0]}
      resizeHandles={['se','e','s']}
      draggableHandle='.layout-item-dragger'
      compactType={null}
      isDraggable={true}
      isBounded={false}
      onLayoutChange = {function(layout) {
          console.log('onLayoutChange',layout)
      }}
    >
      {generateDOM()}
    </ReactGridLayout>
  )


  // return (
  // <Vertical style={{display:'flex',flex:'auto',xminWidth:'100px', xmaxWidth: '250px',xwidth:'500px'}}>

  //   <Horizontal>
  //     {/* center */}
  //     <div id='absolute' className='center' style={{width:'100%',flex:'1',position:'relative',border:'0px solid #73AD21',display: 'flex'}}>

  //       <div
  //             style={{flex:'1',
  //             border:'0px solid green',
  //             background:'whitesmoke',
  //             overflow:'auto',
  //             width: '100%',
  //             height: '100%',
  //         }}>
  //             <ReactGridLayout
  //                 rowHeight={1}
  //                 cols= {1000}
  //                 margin={[0, 0]}
  //                 resizeHandles={['se','e','s']}
  //                 draggableHandle='.layout-item-dragger'
  //                 compactType={null}
  //                 isDraggable={true}
  //                 isBounded={false}
  //                 onLayoutChange = {function(layout) {
  //                     console.log('onLayoutChange',layout)
  //                 }}
  //             >
  //                 {generateDOM()}
  //             </ReactGridLayout>
  //         </div>
  //     </div>
  //     {/* center */}
  //     <Splitter/>
  //     {/* <Context/> */}
  //   </Horizontal>

  // </Vertical>
  // )
}

export default Dynamic