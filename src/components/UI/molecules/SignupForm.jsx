import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../atoms/InputField";
import PrimaryBtn from "../atoms/PrimaryBtn";
import Box from "@mui/material/Box"
import useSWR from "swr";
import fetcherPost from "../../../utils/fetcherPost.mjs";
import FormAlert from "../atoms/FormAlert";

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
    if (data.signup) navigate("/login", { replace: true, state: {signupSuccess: true} });
  }

  const onError = (error) => {
    setShouldFetch(false);
  }

  useSWR(isPasswordMatch && shouldFetch ? [`${process.env.REACT_APP_BACKEND_URL}/users/signup`, { username, contact, email, password }] : null, fetcherPost, {onSuccess, onError});

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
        {!isPasswordMatch && <FormAlert alertSeverity={'warning'} alertLabel={'Passwords do not match'} />}
        <InputField fieldName={'signupUsername'} fieldType={'text'} fieldAttribute={'required'} fieldLabel={'username'} isRequired={true} handleChange={handleUsernameChange}/>
        <InputField fieldName={'signupMobile'} fieldType={'tel'} fieldAttribute={'required'} fieldLabel={'contact number'} isRequired={true} handleChange={handleContactChange}/>
        <InputField fieldName={'signupEmail'} fieldType={'email'} fieldAttribute={'required'} fieldLabel={'email'} isRequired={true} handleChange={handleEmailChange}/>
        <InputField fieldName={'signupPwd'} fieldType={'password'} fieldAttribute={'required'} fieldLabel={'password'} isRequired={true} handleChange={handlePasswordChange}/>
        <InputField fieldName={'signupRetypePwd'} fieldType={'password'} fieldAttribute={'required'} fieldLabel={'re-type password'} isRequired={true} handleChange={handleRetypePasswordChange}/>
        <PrimaryBtn marginTop={'20px'} buttonLabel={'Create Account'} onClickCallback={handleSignupFormSubmit}/>
      </Box>
      
  );
}

