import React from "react";
import Box from "@mui/material/Box"
import GenerateIcon from "../atoms/GenerateIcon";
import MonthPicker from "../atoms/MonthPicker";

// import axios from "axios";

export default function TxnsNav () {
  return (
    <Box
      sx={{display:'flex', justifyContent: 'space-between', alignItems: 'center'}}
    >
        <GenerateIcon name={'arrow_back_ios_new'} />
        <MonthPicker />
        <GenerateIcon name={'arrow_forward_ios'} />
      </Box>
      
  );
}

