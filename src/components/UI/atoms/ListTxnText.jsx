import React from "react";
import { ListItemText } from "@mui/material";
// import axios from "axios";

export default function ListTxnText ({textValue}) {

  return (
      <ListItemText primary={textValue} />
  );
}
