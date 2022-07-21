import React, { useState } from "react";
import InputField from "../atoms/InputField";
import PrimaryBtn from "../atoms/PrimaryBtn";
import Box from "@mui/material/Box";
import TxnAmtField from "../atoms/TxnAmtField.jsx";
import CategoryDropdown from "../molecules/CategoryDropdown.jsx";
import UploadReceiptBtn from "../molecules/UploadReceiptBtn.jsx";
import ViewReceiptBtn from "../molecules/ViewReceiptBtn.jsx";
import FormAlert from "../atoms/FormAlert";

export default function TxnForm ({ isEditForm, photo, setPhoto, amount, setAmount, txnDate, setTxnDate, title, setTitle, categoryId, setCategoryId, imageUrl, setShouldPost }) {

  const [showFormValidationError, setShowFormValidationError] = useState(false);
  const [amountInputError, setAmountInputError] = useState(false);
  const [txnDateInputError, setTxnDateInputError] = useState(false);
  const [titleInputError, setTitleInputError] = useState(false);
  const [categoryIdInputError, setCategoryIdInputError] = useState(false);


  var tzOffset = (new Date()).getTimezoneOffset() * 60000;

  const handleAmountChange = (e) => {
    setShowFormValidationError(false);
    setAmountInputError(false);
    setAmount(e.target.value);
  }

  const handleTxnDateChange = (e) => { // only works if use datepicker
    setShowFormValidationError(false);
    setTxnDateInputError(false);
    setTxnDate(new Date(e.target.value));
  }

  const handleTitleChange = (e) => {
    setShowFormValidationError(false);
    setTitleInputError(false);
    setTitle(e.target.value);
  }

  const handleCategoryIdChange = (_, val) => {
    setShowFormValidationError(false);
    setCategoryIdInputError(false);
    val && setCategoryId(val.id);
  }

  const handleFileUpload = (e) => {
    setPhoto(e.target.files[0]);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    (amount && txnDate && title && categoryId) ? setShouldPost(true) : setShowFormValidationError(true);
    (!amount && setAmountInputError(true));
    (!txnDate && setTxnDateInputError(true));
    (!title && setTitleInputError(true));
    (!categoryId && setCategoryIdInputError(true));
  };

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
        {showFormValidationError && <FormAlert alertSeverity={'error'} alertLabel={'Please fill in all fields'} />}
        <TxnAmtField fieldName={'txnAmt'} fieldType={'number'} fieldAttribute={'required'} fieldLabel={amount ? amount : '0.00'} fieldValue={amount} isShrink={false} isRequired={true} handleChange={handleAmountChange} inputError={amountInputError}/>
        <InputField fieldName={'txnDate'} fieldType={'date'} fieldAttribute={'required'} fieldValue={(new Date(txnDate - tzOffset)).toISOString().split('T')[0]} isRequired={true} handleChange={handleTxnDateChange} inputError={txnDateInputError}/>
        <InputField fieldName={'txnName'} fieldType={'text'} fieldAttribute={'required'} fieldValue={title} fieldLabel={'Expense Name'} isRequired={true} handleChange={handleTitleChange} inputError={titleInputError}/>
        <CategoryDropdown selectValue={categoryId} handleChange={handleCategoryIdChange} inputError={categoryIdInputError}/>
        <PrimaryBtn btnType={'submit'} buttonLabel={'Save'} onClickCallback={handleFormSubmit}/>
      </Box>
      
  );
}

