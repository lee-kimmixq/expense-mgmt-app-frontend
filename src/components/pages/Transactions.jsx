import React, { useState } from "react";
import Box from "@mui/material/Box"
import PageHeader from "../UI/atoms/PageHeader.jsx"; 
import NavBar from "../UI/organisms/NavBar.jsx"
import TxnsNav from "../UI/molecules/TxnsNav.jsx";
import ListTxnsByDate from "../UI/organisms/ListTxnByDate.jsx";
import { useLocation } from "react-router-dom";
import AlertSnackbar from "../UI/atoms//AlertSnackbar.jsx";
import useTxns from "../../utils/useTxns.js";
import Loading from "../pages/Loading.jsx"
import GenerateIconBtn from "../UI/atoms/GenerateIconBtn.jsx";
import SortFilterDialog from "../UI/molecules/SortFilterDialog.jsx";

export default function Transactions () {
  const [month, setMonth] = useState(new Date());
  const [showFilterDialog, setShowFilterDialog] = useState(false);

  const { data, isLoading } = useTxns("transactions", null, "month", month);

  let location = useLocation(); 
  
  if (isLoading) return <Loading />;
  let txnAddSuccess = false;
  let txnDeleteSuccess = false;
  if (location.state && location.state.txnAddSuccess) txnAddSuccess = true;
  if (location.state && location.state.txnDeleteSuccess) txnDeleteSuccess = true;


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
          {/* <GenerateIconBtn name={'sort'} /> */}
        </Box>
      </Box>
      <TxnsNav month={month} setMonth={setMonth}/>
      <ListTxnsByDate txns={data.transactions} />
      <br />
      <br />
      <br />
      <NavBar />
      {showFilterDialog && <SortFilterDialog setHandleOpen={setShowFilterDialog} handleOpen={showFilterDialog} name={'Filter'} yesBtnLabel={'Save'} noBtnLabel={'Cancel'} />}
    </Box>
  );
}

