import React, { useState } from "react";
import ExpIncNav from "../UI/molecules/ExpIncNav.jsx";
import ListTxn from "../UI/organisms/ListTxn.jsx";
import PageHeader from "../UI/atoms/PageHeader.jsx"; 
import TotalValuePrimary from "../UI/atoms/TotalValuePrimary.jsx"
import LinkTxt from "../UI/atoms/LinkTxt.jsx";
import NavBar from "../UI/organisms/NavBar.jsx"
import ChartPie from "../UI/atoms/ChartPie.jsx"
import useTxns from "../../utils/useTxns.js";
import getTxnQueryParams from "../../utils/getTxnQueryParams.js";
import Loading from "../pages/Loading.jsx"
import BudgetCards from "../UI/molecules/BudgetCards.jsx";
import Box from "@mui/material/Box"
import { useNavigate } from "react-router-dom";

export default function Dashboard () {

  let navigate = useNavigate();

  const [tabFocus, setTabFocus] = useState("expenses");
  
  const { data, isLoading } = useTxns(getTxnQueryParams("dashboard", tabFocus, "month"));

  if (isLoading) return <Loading />;

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
      <PageHeader pageTitle={`Hello ${data.user}`} customCss={'animate__slideInLeft'} />
      <ChartPie data={data.breakdown.map((category) => { return {...category, total: Number(category.total)}})} hasTooltip={true} height={220}/>
      <TotalValuePrimary value={`$ ${data.totalAmount}`} />
      <ExpIncNav setTabFocus={setTabFocus} currentValue={tabFocus}/>
      <ListTxn txns={data.transactions.slice(0, 5)}/>
      <LinkTxt linkText={'View all'} onClickCallback={()=>{navigate('/txns', {replace: true})}} />
      <Box
        sx={{
          display: 'inline-flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
        <PageHeader pageTitle={`Budgeting`} />
        <LinkTxt linkText={'More'} onClickCallback={()=>{navigate('/budgets', {replace: true})}} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        <BudgetCards /> 
      </Box>
      <br />
      <br />
      <br />
      <br />
      <NavBar />
    </Box>
  );
}

