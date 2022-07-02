import "./App.css";
import React from "react";
import axios from "axios";
import Signup from "./components/pages/Signup.jsx";
import Login from "./components/pages/Login.jsx";

// make sure that axios always sends the cookies to the backend server
axios.defaults.withCredentials = true;

// const BACKEND_URL =
//   process.env.REACT_APP_BACKEND_URL || "http://localhost:3004";

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
