import "./App.css";

import React from "react";
import axios from "axios";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';



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

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#5948D3',
      contrastText: '#efefef',
    },
    secondary: {
      main: '#CF65F2',
    },
    background: {
      default: '#262431',
      paper: '#262431',
    },
    text: {
      primary: '#efefef',
      disabled: '#B4B4B4',
      secondary: '#EFEFEF',
      hint: '#EFEFEF',
    },
    info: {
      main: '#CF65F2',
    },
    success: {
      main: '#27A37A',
    },
    divider: '#CF65F2',
    warning: {
      main: '#F0B57D',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Button type="button" variant="contained" color="primary" onClick={testReq}>
        Test!
      </Button>
    </div>
    </ThemeProvider>
  );
}

export default App;
