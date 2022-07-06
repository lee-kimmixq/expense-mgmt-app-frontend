import React, { useState } from "react";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
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

  const categoriesList = categories.map((category) => {
    return { type: category.isIncome ? "Income" : "Expense", ...category }
  })

  const sortFunc = (a, b) => {
    if (a.isIncome === b.isIncome) return a.name.localeCompare(b.name);
    if (a.isIncome) return 1
    return -1
  }

  return (
    <Autocomplete
      value={categories.filter((category) => category.id === selectValue)[0] || null}
      options={categoriesList.sort(sortFunc)}
      groupBy={(category) => category.type}
      getOptionLabel={(category) => category.name}
      renderInput={(params) => <TextField {...params} label="Select category" />}
      onChange={handleChange}
      size="small"
      isOptionEqualToValue={(option, value) => option.id === value.id}
    />
  );
}
