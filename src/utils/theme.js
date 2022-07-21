import createTheme from "@mui/material/styles/createTheme";


const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#5948D3",
      contrastText: "#EFEFEF",
    },
    secondary: {
      main: "#CF65F2",
    },
    background: {
      default: "#262431",
    },
    text: {
      primary: "#EFEFEF",
      disabled: "#B4B4B4",
      secondary: "#B4B4B4",
      hint: "#EFEFEF",
    },
    info: {
      main: "#CF65F2",
    },
    light: {
      main: "#efefef",
      contrastText: "rgba(1, 0, 6, 0.8)"
    }
  },
  typography: {
    fontFamily: "Poppins",
    fontSize: 15,
    button: {
      textTransform: "none",
      fontSize: 15,
    },
  },
});

export default theme;