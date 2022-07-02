import React, {useState} from "react";
import InputField from "../atoms/InputField";
import PrimaryBtn from "../atoms/PrimaryBtn";
import Box from "@mui/material/Box"
// import axios from "axios";

export default function LoginForm () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
};

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginFormSubmit = () => {
    console.log(email, password);
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'inline-flex',
        flexDirection: 'column',
        rowGap: '10px',
      }}
      >

        <InputField fieldName={'loginEmail'} fieldType={'email'} fieldAttribute={'required'} fieldLabel={'Email'} isRequired={true} handleChange={handleEmailChange}/>
        <InputField fieldName={'loginPwd'} fieldType={'password'} fieldAttribute={'required'} fieldLabel={'Password'} isRequired={true} handleChange={handlePasswordChange}/>
        <PrimaryBtn buttonLabel={'Login'} onClickCallback={handleLoginFormSubmit}/>
      </Box>
      
  );
}

