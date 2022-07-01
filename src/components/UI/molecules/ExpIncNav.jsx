import React from "react";
import { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
// import axios from "axios";

export default function ExpIncNav ({tabName, tabValue}) {
  const [value, setValue] = useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value={"one"} label={"Expenses"} />
        <Tab value={"two"} label={"Income"} />
      </Tabs>
    </Box>
  );
}
