import React from "react";
import TextField from "@mui/material/TextField";

export default function InputField ({fieldName, fieldType, isRequired, fieldLabel, fieldHelperText, handleChange, fieldValue, inputError, autoComplete}) {

  return (
      <TextField 
        error={inputError}
        autoComplete={autoComplete}
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

