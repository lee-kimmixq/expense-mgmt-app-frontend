import React from "react";
import { TextField } from "@mui/material";
// import axios from "axios";

export default function InputField ({fieldName, fieldType, isRequired, fieldLabel, fieldHelperText, handleChange, fieldValue}) {

  return (
      <TextField 
        InputLabelProps={{ 
          required: false,
         }}
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

