import React from "react";
import LoginForm from "../UI/molecules/LoginForm.jsx";
import AppTitle from "../UI/atoms/AppTitle.jsx"
import Box from "@mui/material/Box"
// import axios from "axios";

export default function Login () {
  return (
    <Box
    sx={{
      display: 'inline-flex',
      flexDirection: 'column',
      rowGap: '10px',
      width: '70%',
      justifyContent: 'center',
      }}
    >
    <AppTitle />
    <LoginForm />
    </Box>
      
  );
}

