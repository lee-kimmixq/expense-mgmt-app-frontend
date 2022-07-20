import React from "react";
import { TextField } from "@mui/material";

export default function InputField ({fieldName, fieldType, isRequired, fieldLabel, fieldHelperText, handleChange, fieldValue, inputError}) {

  return (
      <TextField 
        error={inputError}
        InputLabelProps={{ 
          required: false,
        }}
        // sx={{input: {textAlign: 'center'}}}
        id={fieldName}
        label={fieldLabel}
        type={fieldType}
        value={fieldValue}
        helperText={fieldHelperText}
        onChange={handleChange}
        required={isRequired}
        // defaultValue={fieldValue}
        size="small"
        />
  );
}

