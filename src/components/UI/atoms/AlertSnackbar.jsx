import React from "react";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function AlertSnackbar ({alertSeverity, alertLabel, displayAlert}) {
 
  const [open, setOpen] = React.useState(displayAlert);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} 
    sx={{ bottom: { xs: 90, sm: 0 } }}
    > 
      <Alert onClose={handleClose} severity={alertSeverity} sx={{ width: '100%' }} >
        {alertLabel}
      </Alert>
    </Snackbar>
  );
}


