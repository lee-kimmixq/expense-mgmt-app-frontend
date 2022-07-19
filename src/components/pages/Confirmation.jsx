import React,  { useState } from "react";
import { Link } from "react-router-dom";
import useSWR from "swr";
import fetcher from "../../utils/fetcher.mjs";
import Home from "./Home.jsx"


const Confirmation = (props) => {

  const [shouldFetch, setShouldFetch] = useState(true);
  const [isError, setIsError] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);
  const [failAlert, setFailAlert] = useState(false);

  console.log(successAlert, failAlert)

  const confirmationCode = window.location.pathname.split('/')[2];

  const onFetchSuccess = (data) => {
    if (data.verified) {
      setShouldFetch(false);
      setSuccessAlert(true);
    }
  };

  const onError = (error) => {
    setShouldFetch(false);
    if (error.response.status === 404) {
      setIsError(true);
      setFailAlert(true);
    };
  };

  useSWR(shouldFetch ? `${process.env.REACT_APP_BACKEND_URL}/users/confirm/${confirmationCode}` : null, fetcher.get, { onSuccess: onFetchSuccess, onError });


  return (
      <Home successAlert={successAlert} failAlert={failAlert}/>
  );
};

export default Confirmation;