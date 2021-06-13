import React from 'react';
import { Button, Dialog, DialogActions, DialogTitle, DialogContent } from "@material-ui/core";
import Paper from '@material-ui/core/Paper'
import Draggable from 'react-draggable'


const StudentDialog = (props) => {
  const {open, onExited, hideModal} = props
  console.log(props)



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
      <DialogActions>
        <Button onClick={hideModal}>Close</Button>
      </DialogActions>
    </Dialog>
    )
}

export default StudentDialog