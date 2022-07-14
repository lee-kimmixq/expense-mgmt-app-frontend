import React from "react";
import { ListItemText } from "@mui/material";
// import axios from "axios";

export default function ListTxnText ({textValue, fontWeight, margin}) {

  return (
      <ListItemText sx={{
        fontWeight: fontWeight,
        margin: margin
      }}
      primary={textValue} />
  );
}
