import React,  { useState } from "react";
import { Link } from "react-router-dom";
import useSWR from "swr";
import fetcher from "../../utils/fetcher.mjs";


const Welcome = (props) => {

  const [shouldFetch, setShouldFetch] = useState(true);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('');

  const confirmationCode = window.location.pathname.split('/')[2];

  const onFetchSuccess = (data) => {
    if (data.verified) {
      setShouldFetch(false);
      setMessage('Verified successfully');
    }
  }

  const onError = (error) => {
    setShouldFetch(false);
    if (error.response.status === 404) {
      setIsError(true);
      setMessage('User not found');
    };
  }

  useSWR(shouldFetch ? `${process.env.REACT_APP_BACKEND_URL}/users/confirm/${confirmationCode}` : null, fetcher.get, { onSuccess: onFetchSuccess, onError });


  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{message}</strong>
        </h3>
      </header>
      {!isError ? <Link to={"/login"}>
        Please Login
      </Link> : <Link to={"/signup"}>
        Please register a new account
      </Link>}
      
    </div>
  );
};

export default Welcome;