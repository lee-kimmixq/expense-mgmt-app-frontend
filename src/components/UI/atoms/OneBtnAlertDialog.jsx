import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import GenerateIconLarge from "../atoms/GenerateIconLarge.jsx";
import DialogTitle from '@mui/material/DialogTitle';



export default function OneBtnAlertDialog({handleOpen, setHandleOpen, name, handleConfirm, yesBtnLabel} ) {

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
        <br></br>
        <GenerateIconLarge name={'mail_lock'} color={'#262431'} /> 
        <DialogTitle id={`alert-title-${name}`} sx={{color: "#262431"}}>
          {"Verify your account"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id={`alert-description-${name}`} sx={{color: "#262431"}}>
           Account activation link has been sent to the email address provided.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirm} autoFocus>
            {yesBtnLabel}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
