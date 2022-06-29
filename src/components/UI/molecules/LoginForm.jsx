import React from "react";
import InputField from "../atoms/InputField";
import PrimaryBtn from "../atoms/PrimaryBtn";
import Box from "@mui/material/Box"
// import axios from "axios";

export default function LoginForm () {
  return (
    <Box
      component="form"
      sx={{
        display: 'inline-flex',
        flexDirection: 'column',
        rowGap: '10px',
        width: '70%'
      }}
      >
        <InputField fieldName={'loginEmail'} fieldType={'email'} fieldAttribute={'required'} fieldLabel={'Email'} isRequired={true} />
        <InputField fieldName={'loginPwd'} fieldType={'password'} fieldAttribute={'required'} fieldLabel={'Password'} isRequired={true}/>
        <PrimaryBtn buttonLabel={'Login'} />
      </Box>
      
  );
}

