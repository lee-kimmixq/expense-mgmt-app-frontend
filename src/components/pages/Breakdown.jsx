import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box"
import PageHeader from "../UI/atoms/PageHeader.jsx"; 
import NavBar from "../UI/organisms/NavBar.jsx"
import TxnsNav from "../UI/molecules/TxnsNav.jsx";
import GenerateIcon from "../UI/atoms/GenerateIcon.jsx";
import getMonthFirstLastDate from "../../utils/getMonthFirstLastDate.mjs"
import fetcher from "../../utils/fetcher.mjs"
import useSWR from "swr";
import CatReportsNav from "../UI/molecules/CatReportsNav.jsx";
import TotalValuePrimary from "../UI/atoms/TotalValuePrimary.jsx";
import ListCategory from "../UI/organisms/ListCategory.jsx"
import BreakdownChart from "../UI/molecules/BreakdownChart.jsx"

export default function Breakdown () {
  const [expenseCategories, setExpenseCategories] = useState([]);
  const [incomeCategories, setIncomeCategories] = useState([]);
  const [shouldFetch, setShouldFetch] = useState(true);
  const [month, setMonth] = useState(new Date());
  const [tabFocus, setTabFocus] = useState("expenses")
  const [totalExpense, setTotalExpense] = useState("");
  const [totalIncome, setTotalIncome] = useState("");

  useEffect(() => {
    setShouldFetch(true)
  }, [month]);

  const {data:expenseData, error:expenseErr} = useSWR(shouldFetch ? [`${process.env.REACT_APP_BACKEND_URL}/transactions?fields=id&fields=title&fields=amount&fields=category&fields=txnDate&txnDateMin=${getMonthFirstLastDate(month).firstDay}&txnDateMax=${getMonthFirstLastDate(month).lastDay}&isIncome=false&includeBreakdown=true&includeTotal=true`] : null, fetcher.get);

  if (expenseData) {
    setShouldFetch(false);
    setExpenseCategories(expenseData.breakdown.map((category) => { return {...category, total: Number(category.total)}}));
    console.log(expenseData);
    setTotalExpense(`$${expenseData.totalAmount}`)
  }

  const {data:incomeData, error:incomeErr} = useSWR(shouldFetch ? [`${process.env.REACT_APP_BACKEND_URL}/transactions?fields=id&fields=title&fields=amount&fields=category&fields=txnDate&txnDateMin=${getMonthFirstLastDate(month).firstDay}&txnDateMax=${getMonthFirstLastDate(month).lastDay}&isIncome=true&includeBreakdown=true&includeTotal=true`] : null, fetcher.get);

  if (incomeData) {
    setShouldFetch(false);
    setIncomeCategories(incomeData.breakdown.map((category) => { return {...category, total: Number(category.total)}}));
    console.log(incomeData);
    setTotalIncome(`$${incomeData.totalAmount}`)
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
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <PageHeader pageTitle={`Breakdown`} />
        <Box>
          <GenerateIcon name={'tune'} />
          <GenerateIcon name={'sort'} />
        </Box>
      </Box>
      <CatReportsNav setTabFocus={setTabFocus} />
      <TxnsNav month={month} setMonth={setMonth}/>
      {/* <Box sx={{
        // width: 300,
        width: '100%',
        height: 200,
        backgroundColor: 'primary.dark'
        }}>
      </Box> */}
      <BreakdownChart data={tabFocus === "expenses" ? expenseCategories : incomeCategories}/>
      <TotalValuePrimary value={tabFocus === "expenses" ? totalExpense : totalIncome} />
      <ListCategory categories={tabFocus === "expenses" ? expenseCategories : incomeCategories} />
      <NavBar />
    </Box>
  );
}

