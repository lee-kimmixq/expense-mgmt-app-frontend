import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(false);

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
