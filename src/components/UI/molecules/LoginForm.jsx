import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import InputField from "../atoms/InputField";
import PrimaryBtn from "../atoms/PrimaryBtn";
import Box from "@mui/material/Box";
import useSWR from "swr";
import fetcherPost from "../../../utils/fetcherPost.mjs";
import AlertSnackbar from "../atoms/AlertSnackbar";

export default function LoginForm () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [shouldFetch, setShouldFetch] = useState(false);
  const [isError, setIsError] = useState(false);

  let navigate = useNavigate();
  let location = useLocation(); 
  let signupSuccess = false;
  if (location.state && location.state.signupSuccess) signupSuccess = true;

  const onSuccess = (data) => {
    setShouldFetch(false);
    setIsError(false);
    if (data.login) navigate("/home", { replace: true });
  }

  const onError = (error) => {
    setShouldFetch(false);
    if (error.response.status === 401) setIsError(true);
  }

  useSWR(shouldFetch ? [`http://localhost:3004/login`, { email, password }] : null, fetcherPost, {onSuccess, onError});

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginFormSubmit = () => {
    setShouldFetch(true);
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
        {isError && <AlertSnackbar alertSeverity={'error'} alertLabel={'Wrong username or password'} displayAlert={true}/>}
        {signupSuccess && <AlertSnackbar alertSeverity={'success'} alertLabel={'Sign up successful'} displayAlert={true}/>}
        <InputField fieldName={'loginEmail'} fieldType={'email'} fieldAttribute={'required'} fieldLabel={'Email'} isRequired={true} handleChange={handleEmailChange}/>
        <InputField fieldName={'loginPwd'} fieldType={'password'} fieldAttribute={'required'} fieldLabel={'Password'} isRequired={true} handleChange={handlePasswordChange}/>
        <PrimaryBtn buttonLabel={'Login'} onClickCallback={handleLoginFormSubmit}/>
      </Box>
      
  );
}

