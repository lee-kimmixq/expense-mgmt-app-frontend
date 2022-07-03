import React from "react";
import Box from "@mui/material/Box"
import PageHeader from "../UI/atoms/PageHeader.jsx"; 
import NavBar from "../UI/organisms/NavBar.jsx"
import TxnsNav from "../UI/molecules/TxnsNav.jsx";
import ListTxnsByDate from "../UI/organisms/ListTxnByDate.jsx";
import GenerateIcon from "../UI/atoms/GenerateIcon.jsx";

// import axios from "axios";

export default function Transactions () {

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
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <PageHeader pageTitle={`Transactions`} />
        <Box>
          <GenerateIcon name={'tune'} />
          <GenerateIcon name={'sort'} />
        </Box>
      </Box>
      <TxnsNav />
      <ListTxnsByDate txns={testTxns} />
      <NavBar />
    </Box>
  );
}

