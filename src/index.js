import React from "react";
import ReactDOM from "react-dom/client";
import dotenv from "dotenv";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import CssBaseline from "@mui/material/CssBaseline";
import "typeface-poppins";
import "animate.css";
import theme from "./utils/theme.js"
dotenv.config();

const root = ReactDOM.createRoot(document.getElementById("root"));
document.getElementById("root").style.height = "100%";
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
