import React, { useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TxnAmtField from "../atoms/TxnAmtField.jsx";
import CategoryDropdown from "../molecules/CategoryDropdown.jsx";
import useSWR from "swr";
import fetcher from "../../../utils/fetcher.mjs";


export default function ThreeBtnFormDialog ({ budget, setShowEditDialog, handleEditBudget, handleDelete }) {

  const [amount, setAmount] = useState(budget.amount);
  const [categoryId, setCategoryId] = useState(budget.categoryId);
  const [shouldDelete, setShouldDelete] = useState(false);

  const onDeleteSuccess = (data) => {
    if (data) {
      // mutate(`${process.env.REACT_APP_BACKEND_URL}/budgets`, true);
      setShowEditDialog(false);
      setShouldDelete(false);
    }
  }

  useSWR(shouldDelete ? `${process.env.REACT_APP_BACKEND_URL}/budgets/${budget.id}` : null, fetcher.delete, {onSuccess: onDeleteSuccess})

  const handleClose = () => {
    setShowEditDialog(false);
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
        open={Boolean(budget)} 
        onClose={handleClose}>
        <DialogContent>
          <CategoryDropdown filterValues={'isIncome=false'} selectValue={categoryId} handleChange={handleCategoryIdChange}/>
          <TxnAmtField fieldName={'txnAmt'} fieldType={'number'} fieldAttribute={'required'} fieldValue={amount} isRequired={true} handleChange={handleAmountChange}/>

        </DialogContent>
        <DialogActions>
          <Button variant="outlined" sx={{color: '#efefef', borderColor: '#999999'}} onClick={handleClose}>Cancel</Button>
          <Button variant="outlined" color="warning" onClick={handleDelete}>Delete</Button>
          <Button variant="contained" sx={{color: ''}} onClick={() => {handleEditBudget({ amount, categoryId })}}>Save</Button>
        </DialogActions>
      </Dialog>

    </div>
  );
}
