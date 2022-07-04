import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function MonthPicker ({textValue}) {

    const [value, setValue] = React.useState(new Date());


  return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          views={['year', 'month']}
          variant="inline"
          InputProps={{
            disableUnderline: true
          }}
          disableOpenPicker={true}
          minDate={new Date('2012-03-01')}
          maxDate={new Date('2023-06-01')}
          
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} variant="standard" helperText={null} sx={{input: {textAlign: 'center'}}}/>}
        />
    </LocalizationProvider>
  );
}