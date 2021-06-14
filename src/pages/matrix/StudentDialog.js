import React from 'react';
import { Paper, Button, Dialog, DialogActions, DialogTitle, DialogContent } from "@material-ui/core";
import Draggable from 'react-draggable';


export function StudentDialog(props) {
  const { dialogData, onClose, open} = props;

  const PaperComponent = (props) => {
    return (
      <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
        <Paper {...props} />
      </Draggable>
    );
  }

  return (
    <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={open} PaperComponent={PaperComponent}>
      <DialogTitle style={{width:'500px',height:'50px',cursor: 'move'}} id="draggable-dialog-title">Student Details</DialogTitle>
      <DialogContent>
        {dialogData !== null && <div>{dialogData.student.text}</div>}
        <br/>

      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}


