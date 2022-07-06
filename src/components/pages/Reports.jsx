import React from "react";
import PageHeader from "../UI/atoms/PageHeader.jsx"; 
import Box from "@mui/material/Box"
import NavBar from "../UI/organisms/NavBar.jsx";


export default function Reports () {
  
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
        <PageHeader pageTitle={`Reports`} />
      </Box>
    <NavBar />
  </Box>
  );
}

