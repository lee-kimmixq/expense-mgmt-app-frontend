import React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import getFirstLastDates from "../../../utils/getFirstLastDates.mjs"

export default function MonthPicker ({ month, setMonth, page, filters, setFilters }) {

  const handleChange = (newValue) => {
    setMonth(newValue);
    if (page === 'txns') {
      const { firstDate, lastDate } = getFirstLastDates("month", newValue)
      setFilters({...filters, txnDateMin: firstDate,txnDateMax: lastDate})
    }
  }

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
          maxDate={new Date()}
          
          value={month}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} variant="standard" helperText={null} sx={{input: {textAlign: 'center'}}}/>}
        />
    </LocalizationProvider>
  );
}