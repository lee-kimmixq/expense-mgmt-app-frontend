import React from "react";
import Box from "@mui/material/Box"
import PageHeader from "../UI/atoms/PageHeader.jsx";
import SignupForm from "../UI/molecules/SignupForm.jsx";
// import axios from "axios";

export default function Login () {
  return (
    <Box
    sx={{
        display: 'inline-flex',
        flexDirection: 'column',
        rowGap: '10px',
        width: '60%',
      }}
    >
    <PageHeader pageTitle={'Get Started'} />
    <SignupForm />
    </Box>
      
  );
}

