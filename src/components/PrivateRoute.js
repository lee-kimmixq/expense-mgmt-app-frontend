import React from "react";
import { useNavigate, Route } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.js";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { auth } = useAuth();

  let navigate = useNavigate();

  return (
    <Route
      {...rest}
      render={(props) =>
        auth ? <Component {...props} /> : navigate("/login", { replace: true })
      }
    ></Route>
  );
}
