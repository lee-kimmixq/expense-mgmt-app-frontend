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
import getFirstLastDates from '../../../utils/getFirstLastDates.mjs'
import getDateObj from '../../../utils/getDateObj.mjs'

export default function SortFilterDialog ({handleOpen, setHandleOpen, name, alertDescription, yesBtnLabel, noBtnLabel, filters, setFilters} ) {
  const {firstDate, lastDate} = getFirstLastDates();

  const [sortValue, setSortValue] = useState(filters && filters.sort ? filters.sort : 'txnDate:DESC')
  const [txnDateFilter, setTxnDateFilter] = useState({txnDateMin: filters ? filters.txnDateMin : firstDate, txnDateMax: filters ? filters.txnDateMax :lastDate})
  const [amountFilter, setAmountFilter] = useState({amountMin: filters ? filters.amountMin : '', amountMax: filters ? filters.amountMax : ''});
  const [categoryId, setCategoryId] = useState(filters ? filters.categories : []);

  const handleSave = () => {
    setHandleOpen(false);
    setFilters({
      sort: sortValue,
      ...txnDateFilter,
      ...amountFilter,
      categories: categoryId
    })
  }

  const handleClose = () => {
    setHandleOpen(false);
  }; 

  const handleSortChange = (e) => {
    setSortValue(e.target.value);
  }

  const handleTxnDateMinChange = (e) => {
    setTxnDateFilter({...txnDateFilter, txnDateMin: getDateObj(false, e.target.value)})
  }

  const handleTxnDateMaxChange = (e) => {
    setTxnDateFilter({...txnDateFilter, txnDateMax: getDateObj(true, e.target.value)})
  }

  const handleAmountMinChange = (e) => {
    setAmountFilter({...amountFilter, amountMin: e.target.value})
  }

  const handleAmountMaxChange = (e) => {
    setAmountFilter({...amountFilter, amountMax: e.target.value})
  }

  const handleCategoryIdChange = (_, val, reason) => {
    setCategoryId(val);
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
            value={sortValue}
          >
            <MenuItem value={'txnDate:DESC'}>Latest Transactions</MenuItem>
            <MenuItem value={'txnDate:ASC'}>Oldest Transactions</MenuItem>
            <MenuItem value={'amount:DESC'}>Highest Transaction Amount</MenuItem>
            <MenuItem value={'amonut:ASC'}>Lowest Transaction Amount</MenuItem>
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
              <MinMaxInputs fieldName={'txnDate'} fieldType={'date'} handleMinChange={handleTxnDateMinChange} handleMaxChange={handleTxnDateMaxChange} minValue={new Date(txnDateFilter.txnDateMin).toLocaleDateString('en-CA')} maxValue={new Date(txnDateFilter.txnDateMax).toLocaleDateString('en-CA')} />
            } 
          />
          <Expand 
            expandTitle={'Transaction Amount'} 
            expandContents={
              <MinMaxInputs fieldName={'txnAmt'} fieldType={'number'} handleMinChange={handleAmountMinChange} handleMaxChange={handleAmountMaxChange} minValue={amountFilter.amountMin} maxValue={amountFilter.amountMax}/>
            } 
          />
          <Expand 
            expandTitle={'Category'} 
            expandContents={
              <MultipleCategorySelectDropdown handleChange={handleCategoryIdChange} selectedValues={categoryId}/>
            } 
          />

        </DialogContent>
        <DialogActions>
          <Button variant="outlined" sx={{color: '#efefef', borderColor: '#999999'}} onClick={handleClose}>{noBtnLabel}</Button>
          <Button variant="contained" sx={{color: ''}} onClick={handleSave}>{yesBtnLabel}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
