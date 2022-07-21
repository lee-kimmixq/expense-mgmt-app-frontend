import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../atoms/InputField";
import PrimaryBtn from "../atoms/PrimaryBtn";
import Box from "@mui/material/Box"
import useSWR from "swr";
import fetcher from "../../../utils/fetcher.mjs";
import FormAlert from "../atoms/FormAlert";

export default function SignupForm () {
  const [username, setUsername] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  const [shouldFetch, setShouldFetch] = useState(false); 
  const [showFormValidationError, setShowFormValidationError] = useState(false);
  const [usernameInputError, setUsernameInputError] = useState(false);
  const [contactInputError, setContactInputError] = useState(false);
  const [emailInputError, setEmailInputError] = useState(false);
  const [passwordInputError, setPasswordInputError] = useState(false);
  const [retypePasswordInputError, setRetypePasswordInputError] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);


  let navigate = useNavigate();

  const validateEmail = (email) => {
    return email.match(
      //eslint-disable-next-line
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const onSuccess = (data) => {
    setShouldFetch(false);
    if (data.signup) navigate("/login", { replace: true, state: {signupSuccess: true} });
  };

  const onError = (error) => {
    setShouldFetch(false);
  };

  useSWR(isPasswordMatch && shouldFetch ? [`${process.env.REACT_APP_BACKEND_URL}/users/signup`, { username, contact, email, password }] : null, fetcher.post, {onSuccess, onError});

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setShowFormValidationError(false);
    setUsernameInputError(false);
  };

  const handleContactChange = (e) => {
    setContact(e.target.value);
    setShowFormValidationError(false);
    setContactInputError(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setShowFormValidationError(false);
    setEmailInputError(false);
    setIsValidEmail(validateEmail(email));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setShowFormValidationError(false);
    setPasswordInputError(false);
    setIsPasswordMatch(e.target.value === retypePassword);
  };

  const handleRetypePasswordChange = (e) => {
    setRetypePassword(e.target.value);
    setShowFormValidationError(false);
    setRetypePasswordInputError(false);
    setIsPasswordMatch(password === e.target.value);
  };

  const handleSignupFormSubmit = (e) => {
    e.preventDefault();
    (username && contact && email && password && retypePassword) ? setShouldFetch(true) : setShowFormValidationError(true);
    (!username && setUsernameInputError(true));
    (!contact && setContactInputError(true));
    (!email && setEmailInputError(true));
    (!password && setPasswordInputError(true));
    (!retypePassword && setRetypePasswordInputError(true));
    setIsPasswordMatch(true);
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
        {(!isValidEmail && email !== "") && <FormAlert alertSeverity={'warning'} alertLabel={'Please use a valid email'} />}
        {showFormValidationError && <FormAlert alertSeverity={'error'} alertLabel={'Please fill in all fields'} />}
        {!isPasswordMatch && <FormAlert alertSeverity={'warning'} alertLabel={'Passwords do not match'} />}
        <InputField fieldName={'signupUsername'} fieldType={'text'} fieldAttribute={'required'} fieldLabel={'Display Name'} isRequired={true} handleChange={handleUsernameChange} inputError={usernameInputError}/>
        <InputField fieldName={'signupMobile'} fieldType={'tel'} fieldAttribute={'required'} fieldLabel={'Contact Number'} isRequired={true} handleChange={handleContactChange} inputError={contactInputError}/>
        <InputField fieldName={'signupEmail'} fieldType={'email'} fieldAttribute={'required'} fieldLabel={'Email'} isRequired={true} handleChange={handleEmailChange} inputError={emailInputError}/>
        <InputField fieldName={'signupPwd'} fieldType={'password'} fieldAttribute={'required'} fieldLabel={'Password'} isRequired={true} handleChange={handlePasswordChange} inputError={passwordInputError}/>
        <InputField fieldName={'signupRetypePwd'} fieldType={'password'} fieldAttribute={'required'} fieldLabel={'Re-type Password'} isRequired={true} handleChange={handleRetypePasswordChange} inputError={retypePasswordInputError}/>
        <PrimaryBtn marginTop={'20px'} buttonLabel={'Create Account'} onClickCallback={handleSignupFormSubmit} btnType={'submit'}/>

        <p
          style={{fontSize: '0.75em'}}
        >
          <button style={{
            background: 'none',
            border: 'none'
          }} onClick={()=>{navigate('/login', {replace: true})}} >Already have an account? Log in here!</button>
        </p>

      </Box>
      
  );
}

