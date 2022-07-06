import React, { useState, useEffect } from "react";
import PageHeader from "../UI/atoms/PageHeader.jsx"; 
import Box from "@mui/material/Box"
import NavBar from "../UI/organisms/NavBar.jsx";
import TxnsNav from "../UI/molecules/TxnsNav.jsx";
import getMonthFirstLastDate from "../../utils/getMonthFirstLastDate.mjs"
import fetcherGet from "../../utils/fetcherGet.mjs"
import useSWR from "swr";
import ReportsNav from "../UI/molecules/ReportsNav.jsx";
import { Grid } from "@mui/material";


export default function Reports () {
  const [txns, setTxns] = useState([]);
  const [shouldFetch, setShouldFetch] = useState(true);
  const [month, setMonth] = useState(new Date());
  const [tabFocus, setTabFocus] = useState("date");
  const expenseAmt = '2,290.17';
  const incomeAmt = '3,200';


  useEffect(() => {
    setShouldFetch(true)
  }, [month]);

  const {data, error} = useSWR(shouldFetch ? [`http://localhost:3004/transactions?fields=id&fields=title&fields=amount&fields=category&fields=txnDate&sort=txnDate:DESC&txnDateMin=${getMonthFirstLastDate(month).firstDay}&txnDateMax=${getMonthFirstLastDate(month).lastDay}`] : null, fetcherGet);

  if (data) {
    setShouldFetch(false);
    setTxns(data.transactions);
    console.log(data);
  }
  
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
    <PageHeader pageTitle={`Reports`} />
    <TxnsNav month={month} setMonth={setMonth}/>
    <ReportsNav setTabFocus={setTabFocus}/>

    <Box sx={{
      // width: 300,
      width: '100%',
      height: 300,
      backgroundColor: 'primary.dark',
      marginBottom: '15px'
      }}>
    </Box>

    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Box sx={{
          // width: 300,
          // width: '100',
          height: 150,
          backgroundColor: '#27A37A'}}>
        </Box>
        <p style={{marginBottom: 0}}>Income</p>
        <p style={{marginTop: 0}}>$ {incomeAmt}</p>
      </Grid>
      <Grid item xs={6}>
        <Box sx={{
          // width: 300,
          // width: '48.5%',
          height: 150,
          backgroundColor: '#CF65F2'}}>
        </Box>
        <p style={{marginBottom: 0}}>Expense</p>
        <p style={{marginTop: 0}}>$ {expenseAmt}</p>
      </Grid>
    </Grid>   
    <NavBar />
  </Box>
  );
}

