import React from "react";
import Alert from "@mui/material/Alert";

export default function FormAlert ({alertSeverity, alertLabel}) {
  return (
    <Alert severity={alertSeverity} sx={{marginBottom: '10px', textAlign: 'left', fontSize: '0.8em'}}>{alertLabel}</Alert>
  );
}

