import React from "react";
import { TextField } from "@mui/material";
// import axios from "axios";

export default function InputField ({fieldName, fieldType, fieldValue, isRequired, fieldLabel, fieldHelperText, handleChange}) {

  return (
      <TextField 
        id={fieldName}
        label={fieldLabel}
        type={fieldType}
        value={fieldValue}
        helperText={fieldHelperText}
        onChange={handleChange}
        required={isRequired}
        size="small"
        />
  );
}

