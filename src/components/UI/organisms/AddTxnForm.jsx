import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../atoms/InputField";
import PrimaryBtn from "../atoms/PrimaryBtn";
import Box from "@mui/material/Box";
import TxnAmtField from "../atoms/TxnAmtField.jsx";
import CategoryDropdown from "../molecules/CategoryDropdown.jsx";
import useSWR from "swr";
import fetcher from "../../../utils/fetcher.mjs";
import AlertSnackbar from "../atoms/AlertSnackbar.jsx";


export default function AddTxnForm ({ txnId }) {
  let navigate = useNavigate();
  
  // to determine current date to prefill default date value when adding txn
  const curr = new Date();
  // curr.setDate(curr.getDate() + 3);
  // const date = curr.toISOString().substring(0,10);
  var tzOffset = (new Date()).getTimezoneOffset() * 60000;

  const [amount, setAmount] = useState("0.00");
  const [txnDate, setTxnDate] = useState(curr);
  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState();
  const [shouldPost, setShouldPost] = useState(false); 
  const [shouldFetch, setShouldFetch] = useState(true); 
  const [isSuccess, setIsSuccess] = useState(false);

  const postUrl = txnId === "add" ? `${process.env.REACT_APP_BACKEND_URL}/transactions` : `${process.env.REACT_APP_BACKEND_URL}/transactions/${txnId}`

  const fetcherToUse = txnId === "add" ? fetcher.post : fetcher.put;

  if (txnId !== "add") {
    const {data, error} = useSWR(shouldFetch ? [`${process.env.REACT_APP_BACKEND_URL}/transactions/${txnId}`] : null, fetcher.get);
    
    if (data) {
      setShouldFetch(false);
      console.log(data);
      setAmount(data.amount);
      setTxnDate(new Date(data.txnDate));
      setTitle(data.title);
      setCategoryId(data.categories[0].id);
    }
  }


  const onSuccess = (data) => {
    setShouldPost(false);
    if (txnId === "add" && data) navigate(`/txns`, { replace: true, state: {txnAddSuccess: true} });; // on success
    if (txnId !== "add" && data) {
      console.log(data)
      if (data.success) setIsSuccess(true);
    }; // on success
  }

  const onError = (error) => {
    setShouldPost(false);
  }

  useSWR(shouldPost ? [postUrl, { amount, txnDate, title, categoryId }] : null, fetcherToUse, {onSuccess, onError});

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  }

  const handleTxnDateChange = (e) => { // only works if use datepicker
    setTxnDate(new Date(e.target.value));
  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleCategoryIdChange = (e, val) => {
    setCategoryId(val.id);
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
        {isSuccess && <AlertSnackbar alertSeverity={'success'} alertLabel={'Edit transaction success'} displayAlert={true}/>}
        <TxnAmtField fieldName={'txnAmt'} fieldType={'number'} fieldAttribute={'required'} fieldValue={amount} isRequired={true} handleChange={handleAmountChange}/>
        <InputField fieldName={'txnDate'} fieldType={'date'} fieldAttribute={'required'} fieldValue={(new Date(txnDate - tzOffset)).toISOString().split('T')[0]} isRequired={true} handleChange={handleTxnDateChange}/>
        <InputField fieldName={'txnName'} fieldType={'text'} fieldAttribute={'required'} fieldValue={title} fieldLabel={'Expense Name'} isRequired={true} handleChange={handleTitleChange}/>
        <CategoryDropdown handleChange={handleCategoryIdChange}/>
        <PrimaryBtn buttonLabel={'Save'} onClickCallback={handleFormSubmit}/>
      </Box>
      
  );
}

