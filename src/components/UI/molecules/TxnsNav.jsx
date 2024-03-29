import React from "react";
import Box from "@mui/material/Box"
import GenerateIcon from "../atoms/GenerateIcon";
import MonthPicker from "../atoms/MonthPicker";
import getFirstLastDates from "../../../utils/getFirstLastDates.mjs";

export default function TxnsNav ({ month, setMonth, filters, setFilters, page }) {
  const selectPreviousMonth = () => {
    const newDate = new Date(month.setMonth(month.getMonth()-1))
    setMonth(newDate);
    if (page === 'txns') {
      const { firstDate, lastDate } = getFirstLastDates("month", newDate)
      setFilters({...filters, txnDateMin: firstDate,txnDateMax: lastDate})
    }
  }

  const selectNextMonth = () => {
    const newDate = new Date(month.setMonth(month.getMonth()+1))
    setMonth(newDate);
    if (page === 'txns') {
      const { firstDate, lastDate } = getFirstLastDates("month", newDate)
      setFilters({...filters, txnDateMin: firstDate,txnDateMax: lastDate})
    }
  }

  const isValidDate = (month.getFullYear() < new Date().getFullYear() || (month.getFullYear() === new Date().getFullYear() && month.getMonth() < new Date().getMonth()))

  return (
    <Box
      sx={{display:'flex', justifyContent: 'space-between', alignItems: 'center'}}
    >
        <Box onClick={selectPreviousMonth}><GenerateIcon name={'arrow_back_ios_new'} /></Box>
        <MonthPicker month={month} setMonth={setMonth} page={'txns'} filters={filters} setFilters={setFilters}   />
        <Box onClick={isValidDate ? selectNextMonth : null}><GenerateIcon name={isValidDate ? 'arrow_forward_ios' : ''} /></Box>
    </Box>
      
  );
}

