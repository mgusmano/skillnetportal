import React, { useRef } from 'react';
//import { useGlobalContext } from '../globalstate/GlobalStateProvider';
import { Button, Dialog, DialogActions, DialogTitle, DialogContent } from "@material-ui/core";
import Paper from '@material-ui/core/Paper'
import Draggable from 'react-draggable'
import { Pie } from './Pie';
import { Solid } from './Solid';

const PieDetailsDialog = (props) => {
  const {open, onExited, hideModal, type, data, rowid, colid, widgetData} = props
  console.log(type)
  var skillid = rowid
  var studentid = colid
  // const [percent,setPercent] = React.useState(null);
  // const [fillopacity,setFillOpacity] = React.useState(null);
  // const [color,setColor] = React.useState(null);

  var student =widgetData.students.find(x => x.id === studentid)
  var skill =widgetData.skills.find(x => x.id === skillid)
  var img = 'https://examples.sencha.com/extjs/7.4.0/examples/kitchensink/resources/images/staff/' + studentid + '.jpg'

  var radius = 80
  var bandX = 100
  var bandY = 100
  var x = ((bandX /2) - radius);
  var y = (bandY /2) - radius;
  var ts = x + ',' + y;
  const tr = `translate(${ts})`

  const dealWithItem = (item,i) => {
    if (item.s == 1) {
      var desc;
      var s;
      switch(item.c) {
        case 'g':
          desc = 'good'
          break;
        case 'r':
          desc = 'bad'
          break;
        default:
          desc = 'unknown'
      }
      s = `${item.p}% - ${item.d} ${desc}`
    }
    else {
      s = `${item.p}% not started`
      s = ''
    }
    return (
      <div key={i}>{s}</div>
    )
  }

  const PaperComponent = (props) => {
    return (
      <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
        <Paper {...props} />
      </Draggable>
    );
  }

  return (
    <Dialog
      open={open}
      onExited={onExited}
      onClose={hideModal}
      PaperComponent={PaperComponent}
    >
      <DialogTitle style={{width:'600px',height:'50px',cursor: 'move'}} id="draggable-dialog-title">Item Details</DialogTitle>
      <DialogContent style={{width:'600px',height:'300px',overflow:'hidden'}} dividers>
        <div className="add-widgets-dialog" style={{display:'flex',flexDirection:'column',flexWrap:'wrap',fontSize:'24px'}}>
          <div>Test id: {skillid}, Area: {skill.area}</div>
          <div>Student id: {studentid}, Name: {student.name}</div>
          <br/>
          {/* <div>Percent: {percent}  Depth: {fillopacity}  Color: {color}</div> */}

          <div style={{display:'flex',flexDirection:'row'}}>
            <img alt="pic" src={img} style={{borderRadius: '50%', x: '125px', y: '250px', width: '140px', height: '140px'}}/>
            <svg width="250" height="200">
              <g transform={"translate(" + "100" + "," + "40" + ")"} className="group" >
                {type == 'pie' &&
                  <Pie tr={tr} radius={radius} data={data}/>
                }
                {type == 'solid' &&
                  <Solid tr={tr} radius={radius} data={data}/>
                }
              </g>
            </svg>
            <div  style={{display:'flex',flexDirection:'column'}}>
              {type == 'pie' &&
                data.map((item,i) => {
                  console.log(item)
                  var r = dealWithItem(item,i)
                  return r
                })
              }
              {type == 'solid' &&
                <div>solid: {data}</div>
              }
            </div>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={hideModal}>Close</Button>
      </DialogActions>
    </Dialog>
    )
}

export default PieDetailsDialog