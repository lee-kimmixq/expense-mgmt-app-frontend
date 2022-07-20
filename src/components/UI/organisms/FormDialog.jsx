import React, { useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TxnAmtField from "../atoms/TxnAmtField.jsx";
import CategoryDropdown from "../molecules/CategoryDropdown.jsx";

export default function FormDialog({handleClickOpen, setOpen, handleEditBudget }) {

  const [amount, setAmount] = useState("0.00");
  const [categoryId, setCategoryId] = useState("");

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
            boxShadow: "none",
          },
        }}
        open={handleClickOpen} 
        onClose={handleClose}>
        <DialogContent>
         
          <CategoryDropdown filterValues={'isIncome=false'} selectValue={categoryId} handleChange={handleCategoryIdChange}/>
          <TxnAmtField fieldName={'txnAmt'} fieldType={'number'} fieldAttribute={'required'} fieldValue={amount} isRequired={true} handleChange={handleAmountChange}/>

        </DialogContent>
        <DialogActions>
          <Button variant="outlined" sx={{color: '#efefef', borderColor: '#999999'}} onClick={handleClose}>Cancel</Button>
          <Button variant="contained" sx={{color: ''}} onClick={() => { handleEditBudget({ amount, categoryId }, true)}}>Save</Button>
        </DialogActions>
      </Dialog>

    </div>
  );
}
