import React from "react";
import { TextField } from "@mui/material";
// import axios from "axios";

export default function TxnAmtField ({fieldName, fieldType, isRequired, fieldLabel, fieldHelperText, handleChange, fieldValue}) {

  return (
      <TextField 
        InputLabelProps={{ 
          required: false,
         }}
        InputProps={{
          style: {
            fontWeight: 'bolder',
            fontSize: 'xx-large',
          }
         }}
        // sx={{input: {textAlign: 'center'}}}
        id={fieldName}
        label={fieldLabel}
        type={fieldType}
        helperText={fieldHelperText}
        onChange={handleChange}
        required={isRequired}
        defaultValue={fieldValue}
        size="small"
        />
  );
}

