import React from "react";
import { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
// import axios from "axios";

export default function ReportsNav ({tabName, tabValue, setTabFocus}) {
  const [value, setValue] = useState('date');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setTabFocus(newValue);
  };

  return (
    <Box sx={{
        marginBottom: '10px'
    }} >
    <Tabs 
      sx={{
        borderStyle: 'solid', 
        "& button.Mui-selected": {backgroundColor: '#fff', color: '#5948D3'},
        "& button:": {height: '20px', minHeight: '0'},
        borderWidth: '1.5px',
        minHeight: 20,
        height: 25
      }}
      variant="fullWidth"
      value={value}
      onChange={handleChange}
      textColor="#fff"
      indicatorColor="#fff"
      aria-label="secondary tabs example"
    >
      <Tab sx={{height: '20px', minHeight: '0'}} value={"date"} label={"D"} />
      <Tab sx={{height: '20px', minHeight: '0'}} value={"week"} label={"W"} />
      <Tab sx={{height: '20px', minHeight: '0'}} value={"month"} label={"M"} />
    </Tabs>
    </Box>
  );
}
