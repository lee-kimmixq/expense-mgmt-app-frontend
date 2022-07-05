import React from "react";
import Alert from "@mui/material/Alert";
// import axios from "axios";

export default function Alert (severity, label) {
  return (
    <Alert severity={severity} sx={{marginBottom: '10px', textAlign: 'left', fontSize: '0.8em'}}>{alertLabel}</Alert>
  );
}

