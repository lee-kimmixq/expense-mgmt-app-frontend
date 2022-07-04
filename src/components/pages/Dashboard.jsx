import React from "react";
import ExpIncNav from "../UI/molecules/ExpIncNav.jsx";
import ListTxn from "../UI/organisms/ListTxn.jsx";
import Box from "@mui/material/Box"
import PageHeader from "../UI/atoms/PageHeader.jsx"; 
import TotalValuePrimary from "../UI/atoms/TotalValuePrimary.jsx"
import LinkTxt from "../UI/atoms/LinkTxt.jsx";
import NavBar from "../UI/organisms/NavBar.jsx"

// import axios from "axios";

export default function Dashboard () {
  const username = 'Robert';
  const total = '$1,289.03'
  const testTxns = [
    {
      id: 1,
      catName: 'fnb',
      txnName: 'KFC',
      amount: '$34',
    },
    {
      id: 2,
      catName: 'transport',
      txnName: 'Grab',
      amount: '$11',
    },
    {
      id: 3,
      catName: 'fnb',
      txnName: 'KFC',
      amount: '$34',
    },
    {
      id: 4,
      catName: 'transport',
      txnName: 'Grab',
      amount: '$11',
    },
    {
      id: 5,
      catName: 'fnb',
      txnName: 'KFC',
      amount: '$34',
    },
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
      
      <PageHeader pageTitle={`Hello ${username}`} />
      <Box sx={{
        // width: 300,
        width: '100%',
        height: 200,
        backgroundColor: 'primary.dark'}}>
      </Box>
      <TotalValuePrimary value={total} />
      <ExpIncNav />
      <ListTxn txns={testTxns}/>
      <LinkTxt linkText={'View all'} linkURL={'#'} />
      <NavBar />
    </Box>
  );
}

