import React from "react";
import { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
// import axios from "axios";

export default function ExpIncNav ({setTabFocus}) {
  const [value, setValue] = useState('expenses');

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
        <Tab value={"expenses"} label={"Expenses"} />
        <Tab value={"income"} label={"Income"} />
      </Tabs>
    </Box>
  );
}
