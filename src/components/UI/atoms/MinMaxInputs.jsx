import * as React from 'react';
import Box from '@mui/material/Box';
import InputField from './InputField';

export default function MinMaxInputs ({fieldName, fieldType, isRequired, handleMinChange, handleMaxChange, minValue, maxValue}) {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-start'
    }}>
      <InputField fieldName={`inputMin${fieldName}`} fieldType={fieldType} isRequired={isRequired ? isRequired : false} fieldHelperText={'Min'} handleChange={handleMinChange} value={minValue}/>
      <InputField fieldName={`inputMax${fieldName}`} fieldType={fieldType} isRequired={isRequired ? isRequired : false} fieldHelperText={'Max'} handleChange={handleMaxChange} value={maxValue}/>
    </Box>
  )
}