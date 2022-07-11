import React, { useState } from "react";
import ExpIncNav from "../UI/molecules/ExpIncNav.jsx";
import ListTxn from "../UI/organisms/ListTxn.jsx";
import Box from "@mui/material/Box"
import PageHeader from "../UI/atoms/PageHeader.jsx"; 
import TotalValuePrimary from "../UI/atoms/TotalValuePrimary.jsx"
import LinkTxt from "../UI/atoms/LinkTxt.jsx";
import NavBar from "../UI/organisms/NavBar.jsx"
import ChartPie from "../UI/atoms/ChartPie.jsx"
import useTxns from "../../utils/useTxns.js";

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

  const {data: expenseData, error: expenseErr} = useTxns(shouldFetchExp, "dashboardExp", "month");

  if (expenseData) {
    setShouldFetchExp(false);
    setUsername(expenseData.user);
    setTotalExpense(`$${expenseData.totalAmount}`);
    setExpenseTxns(expenseData.transactions.slice(0, 5));
    setExpenseBreakdown(expenseData.breakdown.map((category) => { return {...category, total: Number(category.total)}}));
  }

  const {data: incomeData, error: incomeErr} = useTxns(shouldFetchInc, "dashboardInc", "month");

  if (incomeData) {
    setShouldFetchInc(false);
    setTotalIncome(`$${incomeData.totalAmount}`);
    setIncomeTxns(incomeData.transactions.slice(0, 5));
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
      <ChartPie data={tabFocus === "expenses" ? expenseBreakdown : incomeBreakdown} hasTooltip={true} height={"25%"}/>
      <TotalValuePrimary value={tabFocus === "expenses" ? totalExpense : totalIncome} />
      <ExpIncNav setTabFocus={setTabFocus}/>
      <ListTxn txns={tabFocus === "expenses" ? expenseTxns : incomeTxns}/>
      <LinkTxt linkText={'View all'} linkURL={'/txns'} />
      <NavBar />
    </Box>
  );
}

