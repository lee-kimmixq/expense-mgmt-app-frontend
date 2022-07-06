import React, { useState } from "react";
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import Select from '@mui/material/Select';
import useSWR from "swr";
import fetcher from "../../../utils/fetcher.mjs";

export default function CategoryDropdown ({selectValue, handleChange}) {
  const [categories, setCategories] = useState([]);
  const [shouldFetch, setShouldFetch] = useState(true); 

  const {data, error} = useSWR(shouldFetch ? [`${process.env.REACT_APP_BACKEND_URL}/categories`] : null, fetcher.get);

  if (data) {
      setShouldFetch(false);
      setCategories(data.categories);
  }

  const incomeCatList = categories.length === 0 ? <MenuItem value="0">
        <em>No Categories Available</em>
      </MenuItem> : categories.filter((category) => category.isIncome).map((category) => 
        <MenuItem value={category.id} key={`cat${category.id}`}>{category.name}</MenuItem>
      );

  const expenseCatList = categories.length === 0 ? <MenuItem value="0">
        <em>No Categories Available</em>
      </MenuItem> : categories.filter((category) => !category.isIncome).map((category) => 
        <MenuItem value={category.id} key={`cat${category.id}`}>{category.name}</MenuItem>
      );

  return (
    <Select
      value={selectValue}
      onChange={handleChange}
      label="Category"
      variant="outlined"
      size="small"
    >
      <MenuItem value="0">
        <em>Select Category</em>
      </MenuItem>
      <ListSubheader>Income</ListSubheader>
      {incomeCatList}
      <ListSubheader>Expense</ListSubheader>
      {expenseCatList}
    </Select>
  );
}
