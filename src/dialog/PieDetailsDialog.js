import React, { useRef } from 'react';
//import { useGlobalContext } from '../globalstate/GlobalStateProvider';
import { Button, Dialog, DialogActions, DialogTitle, DialogContent } from "@material-ui/core";
import Paper from '@material-ui/core/Paper'
import Draggable from 'react-draggable'

const PieDetailsDialog = (props) => {
  const [percent,setPercent] = React.useState(null);
  const [fillopacity,setFillOpacity] = React.useState(null);
  const [color,setColor] = React.useState(null);
  const myref = useRef(null);
  //const GlobalContext = useGlobalContext();
  const {open, onExited, hideModal} = props
  var img = 'https://examples.sencha.com/extjs/7.4.0/examples/kitchensink/resources/images/staff/' + props.Student.sid + '.jpg'

  setTimeout(function() {
    if (myref.current) {
      myref.current.appendChild(props.NewPie)
      var pie = myref.current.firstChild
      for(var slice=pie.firstChild; slice!==null; slice=slice.nextSibling) {
        slice.addEventListener("mouseover", function(e) {
          setPercent(e.target.getAttribute('percent'))
          setFillOpacity(e.target.style.fillOpacity)
          setColor(e.target.style.fill)
        }, false);
        slice.addEventListener("mouseout", function(e) {
          setPercent(null)
          setFillOpacity(null)
          setColor(null)
        }, false);
      }
    }
    }, 10);

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
          <div>Test Name: {props.Test.name}</div>
          <div>Student Name: {props.Student.name}</div>
          <img alt="pic" src={img} style={{borderRadius: '50%', x: '25px', y: '150px', width: '140px', height: '140px'}}/>

          <br/>
          <div>Percent: {percent}</div>
          <div>Depth: {fillopacity}</div>
          <div>Color: {color}</div>

          <svg transform="translate(630,-200) scale(2)" ref={myref}></svg>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={hideModal}>Close</Button>
      </DialogActions>
    </Dialog>
    )
}

export default PieDetailsDialog