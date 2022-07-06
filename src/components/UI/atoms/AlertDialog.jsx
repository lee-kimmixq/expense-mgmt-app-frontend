import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

export default function AlertDialog({handleOpen, setHandleOpen, name, handleConfirm, alertDescription, yesBtnLabel, noBtnLabel} ) {

  const handleClose = () => {
    setHandleOpen(false);
  }; 

  return (
    <div>
      
      <Dialog
        open={handleOpen}
        onClose={handleClose}
        maxWidth={'sm'}
        aria-labelledby={`alert-title-${name}`}
        aria-describedby={`alert-description-${name}`}
        PaperProps={{
          style: {
            backgroundColor: "#eeeeee",
            boxShadow: "none",
          },
        }}
      >

        <DialogContent>
          <DialogContentText id={`alert-description-${name}`} sx={{color: "#262431"}}>
            {alertDescription}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{noBtnLabel}</Button>
          <Button onClick={handleConfirm} autoFocus>
            {yesBtnLabel}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
