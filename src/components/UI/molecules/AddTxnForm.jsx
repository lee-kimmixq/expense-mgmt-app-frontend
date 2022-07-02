import React from "react";
import InputField from "../atoms/InputField";
import PrimaryBtn from "../atoms/PrimaryBtn";
import Box from "@mui/material/Box";
import TxnAmtField from "../atoms/TxnAmtField.jsx";
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import TextField from '@mui/material/TextField';

// import axios from "axios";

export default function AddTxnForm () {

  // to determine current date to prefill default date value when adding txn
  const curr = new Date();
  curr.setDate(curr.getDate() + 3);
  const date = curr.toISOString().substring(0,10);

  return (
    <Box
      component="form"
      sx={{
        display: 'inline-flex',
        flexDirection: 'column',
        rowGap: '15px',
      }}
      >
        <TxnAmtField fieldName={'txnAmt'} fieldType={'number'} fieldAttribute={'required'} fieldValue={'0.00'} isRequired={true}/>
        <InputField fieldName={'txnDate'} fieldType={'date'} fieldAttribute={'required'} fieldValue={date} isRequired={true}/>
        <InputField fieldName={'txnName'} fieldType={'text'} fieldAttribute={'required'} fieldLabel={'Expense Name'} isRequired={true}/>
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
    
        <PrimaryBtn buttonLabel={'Save'} />
      </Box>
      
  );
}

