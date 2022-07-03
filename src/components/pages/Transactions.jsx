import React from "react";
import Box from "@mui/material/Box"
import PageHeader from "../UI/atoms/PageHeader.jsx"; 
import NavBar from "../UI/organisms/NavBar.jsx"
import TxnsNav from "../UI/molecules/TxnsNav.jsx";

// import axios from "axios";

export default function Transactions () {

  return (
    <Box
    sx={{
        display: 'inline-flex',
        flexDirection: 'column',
        rowGap: '10px',
        width: '70%',
      }}
    >
      
      <PageHeader pageTitle={`Transactions`} />
      <TxnsNav />
      <NavBar />
    </Box>
  );
}

