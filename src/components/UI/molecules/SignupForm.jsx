import React from "react";
import InputField from "../atoms/InputField";
import PrimaryBtn from "../atoms/PrimaryBtn";
import Box from "@mui/material/Box"
// import axios from "axios";

export default function SignupForm () {
  return (
    <Box
      component="form"
      sx={{
        display: 'inline-flex',
        flexDirection: 'column',
        rowGap: '10px',
      }}
      >
        <InputField fieldName={'signupUsername'} fieldType={'text'} fieldAttribute={'required'} fieldLabel={'username'} isRequired={true} />
        <InputField fieldName={'signupMobile'} fieldType={'tel'} fieldAttribute={'required'} fieldLabel={'contact number'} isRequired={true}/>
        <InputField fieldName={'signupEmail'} fieldType={'email'} fieldAttribute={'required'} fieldLabel={'email'} isRequired={true}/>
        <InputField fieldName={'signupPwd'} fieldType={'password'} fieldAttribute={'required'} fieldLabel={'password'} isRequired={true}/>
        <InputField fieldName={'signupRetypePwd'} fieldType={'password'} fieldAttribute={'required'} fieldLabel={'re-type password'} isRequired={true}/>
        <PrimaryBtn buttonLabel={'Create Account'} />
      </Box>
      
  );
}

