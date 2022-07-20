import React from "react";
import Box from "@mui/material/Box"
import GenerateIcon from "../atoms/GenerateIcon";
import MonthPicker from "../atoms/MonthPicker";

export default function TxnsNav ({ month, setMonth }) {
  const selectPreviousMonth = () => {
    setMonth(new Date(month.setMonth(month.getMonth()-1)));
  }

  const selectNextMonth = () => {
    setMonth(new Date(month.setMonth(month.getMonth()+1)));
  }

  return (
    <Box
      sx={{display:'flex', justifyContent: 'space-between', alignItems: 'center'}}
    >
        <Box onClick={selectPreviousMonth}><GenerateIcon name={'arrow_back_ios_new'} /></Box>
        <MonthPicker month={month} setMonth={setMonth} />
        <Box onClick={selectNextMonth}><GenerateIcon name={'arrow_forward_ios'} /></Box>
    </Box>
      
  );
}

