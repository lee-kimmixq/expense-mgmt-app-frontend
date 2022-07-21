import React from "react";
import TextField from "@mui/material/TextField";

export default function InputField ({fieldName, fieldType, isRequired, fieldLabel, fieldHelperText, handleChange, fieldValue, inputError}) {

  return (
      <TextField 
        error={inputError}
        InputLabelProps={{ 
          required: false,
        }}
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

