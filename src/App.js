import "./App.css";
import React from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard.jsx";
import Login from "./components/pages/Login.jsx";
import Signup from "./components/pages/Signup";
import NewTxnForm from "./components/pages/NewTxnForm";
import EditTxnForm from "./components/pages/EditTxnForm";
import Budgets from "./components/pages/Budgets";
import Transactions from "./components/pages/Transactions";
import Account from "./components/pages/Account";
import { AuthProvider } from "./authentication/AuthContext.js";
import PrivateRoute from "./authentication/PrivateRoute.js";
import Reports from "./components/pages/Reports";
import Breakdown from "./components/pages/Breakdown";
import PublicOnlyRoute from "./authentication/PublicOnlyRoute";
import { Navigate } from "react-router-dom";
import Confirmation from "./components/pages/Confirmation";
import Home from "./components/pages/Home";

// make sure that axios always sends the cookies to the backend server
axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="dashboard"
              element={<PrivateRoute children={<Dashboard />} />}
            />
            <Route
              path="login"
              element={<PublicOnlyRoute children={<Login />} />}
            />
            <Route
              path="signup"
              element={<PublicOnlyRoute children={<Signup />} />}
            />
            <Route
              path="confirm/:confirmationCode"
              element={<PublicOnlyRoute children={<Confirmation />} />}
            />
            <Route
              path="txns/add"
              element={<PrivateRoute children={<NewTxnForm />} />}
            />
            <Route
              path="txns/:id"
              element={<PrivateRoute children={<EditTxnForm />} />}
            />
            <Route
              path="txns"
              element={<PrivateRoute children={<Transactions />} />}
            />
            <Route
              path="account"
              element={<PrivateRoute children={<Account />} />}
            />
            <Route
              path="reports"
              element={<PrivateRoute children={<Reports />} />}
            />
            <Route
              path="breakdown"
              element={<PrivateRoute children={<Breakdown />} />}
            />
            <Route
              path="budgets"
              element={<PrivateRoute children={<Budgets />} />}
            />
            <Route 
              path="/" 
              element={<PublicOnlyRoute children={<Home />} />}
            />
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
