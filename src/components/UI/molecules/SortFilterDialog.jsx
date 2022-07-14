import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { DialogTitle } from '@mui/material';
import Expand from '../atoms/Expand';
import MinMaxInputs from '../atoms/MinMaxInputs';
import MultipleCategorySelectDropdown from './MultipleCategorySelectDropdown';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function SortFilterDialog ({handleOpen, setHandleOpen, name, handleConfirm, alertDescription, yesBtnLabel, noBtnLabel} ) {
  const [categoryId, setCategoryId] = useState([]);
  const [selectedOption, setSelectedOption] = useState();
  console.log(categoryId)


  const handleClose = () => {
    setHandleOpen(false);
  }; 

  const handleSortChange = () => {

  }

  const handleCategoryIdChange = (_, val) => {
    console.log(val)
    setSelectedOption(val)
    setCategoryId([...categoryId, val[0].id]);
  }

  return (
    <div>
      
      <Dialog
        open={handleOpen}
        onClose={handleClose}
        maxWidth={'xl'}
        fullWidth={true}
        aria-labelledby={`alert-title-${name}`}
        aria-describedby={`alert-description-${name}`}
        PaperProps={{
          style: {
            // backgroundColor: "#eeeeee",
            boxShadow: "none",
          },
        }}
      >
        <DialogTitle>
          Sort by
        </DialogTitle>
        <DialogContent>
          <Select
            fullWidth={true}
            id="sort-select"
            onChange={handleSortChange}
            defaultValue={'latestTxn'}
          >
            <MenuItem value={'latestTxn'}>Latest Transactions</MenuItem>
            <MenuItem value={'oldestTxn'}>Oldest Transactions</MenuItem>
            <MenuItem value={'highestAmt'}>Highest Transaction Amount</MenuItem>
            <MenuItem value={'lowestAmt'}>Lowest Transaction Amount</MenuItem>
          </Select>
        </DialogContent>

        <DialogTitle>
          Filters
        </DialogTitle>
        <DialogContent>
          <DialogContentText id={`alert-description-${name}`} sx={{color: "#262431"}}>
            {alertDescription}
          </DialogContentText>

          <Expand 
            expandTitle={'Transaction Date'} 
            expandContents={
              <MinMaxInputs fieldName={'txnDate'} fieldType={'date'} />
            } 
          />
          <Expand 
            expandTitle={'Transaction Amount'} 
            expandContents={
              <MinMaxInputs fieldName={'txnAmt'} fieldType={'number'} />
            } 
          />
          <Expand 
            expandTitle={'Category'} 
            expandContents={
              <MultipleCategorySelectDropdown selectValue={selectedOption} handleChange={handleCategoryIdChange} />
            } 
          />

        </DialogContent>
        <DialogActions>
           <Button variant="outlined" sx={{color: '#efefef', borderColor: '#999999'}} onClick={handleClose}>{noBtnLabel}</Button>
          <Button variant="contained" sx={{color: ''}} onClick={handleClose}>{yesBtnLabel}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
