import React from 'react';
import { Paper, Button, Dialog, DialogActions, DialogTitle, DialogContent } from "@material-ui/core";
import Draggable from 'react-draggable';
import { Pie } from './Pie';
import { Solid } from './Solid';

function MatrixDialog(props) {
  const { openMatrixDialogData, onClose, open, student, skill} = props;

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


  var img
  var type
  var data
  if (openMatrixDialogData !== null) {
    img = 'https://examples.sencha.com/extjs/7.4.0/examples/kitchensink/resources/images/staff/' + openMatrixDialogData.student.id + '.jpg'
    type = openMatrixDialogData.type;
    data = openMatrixDialogData.data;

  }
  const PaperComponent = (props) => {
    return (
      <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
        <Paper {...props} />
      </Draggable>
    );
  }

  return (
    <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={open} PaperComponent={PaperComponent}>
      <DialogTitle style={{width:'500px',height:'50px',cursor: 'move'}} id="draggable-dialog-title">Matrix Item Details</DialogTitle>
      <DialogContent>
        {openMatrixDialogData !== null && <div>{openMatrixDialogData.student.text}</div>}
        {openMatrixDialogData !== null && <div>{openMatrixDialogData.skill.text}</div>}
        <br/>

<div>
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
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

export default MatrixDialog
