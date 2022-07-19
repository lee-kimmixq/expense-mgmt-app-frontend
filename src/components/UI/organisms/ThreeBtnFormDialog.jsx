import React, { useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TxnAmtField from "../atoms/TxnAmtField.jsx";
import CategoryDropdown from "../molecules/CategoryDropdown.jsx";


export default function ThreeBtnFormDialog ({handleClickOpen, setOpen, dialogTitle, handleSubmit, handleDelete, budgetAmt, category }) {

  const [amount, setAmount] = useState(budgetAmt);
  const [categoryId, setCategoryId] = useState(category);

  const handleClose = () => {
    setOpen(false);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleCategoryIdChange = (_, val) => {
    setCategoryId(val.id);
  };

  return (
    <div>
      
      <Dialog 
        maxWidth={'sm'}
        PaperProps={{
          style: {
            // backgroundColor: "#eeeeee",
            boxShadow: "none",
          },
        }}
        open={Boolean(handleClickOpen)} 
        onClose={handleClose}>
        {/* <DialogTitle>{dialogTitle}</DialogTitle> */}
        <DialogContent>
         
          <CategoryDropdown filterValues={'isIncome=false'} selectValue={categoryId} handleChange={handleCategoryIdChange}/>
          <TxnAmtField fieldName={'txnAmt'} fieldType={'number'} fieldAttribute={'required'} fieldValue={amount} isRequired={true} handleChange={handleAmountChange}/>

        </DialogContent>
        <DialogActions>
          <Button variant="outlined" sx={{color: '#efefef', borderColor: '#999999'}} onClick={handleClose}>Cancel</Button>
          <Button variant="outlined" color="warning" onClick={handleDelete}>Delete</Button>
          <Button variant="contained" sx={{color: ''}} onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>

    </div>
  );
}
