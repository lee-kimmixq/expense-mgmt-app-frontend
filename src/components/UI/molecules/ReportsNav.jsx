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
    <Box>
      <Tabs
        variant="fullWidth"
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value={"date"} label={"D"} />
        <Tab value={"week"} label={"W"} />
        <Tab value={"month"} label={"M"} />
      </Tabs>
    </Box>
  );
}
