import React from "react";
import { Tab } from "@mui/material";
// import axios from "axios";

export default function NavTab ({tabName, tabValue}) {

  return (
      <Tab value={tabValue} label={tabName} />
  );
}