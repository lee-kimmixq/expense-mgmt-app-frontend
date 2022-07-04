import "./App.css";
import React from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard.jsx";
import Login from "./components/pages/Login.jsx";
import Signup from "./components/pages/Signup";
import TxnForm from "./components/pages/TxnForm";
import Transactions from "./components/pages/Transactions";

// make sure that axios always sends the cookies to the backend server
axios.defaults.withCredentials = true;

const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:3004";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<App />}> */}
          <Route path="home" element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="txns/add" element={<TxnForm />} />
          <Route path="txns/:id" element={<TxnForm />} />
          <Route path="txns" element={<Transactions />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
