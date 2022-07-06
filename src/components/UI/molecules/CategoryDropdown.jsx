import React, { useState } from "react";
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import Select from '@mui/material/Select';
// import axios from "axios";

export default function CategoryDropdown ({selectValue, handleChange}) {

  return (
    <Select
      value={selectValue}
      onChange={handleChange}
      label="Category"
      variant="outlined"
      size="small"
      select
    >
      <MenuItem value="0">
        <em>Select Category</em>
      </MenuItem>
      <ListSubheader>Income</ListSubheader>
        <MenuItem value={1}>Option 1</MenuItem>
        <MenuItem value={2}>Option 2</MenuItem>
      <ListSubheader>Expense</ListSubheader>
        <MenuItem value={3}>Option 3</MenuItem>
        <MenuItem value={4}>Option 4</MenuItem>
    </Select>
  );
}
