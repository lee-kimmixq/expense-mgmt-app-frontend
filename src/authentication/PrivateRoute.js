import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext.js";
import Loading from "../components/pages/Loading.jsx";

export default function PrivateRoute({ children }) {
  const { auth } = useAuth();
  if (auth === null) return <Loading />;
  return auth ? children : <Navigate to="/" />;
}
