import React, { useState } from "react";
import ExpIncNav from "../UI/molecules/ExpIncNav.jsx";
import ListTxn from "../UI/organisms/ListTxn.jsx";
import Box from "@mui/material/Box"
import PageHeader from "../UI/atoms/PageHeader.jsx"; 
import TotalValuePrimary from "../UI/atoms/TotalValuePrimary.jsx"
import LinkTxt from "../UI/atoms/LinkTxt.jsx";
import NavBar from "../UI/organisms/NavBar.jsx"
import { firstDay, lastDay } from "../../utils/getMonthFirstLastDate.mjs"
import fetcherGet from "../../utils/fetcherGet.mjs"
import useSWR from "swr";

export default function Dashboard () {
  const [username, setUsername] = useState("");
  const [total, setTotal] = useState("");
  const [txns, setTxns] = useState([]);
  const [shouldFetch, setShouldFetch] = useState(true);

  const {data, error} = useSWR(shouldFetch ? [`http://localhost:3004/transactions?fields=title&fields=amount&fields=category&fields=txnDate&sort=txnDate:DESC&limit=5&txnDateMin=${firstDay}&txnDateMax=${lastDay}&isIncome=false&includeUser=true&includeTotal=true&includeBreakdown=true`] : null, fetcherGet);  


  if (data) {
    console.log(data);
    setShouldFetch(false);
    setUsername(data.user);
    setTotal(`$${data.totalAmount}`);
    setTxns(data.transactions);
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
      <Box sx={{
        // width: 300,
        width: '100%',
        height: 200,
        backgroundColor: 'primary.dark'}}>
      </Box>
      <TotalValuePrimary value={total} />
      <ExpIncNav />
      <ListTxn txns={txns}/>
      <LinkTxt linkText={'View all'} linkURL={'#'} />
      <NavBar />
    </Box>
  );
}

