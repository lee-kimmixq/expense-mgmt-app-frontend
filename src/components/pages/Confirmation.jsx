import React,  { useState } from "react";
import useSWR from "swr";
import fetcher from "../../utils/fetcher.mjs";
import Home from "./Home.jsx"
import Loading from "../pages/Loading.jsx"



const Confirmation = (props) => {

  const [shouldFetch, setShouldFetch] = useState(true);
  const [loading, setLoading] = useState(true);
  const [successAlert, setSuccessAlert] = useState(false);
  const [failAlert, setFailAlert] = useState(false);

  const confirmationCode = window.location.pathname.split('/')[2];

  const onFetchSuccess = (data) => {
    if (data.verified) {
      setShouldFetch(false);
      setSuccessAlert(true);
      setLoading(false);
    }
  };

  const onError = (error) => {
    setShouldFetch(false);
    if (error.response.status === 404) {
      setFailAlert(true);
      setLoading(false);
      setFailAlert(true);
    };
  };

  useSWR(shouldFetch ? `${process.env.REACT_APP_BACKEND_URL}/users/confirm/${confirmationCode}` : null, fetcher.get, { onSuccess: onFetchSuccess, onError });

  if (loading) return <Loading />;

  return (
    <Home successAlert={successAlert} failAlert={failAlert}/> 
  );
};

export default Confirmation;