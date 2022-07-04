import React, { useState } from "react";
import InputField from "../atoms/InputField";
import PrimaryBtn from "../atoms/PrimaryBtn";
import Box from "@mui/material/Box";
import TxnAmtField from "../atoms/TxnAmtField.jsx";
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import TextField from '@mui/material/TextField';
import useSWR from "swr";
import fetcherPost from "../../../utils/fetcherPost.mjs";

export default function AddTxnForm ({ txnId }) {
  // to determine current date to prefill default date value when adding txn
  const curr = new Date();
  curr.setDate(curr.getDate() + 3);
  const date = curr.toISOString().substring(0,10);

  const [amount, setAmount] = useState("0.00");
  const [txnDate, setTxnDate] = useState(date);
  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState("1"); // set as default 1 for now
  const [shouldFetch, setShouldFetch] = useState(false); 

  const onSuccess = (data) => {
    setShouldFetch(false);
    if (data) console.log(data);
  }

  const onError = (error) => {
    setShouldFetch(false);
  }

  useSWR(shouldFetch ? [`http://localhost:3004/transactions`, { amount, txnDate, title, categoryId }] : null, fetcherPost, {onSuccess, onError});

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  }

  const handleTxnDateChange = (e) => {
    setTxnDate(e.target.value);
  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleCategoryIdChange = (e) => { // not yet linked to category input
    setCategoryId(e.target.value);
  }

  const handleFormSubmit = () => {
    setShouldFetch(true);
  }

  return (
    <Box
      component="form"
      sx={{
        display: 'inline-flex',
        flexDirection: 'column',
        rowGap: '15px',
      }}
      >
        <TxnAmtField fieldName={'txnAmt'} fieldType={'number'} fieldAttribute={'required'} fieldValue={amount} isRequired={true} handleChange={handleAmountChange}/>
        <InputField fieldName={'txnDate'} fieldType={'date'} fieldAttribute={'required'} fieldValue={txnDate} isRequired={true} handleChange={handleTxnDateChange}/>
        <InputField fieldName={'txnName'} fieldType={'text'} fieldAttribute={'required'} fieldValue={title} fieldLabel={'Expense Name'} isRequired={true} handleChange={handleTitleChange}/>
        <TextField
          defaultValue=""
          label="Category"
          variant="outlined"
          size="small"
          select
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <ListSubheader>Income</ListSubheader>
            <MenuItem value={1}>Option 1</MenuItem>
            <MenuItem value={2}>Option 2</MenuItem>
          <ListSubheader>Expense</ListSubheader>
            <MenuItem value={3}>Option 3</MenuItem>
            <MenuItem value={4}>Option 4</MenuItem>
        </TextField>
    
        <PrimaryBtn buttonLabel={'Save'} onClickCallback={handleFormSubmit}/>
      </Box>
      
  );
}

