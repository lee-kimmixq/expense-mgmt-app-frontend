import React from "react";
import { useState } from "react";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";

export default function ReportsNav ({tabName, tabValue, setTabFocus}) {
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
        minHeight: 20,
        height: 25
      }}
      variant="fullWidth"
      value={value}
      onChange={handleChange}

      aria-label="secondary tabs example"
    >
      <Tab sx={{height: '22px', minHeight: '0'}} value={"day"} label={"D"} />
      <Tab sx={{height: '22px', minHeight: '0'}} value={"week"} label={"W"} />
      <Tab sx={{height: '22px', minHeight: '0'}} value={"month"} label={"M"} />
    </Tabs>
    </Box>
  );
}
