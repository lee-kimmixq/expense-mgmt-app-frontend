import "./App.css";

import React from "react";
import axios from "axios";

// make sure that axios always sends the cookies to the backend server
axios.defaults.withCredentials = true;

const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:3004";

// TEST - TO REMOVE
const testReq = () => {
  axios.get(`${BACKEND_URL}/test`).then((result) => {
    console.log(result);
  });
};

function App() {
  return (
    <div className="App">
      <button type="button" onClick={testReq}>
        Test!
      </button>
    </div>
  );
}

export default App;
