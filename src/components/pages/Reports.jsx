import React, { useState, useEffect } from "react";
import PageHeader from "../UI/atoms/PageHeader.jsx"; 
import Box from "@mui/material/Box"
import NavBar from "../UI/organisms/NavBar.jsx";
import TxnsNav from "../UI/molecules/TxnsNav.jsx";
import getMonthFirstLastDate from "../../utils/getMonthFirstLastDate.mjs"
import getWeekFirstLastDate from "../../utils/getWeekFirstLastDate.mjs"
import getDayFirstLastDate from "../../utils/getDayFirstLastDate.mjs"
import fetcher from "../../utils/fetcher.mjs"
import useSWR from "swr";
import ReportsNav from "../UI/molecules/ReportsNav.jsx";
import { Grid } from "@mui/material";
import { Link } from 'react-router-dom';
import ChartPie from "../UI/atoms/ChartPie.jsx"

export default function Reports () {
  const [expenseTxns, setExpenseTxns] = useState([]);
  const [totalExpense, setTotalExpense] = useState("");
  const [totalIncome, setTotalIncome] = useState("");
  const [expenseBreakdown, setExpenseBreakdown] = useState([]);
  const [incomeBreakdown, setIncomeBreakdown] = useState([]);
  const [shouldFetchExp, setShouldFetchExp] = useState(true);
  const [shouldFetchInc, setShouldFetchInc] = useState(true);
  const [month, setMonth] = useState(new Date());
  const [tabFocus, setTabFocus] = useState("date");

  useEffect(() => {
    setShouldFetchExp(true)
    setShouldFetchInc(true)
  }, [month, tabFocus]);

  let firstDay, lastDay;
  if (tabFocus === "date") {
    firstDay = getDayFirstLastDate().firstDay;
    lastDay = getDayFirstLastDate().lastDay;
  } else if (tabFocus === "week") {
    firstDay = getWeekFirstLastDate().firstDay;
    lastDay = getWeekFirstLastDate().lastDay;
  }
  else if (tabFocus === "month") {
    firstDay = getMonthFirstLastDate(month).firstDay;
    lastDay = getMonthFirstLastDate(month).lastDay;
  }

  const {data: expenseData, error: expenseErr} = useSWR(shouldFetchExp ? [`${process.env.REACT_APP_BACKEND_URL}/transactions?fields=id&fields=title&fields=amount&fields=category&fields=txnDate&txnDateMin=${firstDay}&txnDateMax=${lastDay}&isIncome=false&includeUser=true&includeBreakdown=true&includeTotal=true`] : null, fetcher.get);

  if (expenseData) {
    console.log(expenseData);
    setShouldFetchExp(false);
    setExpenseTxns(expenseData.transactions);
    setTotalExpense(expenseData.totalAmount);
    setExpenseBreakdown(expenseData.breakdown.map((category) => { return {...category, total: Number(category.total)}}));
  }

  const {data: incomeData, error: incomeErr} = useSWR(shouldFetchInc ? [`${process.env.REACT_APP_BACKEND_URL}/transactions?fields=id&fields=title&fields=amount&fields=category&fields=txnDate&txnDateMin=${firstDay}&txnDateMax=${lastDay}&isIncome=true&includeUser=true&includeBreakdown=true&includeTotal=true`] : null, fetcher.get);

  if (incomeData) {
    console.log(incomeData);
    setShouldFetchInc(false);
    setTotalIncome(incomeData.totalAmount);
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
            backgroundColor: '#CF65F2',
            display: "flex",
            alignItems: "center"}}>
              <ChartPie data={expenseBreakdown} hasTooltip={false}/>
          </Box>
          <p style={{marginBottom: 0, fontWeight: 'bold'}}>Expense</p>
          <p style={{marginTop: 0}}>$ {totalExpense}</p>
        </Link>
      </Grid>

      <Grid item xs={6}>
          <Link to={`/breakdown`} style={{ textDecoration: 'none' }} className={'link'}>
            <Box sx={{
              height: 150,
              backgroundColor: '#27A37A',
              display: "flex",
              alignItems: "center"}}>
              <ChartPie data={incomeBreakdown} hasTooltip={false}/>
            </Box>
            <p style={{marginBottom: 0, fontWeight: 'bold'}}>Income</p>
            <p style={{marginTop: 0}}>$ {totalIncome}</p>
          </Link>
        </Grid>
    </Grid>   
    <NavBar />
  </Box>
  );
}

