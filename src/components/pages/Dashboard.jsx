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
import Loading from "../pages/Loading.jsx"

export default function Dashboard () {
  const [tabFocus, setTabFocus] = useState("expenses");

  const { data, isLoading } = useTxns(true, tabFocus === "expenses" ? "dashboardExp" : "dashboardInc", "month");

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
      
      <PageHeader pageTitle={`Hello ${data.user}`} />
      <ChartPie data={data.breakdown.map((category) => { return {...category, total: Number(category.total)}})} hasTooltip={true} height={"25%"}/>
      <TotalValuePrimary value={data.totalAmount} />
      <ExpIncNav setTabFocus={setTabFocus} currentValue={tabFocus}/>
      <ListTxn txns={data.transactions.slice(0, 5)}/>
      <LinkTxt linkText={'View all'} linkURL={'/txns'} />
      <NavBar />
    </Box>
  );
}

