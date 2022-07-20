import React, { useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TxnAmtField from "../atoms/TxnAmtField.jsx";
import CategoryDropdown from "../molecules/CategoryDropdown.jsx";

export default function FormDialog({handleClickOpen, setOpen, dialogTitle, handleSubmit, handleAddBudget }) {

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
            // backgroundColor: "#eeeeee",
            boxShadow: "none",
          },
        }}
        open={handleClickOpen} 
        onClose={handleClose}>
        {/* <DialogTitle>{dialogTitle}</DialogTitle> */}
        <DialogContent>
         
          <CategoryDropdown filterValues={'isIncome=false'} selectValue={categoryId} handleChange={handleCategoryIdChange}/>
          <TxnAmtField fieldName={'txnAmt'} fieldType={'number'} fieldAttribute={'required'} fieldValue={amount} isRequired={true} handleChange={handleAmountChange}/>

        </DialogContent>
        <DialogActions>
          <Button variant="outlined" sx={{color: '#efefef', borderColor: '#999999'}} onClick={handleClose}>Cancel</Button>
          <Button variant="contained" sx={{color: ''}} onClick={() => { handleAddBudget({ amount, categoryId })}}>Save</Button>
        </DialogActions>
      </Dialog>

    </div>
  );
}
