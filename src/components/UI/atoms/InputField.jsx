import React from "react";
import { TextField } from "@mui/material";
// import axios from "axios";

export default function InputField ({fieldName, fieldType, isRequired, fieldLabel, fieldHelperText, handleChange}) {

  return (
      <TextField 
        id={fieldName}
        label={fieldLabel}
        type={fieldType}
        helperText={fieldHelperText}
        onChange={handleChange}
        required={isRequired}
        size="small"
        />
  );
}

