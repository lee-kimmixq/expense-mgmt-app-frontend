import React from "react";
import { useState } from "react";

import { Box, Tab, Tabs } from "@mui/material";

export default function CatReportsNav ({tabName, tabValue, setTabFocus}) {
  const [value, setValue] = useState(tabValue);

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
        minHeight: 35,
        height: 35
      }}
      variant="fullWidth"
      value={value}
      onChange={handleChange}
      aria-label="secondary tabs example"
    >
      <Tab sx={{height: '33px', minHeight: '0'}} value={"expenses"} label={"Expenses"} />
      <Tab sx={{height: '33px', minHeight: '0'}} value={"income"} label={"Income"} />
    </Tabs>
    </Box>
  );
}
