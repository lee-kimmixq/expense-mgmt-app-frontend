import React from "react";
import TextField from "@mui/material/TextField";

export default function TxnAmtField ({fieldName, fieldType, isRequired, fieldLabel, fieldHelperText, handleChange, fieldValue, isShrink, inputError}) {

  return (
      <TextField 
        error={inputError}
        InputLabelProps={{ 
          required: false,
          style: {
            fontWeight: 'bolder',
            fontSize: 'xx-large',
          },
          shrink: isShrink
         }}
        InputProps={{
          style: {
            fontWeight: 'bolder',
            fontSize: 'xx-large',
          }
         }}
        sx={{
          "& label.Mui-focused": {color: "#efefef"}
        }}
        id={fieldName}
        label={fieldLabel}
        type={fieldType}
        helperText={fieldHelperText}
        onChange={handleChange}
        required={isRequired}
        value={fieldValue}
        size="small"
        />
  );
}

