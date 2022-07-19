import React, { useState } from "react";
import Box from "@mui/material/Box"
import PageHeader from "../UI/atoms/PageHeader.jsx"; 
import NavBar from "../UI/organisms/NavBar.jsx"
import TxnsNav from "../UI/molecules/TxnsNav.jsx";
import ListTxnsByDate from "../UI/organisms/ListTxnByDate.jsx";
import { useLocation } from "react-router-dom";
import AlertSnackbar from "../UI/atoms//AlertSnackbar.jsx";
import useTxns from "../../utils/useTxns.js";
import getTxnQueryParams from "../../utils/getTxnQueryParams.js";
import Loading from "../pages/Loading.jsx"
import GenerateIconBtn from "../UI/atoms/GenerateIconBtn.jsx";
import SortFilterDialog from "../UI/molecules/SortFilterDialog.jsx";
import { TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import InputAdornment from '@mui/material/InputAdornment';


export default function Transactions () {
  const [month, setMonth] = useState(new Date());
  const [showFilterDialog, setShowFilterDialog] = useState(false);
  const [searchMode, setSearchMode] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filters, setFilters] = useState(null);

  const handleClickSearch = () => {
    setSearchMode(!searchMode);
  };

  const { data, isLoading } = useTxns(getTxnQueryParams("transactions", null, "month", month, filters));

  let location = useLocation(); 
  
  if (isLoading) return <Loading />;
  
  let txnAddSuccess = false;
  let txnDeleteSuccess = false;
  if (location.state && location.state.txnAddSuccess) txnAddSuccess = true;
  if (location.state && location.state.txnDeleteSuccess) txnDeleteSuccess = true;

  const filteredTransactions = data.transactions.filter((txn) => {
    const pattern = new RegExp(searchText, "i")
    return pattern.test(txn.title)}
  )

  return (
    <Box
    sx={{
        display: 'inline-flex',
        flexDirection: 'column',
        rowGap: '10px',
        width: '80%',
        marginTop: '10vmin'
      }}
    >
      {txnAddSuccess && <AlertSnackbar alertSeverity={'success'} alertLabel={'Transaction added'} displayAlert={true}/>}
      {txnDeleteSuccess && <AlertSnackbar alertSeverity={'success'} alertLabel={'Transaction deleted'} displayAlert={true}/>}
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <PageHeader pageTitle={`Transactions`} />
        <Box sx={{
          display: 'flex',
        }}>
          <GenerateIconBtn name={'tune'} onClickCallback={() => {setShowFilterDialog(true)}}/>
          {searchMode ? (<GenerateIconBtn name={'cancel'} onClickCallback={handleClickSearch}/>) : <GenerateIconBtn name={'search'} onClickCallback={handleClickSearch} />}
        </Box>
      </Box>
      
      <TxnsNav month={month} setMonth={setMonth}/>
      {searchMode && 
        <TextField
          size="small"
          InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }
      }
      onChange={(e)=>{ setSearchText(e.target.value) }}
        />}
      <ListTxnsByDate txns={filteredTransactions} />
      <br />
      <br />
      <br />
      <NavBar />
      {showFilterDialog && <SortFilterDialog setHandleOpen={setShowFilterDialog} handleOpen={showFilterDialog} name={'Filter'} yesBtnLabel={'Save'} noBtnLabel={'Cancel'} filters={filters} setFilters={setFilters}/>}
    </Box>
  );
}

