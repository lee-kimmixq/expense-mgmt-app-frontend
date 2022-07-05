import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.js";

export default function PrivateRoute({ children }) {
  const { auth } = useAuth();

  return auth ? children : <Navigate to="/login" />;
}
