import React from "react";
import InputField from "../atoms/InputField";
import PrimaryBtn from "../atoms/PrimaryBtn";
import Box from "@mui/material/Box";
import TxnAmtField from "../atoms/TxnAmtField.jsx";
import CategoryDropdown from "../molecules/CategoryDropdown.jsx";
import UploadReceiptBtn from "../molecules/UploadReceiptBtn.jsx";
import ViewReceiptBtn from "../molecules/ViewReceiptBtn.jsx";


export default function TxnForm ({ isEditForm, photo, setPhoto, amount, setAmount, txnDate, setTxnDate, title, setTitle, categoryId, setCategoryId, imageUrl, setShouldPost }) {

  var tzOffset = (new Date()).getTimezoneOffset() * 60000;

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  }

  const handleTxnDateChange = (e) => { // only works if use datepicker
    setTxnDate(new Date(e.target.value));
  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleCategoryIdChange = (_, val) => {
    val && setCategoryId(val.id);
  }

  const handleFileUpload = (e) => {
    setPhoto(e.target.files[0]);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
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
        {isEditForm ? <ViewReceiptBtn photo={photo} imageUrl={imageUrl} handleFileUpload={handleFileUpload}/> : <UploadReceiptBtn photo={photo} handleFileUpload={handleFileUpload} buttonText={'Upload Receipt'}/>}
        <TxnAmtField fieldName={'txnAmt'} fieldType={'number'} fieldAttribute={'required'} fieldLabel={amount ? amount : '0.00'} fieldValue={amount} isShrink={false} isRequired={true} handleChange={handleAmountChange}/>
        <InputField fieldName={'txnDate'} fieldType={'date'} fieldAttribute={'required'} fieldValue={(new Date(txnDate - tzOffset)).toISOString().split('T')[0]} isRequired={true} handleChange={handleTxnDateChange}/>
        <InputField fieldName={'txnName'} fieldType={'text'} fieldAttribute={'required'} fieldValue={title} fieldLabel={'Expense Name'} isRequired={true} handleChange={handleTitleChange}/>
        <CategoryDropdown selectValue={categoryId} handleChange={handleCategoryIdChange}/>
        <PrimaryBtn btnType={'submit'} buttonLabel={'Save'} onClickCallback={handleFormSubmit}/>
      </Box>
      
  );
}

