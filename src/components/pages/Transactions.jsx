import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box"
import PageHeader from "../UI/atoms/PageHeader.jsx"; 
import NavBar from "../UI/organisms/NavBar.jsx"
import TxnsNav from "../UI/molecules/TxnsNav.jsx";
import ListTxnsByDate from "../UI/organisms/ListTxnByDate.jsx";
import GenerateIcon from "../UI/atoms/GenerateIcon.jsx";
import getMonthFirstLastDate from "../../utils/getMonthFirstLastDate.mjs"
import fetcherGet from "../../utils/fetcherGet.mjs"
import useSWR from "swr";
import { useLocation } from "react-router-dom";
import AlertSnackbar from "../UI/atoms//AlertSnackbar.jsx";

export default function Transactions () {
  const [txns, setTxns] = useState([]);
  const [shouldFetch, setShouldFetch] = useState(true);
  const [month, setMonth] = useState(new Date());

  useEffect(() => {
    setShouldFetch(true)
  }, [month]);

  const {data, error} = useSWR(shouldFetch ? [`${process.env.REACT_APP_BACKEND_URL}/transactions?fields=id&fields=title&fields=amount&fields=category&fields=txnDate&sort=txnDate:DESC&txnDateMin=${getMonthFirstLastDate(month).firstDay}&txnDateMax=${getMonthFirstLastDate(month).lastDay}`] : null, fetcherGet);

  if (data) {
    setShouldFetch(false);
    setTxns(data.transactions);
    console.log(data);
  }

  let location = useLocation(); 
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
        <Box>
          <GenerateIcon name={'tune'} />
          <GenerateIcon name={'sort'} />
        </Box>
      </Box>
      <TxnsNav month={month} setMonth={setMonth}/>
      <ListTxnsByDate txns={txns} />
      <NavBar />
    </Box>
  );
}

