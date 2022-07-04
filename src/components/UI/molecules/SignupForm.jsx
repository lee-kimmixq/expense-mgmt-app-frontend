import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../atoms/InputField";
import PrimaryBtn from "../atoms/PrimaryBtn";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box"
import useSWR from "swr";
import fetcherPost from "../../../utils/fetcherPost.mjs";

export default function SignupForm () {
  const [username, setUsername] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  const [shouldFetch, setShouldFetch] = useState(false); 

  let navigate = useNavigate();

  const onSuccess = (data) => {
    setShouldFetch(false);
    if (data.signup) navigate("/login", { replace: true });
  }

  const onError = (error) => {
    setShouldFetch(false);
  }

  useSWR(isPasswordMatch && shouldFetch ? [`http://localhost:3004/signup`, { username, contact, email, password }] : null, fetcherPost, {onSuccess, onError});

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handleContactChange = (e) => {
    setContact(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setIsPasswordMatch(e.target.value === retypePassword);
  }

  const handleRetypePasswordChange = (e) => {
    setRetypePassword(e.target.value);
    setIsPasswordMatch(password === e.target.value);
  }

  const handleSignupFormSubmit = () => {
    setShouldFetch(true);
  }

  return (
    <Box
      component="form"
      sx={{
        display: 'inline-flex',
        flexDirection: 'column',
        rowGap: '10px',
      }}
      >
        {!isPasswordMatch && <Alert severity={'warning'} sx={{marginBottom: '10px', textAlign: 'left', fontSize: '0.8em'}}>Passwords do not match!</Alert>}
        <InputField fieldName={'signupUsername'} fieldType={'text'} fieldAttribute={'required'} fieldLabel={'username'} isRequired={true} handleChange={handleUsernameChange}/>
        <InputField fieldName={'signupMobile'} fieldType={'tel'} fieldAttribute={'required'} fieldLabel={'contact number'} isRequired={true} handleChange={handleContactChange}/>
        <InputField fieldName={'signupEmail'} fieldType={'email'} fieldAttribute={'required'} fieldLabel={'email'} isRequired={true} handleChange={handleEmailChange}/>
        <InputField fieldName={'signupPwd'} fieldType={'password'} fieldAttribute={'required'} fieldLabel={'password'} isRequired={true} handleChange={handlePasswordChange}/>
        <InputField fieldName={'signupRetypePwd'} fieldType={'password'} fieldAttribute={'required'} fieldLabel={'re-type password'} isRequired={true} handleChange={handleRetypePasswordChange}/>
        <PrimaryBtn marginTop={'20px'} buttonLabel={'Create Account'} onClickCallback={handleSignupFormSubmit}/>
      </Box>
      
  );
}

