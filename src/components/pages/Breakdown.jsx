import React, { useState } from "react";
import Box from "@mui/material/Box"
import PageHeader from "../UI/atoms/PageHeader.jsx"; 
import NavBar from "../UI/organisms/NavBar.jsx"
import TxnsNav from "../UI/molecules/TxnsNav.jsx";
import CatReportsNav from "../UI/molecules/CatReportsNav.jsx";
import TotalValuePrimary from "../UI/atoms/TotalValuePrimary.jsx";
import ListCategory from "../UI/organisms/ListCategory.jsx"
import ChartPie from "../UI/atoms/ChartPie.jsx"
import useTxns from "../../utils/useTxns.js";
import getTxnQueryParams from "../../utils/getTxnQueryParams.js";
import Loading from "../pages/Loading.jsx"
import { useLocation } from "react-router-dom";

export default function Breakdown () {
  let location = useLocation(); 

  const [month, setMonth] = useState(location.state ? location.state.month : new Date());
  const [tabFocus, setTabFocus] = useState(location.state ? location.state.tabFocus : "expenses")

  const { data, isLoading } = useTxns(getTxnQueryParams("breakdown", tabFocus, "month", month));

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
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <PageHeader pageTitle={`Breakdown`} />
      </Box>
      <CatReportsNav setTabFocus={setTabFocus} tabValue={tabFocus}/>
      <TxnsNav month={month} setMonth={setMonth}/>
      <ChartPie data={data.breakdown.map((category) => { return {...category, total: Number(category.total)}})} hasTooltip={false} height={200}/>
      <TotalValuePrimary value={`$ ${data.totalAmount}`} />
      <ListCategory categories={data.breakdown.map((category) => { return {...category, total: Number(category.total)}})} month={month}/>
      <br />
      <br />
      <br />
      <br />
      <NavBar />
    </Box>
  );
}

