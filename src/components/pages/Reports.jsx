import React, { useState, useEffect } from "react";
import PageHeader from "../UI/atoms/PageHeader.jsx"; 
import Box from "@mui/material/Box"
import NavBar from "../UI/organisms/NavBar.jsx";
import TxnsNav from "../UI/molecules/TxnsNav.jsx";
import getMonthFirstLastDate from "../../utils/getMonthFirstLastDate.mjs"
import fetcher from "../../utils/fetcher.mjs"
import useSWR from "swr";
import ReportsNav from "../UI/molecules/ReportsNav.jsx";
import { Grid } from "@mui/material";
import { Link } from 'react-router-dom';
import ReportsDonutChart from "../UI/molecules/ReportsDonutChart.jsx";

export default function Reports () {
  const [expenseTxns, setExpenseTxns] = useState([]);
  const [expenseBreakdown, setExpenseBreakdown] = useState([]);
  const [incomeBreakdown, setIncomeBreakdown] = useState([]);
  const [shouldFetchExp, setShouldFetchExp] = useState(true);
  const [shouldFetchInc, setShouldFetchInc] = useState(true);
  const [month, setMonth] = useState(new Date());
  const [tabFocus, setTabFocus] = useState("date");
  const expenseAmt = '2,290.17';
  const incomeAmt = '3,200';


  useEffect(() => {
    setShouldFetchExp(true)
    setShouldFetchInc(true)
  }, [month]);

  const { firstDay, lastDay } = getMonthFirstLastDate();

  const {data: expenseData, error: expenseErr} = useSWR(shouldFetchExp ? [`${process.env.REACT_APP_BACKEND_URL}/transactions?fields=id&fields=title&fields=amount&fields=category&fields=txnDate&txnDateMin=${firstDay}&txnDateMax=${lastDay}&isIncome=false&includeUser=true&includeBreakdown=true`] : null, fetcher.get);

  if (expenseData) {
    console.log(expenseData);
    setShouldFetchExp(false);
    setExpenseTxns(expenseData.transactions);
    setExpenseBreakdown(expenseData.breakdown.map((category) => { return {...category, total: Number(category.total)}}));
  }

  const {data: incomeData, error: incomeErr} = useSWR(shouldFetchInc ? [`${process.env.REACT_APP_BACKEND_URL}/transactions?fields=id&fields=title&fields=amount&fields=category&fields=txnDate&txnDateMin=${firstDay}&txnDateMax=${lastDay}&isIncome=true&includeUser=true&includeBreakdown=true`] : null, fetcher.get);

  if (incomeData) {
    console.log(incomeData);
    setShouldFetchInc(false);
    setIncomeBreakdown(incomeData.breakdown.map((category) => { return {...category, total: Number(category.total)}}));
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
      width: '100%',
      height: 300,
      backgroundColor: 'primary.dark',
      marginBottom: '15px'
      }}>
    </Box>

    <Grid container spacing={2}>
        <Grid item xs={6}>
          <Link to={`/breakdown`} style={{ textDecoration: 'none' }} className={'link'}>
            <Box sx={{
              height: 150,
              backgroundColor: '#27A37A'}}>
              <ReportsDonutChart data={incomeBreakdown} />
            </Box>
            <p style={{marginBottom: 0, fontWeight: 'bold'}}>Income</p>
            <p style={{marginTop: 0}}>$ {incomeAmt}</p>
          </Link>
        </Grid>
      
      <Grid item xs={6}>
        <Link to={`/breakdown`} style={{ textDecoration: 'none' }} className={'link'}>
          <Box sx={{
            height: 150,
            backgroundColor: '#CF65F2'}}>
              <ReportsDonutChart data={expenseBreakdown} />
          </Box>
          <p style={{marginBottom: 0, fontWeight: 'bold'}}>Expense</p>
          <p style={{marginTop: 0}}>$ {expenseAmt}</p>
        </Link>
      </Grid>
    </Grid>   
    <NavBar />
  </Box>
  );
}

