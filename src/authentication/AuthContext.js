import React, { createContext, useContext, useState } from "react";
import useSWR from "swr";
import fetcherGet from "../utils/fetcherGet.mjs";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [shouldFetch, setShouldFetch] = useState(true);
  const [auth, setAuth] = useState(null);

  const onSuccess = (data) => {
    setShouldFetch(false);
    setAuth(true);
  };

  const onError = (error) => {
    setShouldFetch(false);
    setAuth(false);
  };

  useSWR(
    shouldFetch ? [`http://localhost:3004/users/checkAuth`] : null,
    fetcherGet,
    {
      onSuccess,
      onError,
    }
  );

  const login = () => {
    return new Promise((res) => {
      setAuth(true);
      res();
    });
  };

  const logout = () => {
    return new Promise((res) => {
      setAuth(false);
      res();
    });
  };

  const value = { auth, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
