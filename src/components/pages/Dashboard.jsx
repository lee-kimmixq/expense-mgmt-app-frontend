import React from "react";
import ExpIncNav from "../UI/molecules/ExpIncNav.jsx";
import ListTxn from "../UI/organisms/ListTxn.jsx";
import Box from "@mui/material/Box"
import PageHeader from "../UI/atoms/PageHeader.jsx"; 
import TotalValuePrimary from "../UI/atoms/TotalValuePrimary.jsx"
import LinkTxt from "../UI/atoms/LinkTxt.jsx";
// import axios from "axios";

export default function Login () {
  const username = 'Robert';
  const total = '$1,289.03'

  return (
    <Box
    sx={{
        display: 'inline-flex',
        flexDirection: 'column',
        rowGap: '10px',
        width: '70%',
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
      <ListTxn />
      <LinkTxt linkText={'View all'} linkURL={'#'} />
    </Box>
  );
}

