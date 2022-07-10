import React, { useState } from "react";
import ExpIncNav from "../UI/molecules/ExpIncNav.jsx";
import ListTxn from "../UI/organisms/ListTxn.jsx";
import Box from "@mui/material/Box"
import PageHeader from "../UI/atoms/PageHeader.jsx"; 
import TotalValuePrimary from "../UI/atoms/TotalValuePrimary.jsx"
import LinkTxt from "../UI/atoms/LinkTxt.jsx";
import NavBar from "../UI/organisms/NavBar.jsx"
import getMonthFirstLastDate from "../../utils/getMonthFirstLastDate.mjs"
import fetcher from "../../utils/fetcher.mjs"
import useSWR from "swr";
import DashboardChart from "../UI/molecules/DashboardChart.jsx";

export default function Dashboard () {
  const [username, setUsername] = useState("");
  const [totalExpense, setTotalExpense] = useState("");
  const [totalIncome, setTotalIncome] = useState("");
  const [expenseTxns, setExpenseTxns] = useState([]);
  const [incomeTxns, setIncomeTxns] = useState([]);
  const [shouldFetchExp, setShouldFetchExp] = useState(true);
  const [shouldFetchInc, setShouldFetchInc] = useState(true);
  const [tabFocus, setTabFocus] = useState("expenses");
  const [expenseBreakdown, setExpenseBreakdown] = useState([]);
  const [incomeBreakdown, setIncomeBreakdown] = useState([]);

  const { firstDay, lastDay } = getMonthFirstLastDate();

  const {data: expenseData, error: expenseErr} = useSWR(shouldFetchExp ? [`${process.env.REACT_APP_BACKEND_URL}/transactions?fields=id&fields=title&fields=amount&fields=category&fields=txnDate&sort=txnDate:DESC&limit=5&txnDateMin=${firstDay}&txnDateMax=${lastDay}&isIncome=false&includeUser=true&includeTotal=true&includeBreakdown=true&includeTransactions=true`] : null, fetcher.get);

  if (expenseData) {
    console.log(expenseData);
    setShouldFetchExp(false);
    setUsername(expenseData.user);
    setTotalExpense(`$${expenseData.totalAmount}`);
    setExpenseTxns(expenseData.transactions);
    setExpenseBreakdown(expenseData.breakdown.map((category) => { return {...category, total: Number(category.total)}}));
  }

  const {data: incomeData, error: incomeErr} = useSWR(shouldFetchInc ? [`${process.env.REACT_APP_BACKEND_URL}/transactions?fields=id&fields=title&fields=amount&fields=category&fields=txnDate&sort=txnDate:DESC&limit=5&txnDateMin=${firstDay}&txnDateMax=${lastDay}&isIncome=true&includeUser=true&includeTotal=true&includeBreakdown=true&includeTransactions=true`] : null, fetcher.get);

  if (incomeData) {
    console.log(incomeData);
    setShouldFetchInc(false);
    setTotalIncome(`$${incomeData.totalAmount}`);
    setIncomeTxns(incomeData.transactions);
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
      
      <PageHeader pageTitle={`Hello ${username}`} />
      <DashboardChart data={tabFocus === "expenses" ? expenseBreakdown : incomeBreakdown}/>
      <TotalValuePrimary value={tabFocus === "expenses" ? totalExpense : totalIncome} />
      <ExpIncNav setTabFocus={setTabFocus}/>
      <ListTxn txns={tabFocus === "expenses" ? expenseTxns : incomeTxns}/>
      <LinkTxt linkText={'View all'} linkURL={'/txns'} />
      <NavBar />
    </Box>
  );
}

