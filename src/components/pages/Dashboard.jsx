import React, { useState } from "react";
import ExpIncNav from "../UI/molecules/ExpIncNav.jsx";
import ListTxn from "../UI/organisms/ListTxn.jsx";
import PageHeader from "../UI/atoms/PageHeader.jsx"; 
import TotalValuePrimary from "../UI/atoms/TotalValuePrimary.jsx"
import LinkTxt from "../UI/atoms/LinkTxt.jsx";
import NavBar from "../UI/organisms/NavBar.jsx"
import ChartPie from "../UI/atoms/ChartPie.jsx"
import useTxns from "../../utils/useTxns.js";
import Loading from "../pages/Loading.jsx"
import BudgetCards from "../UI/molecules/BudgetCards.jsx";
import Box from "@mui/material/Box"


export default function Dashboard () {
  const [tabFocus, setTabFocus] = useState("expenses");

  const { data, isLoading } = useTxns("dashboard", tabFocus, "month");

  if (isLoading) return <Loading />;

  const dummyBudgets = 
  [
      {
          "id": 1,
          "userId": 1,
          "categoryId": 1,
          "categories": [{
            "name": "Food & Drinks",
            "color": "#5948D3",
            "icon": "restaurant"
          }],
          "amount": "500.00",
          "showInDashboard": true,
          "createdAt": "2022-07-13T11:52:45.818Z",
          "updatedAt": "2022-07-13T11:52:45.818Z"
      },
      {
          "id": 2,
          "userId": 1,
          "categoryId": 4,
          "categories": [{
            "name": "Shopping",
            "color": "#7e57c2",
            "icon": "shopping_bag",
          }],
          "amount": "750.00",
          "showInDashboard": true,
          "createdAt": "2022-07-13T11:52:45.818Z",
          "updatedAt": "2022-07-13T11:52:45.818Z"
      },
      {
          "id": 3,
          "userId": 1,
          "categoryId": 2,
            "categories": [{
            "name": "Taxi",
            "color": "#CF65F2",
            "icon": "hail",
          }],
          "amount": "300.00",
          "showInDashboard": false,
          "createdAt": "2022-07-13T11:52:45.818Z",
          "updatedAt": "2022-07-13T11:52:45.818Z"
      }
  ]

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
      <PageHeader pageTitle={`Hello ${data.user}`} />
      <ChartPie data={data.breakdown.map((category) => { return {...category, total: Number(category.total)}})} hasTooltip={true} height={220}/>
      <TotalValuePrimary value={`$ ${data.totalAmount}`} />
      <ExpIncNav setTabFocus={setTabFocus} currentValue={tabFocus}/>
      <ListTxn txns={data.transactions.slice(0, 5)}/>
      <LinkTxt linkText={'View all'} linkURL={'/txns'} />
      <Box
        sx={{
          display: 'inline-flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
        <PageHeader pageTitle={`Budgeting`} />
        <LinkTxt linkText={'More'} linkURL={'/budgets'} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        <BudgetCards pinnedBudgets={dummyBudgets} /> 
      </Box>
      <br />
      <br />
      <br />
      <br />
      <NavBar />
    </Box>
  );
}

