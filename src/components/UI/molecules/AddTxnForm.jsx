import React, { useState } from "react";
import InputField from "../atoms/InputField";
import PrimaryBtn from "../atoms/PrimaryBtn";
import Box from "@mui/material/Box";
import TxnAmtField from "../atoms/TxnAmtField.jsx";
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import TextField from '@mui/material/TextField';
import useSWR from "swr";
import fetcherGet from "../../../utils/fetcherGet.mjs";
import fetcherPut from "../../../utils/fetcherPut.mjs";

export default function AddTxnForm ({ txnId }) {
  // to determine current date to prefill default date value when adding txn
  const curr = new Date();
  // curr.setDate(curr.getDate() + 3);
  // const date = curr.toISOString().substring(0,10);
  var tzOffset = (new Date()).getTimezoneOffset() * 60000;

  const [amount, setAmount] = useState("0.00");
  const [txnDate, setTxnDate] = useState(curr);
  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState("1"); // set as default 1 for now
  const [shouldPost, setShouldPost] = useState(false); 
  const [shouldFetch, setShouldFetch] = useState(true); 

  const postUrl = txnId === "add" ? `http://localhost:3004/transactions` : `http://localhost:3004/transactions/${txnId}`

  if (txnId !== "add") {
    const {data, error} = useSWR(shouldFetch ? [`http://localhost:3004/transactions/${txnId}`] : null, fetcherGet);
    
    if (data) {
      setShouldFetch(false);
      console.log(data);
      setAmount(data.amount);
      setTxnDate(new Date(txnDate));
      setTitle(data.title);
      setCategoryId(data.categories[0].id);
    }
  }


  const onSuccess = (data) => {
    setShouldPost(false);
    if (data.success) console.log(data); // on success
  }

  const onError = (error) => {
    setShouldPost(false);
  }

  useSWR(shouldPost ? [postUrl, { amount, txnDate, title, categoryId }] : null, fetcherPut, {onSuccess, onError});

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  }

  const handleTxnDateChange = (e) => { // only works if use datepicker
    setTxnDate(new Date(e.target.value));
  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleCategoryIdChange = (e) => { // not yet linked to category input
    setCategoryId(e.target.value);
  }

  const handleFormSubmit = () => {
    setShouldPost(true);
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
        <InputField fieldName={'txnDate'} fieldType={'date'} fieldAttribute={'required'} fieldValue={(new Date(txnDate - tzOffset)).toISOString().split('T')[0]} isRequired={true} handleChange={handleTxnDateChange}/>
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

