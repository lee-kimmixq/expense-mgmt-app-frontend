import React from "react";
import { ListItemText } from "@mui/material";

export default function ListTxnText ({textValue, fontWeight, margin}) {

  return (
      <ListItemText sx={{
        fontWeight: fontWeight,
        margin: margin
      }}
      primary={textValue} />
  );
}
