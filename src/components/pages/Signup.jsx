import React from "react";
import Box from "@mui/material/Box"
import CenteredPageHeader from "../UI/atoms/CenteredPageHeader.jsx";
import SignupForm from "../UI/molecules/SignupForm.jsx";

export default function Signup () {
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
    <CenteredPageHeader text={'Get Started'} />
    <SignupForm />
    </Box>
      
  );
}

