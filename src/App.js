// Import react (for jsdoc)
import React from "react";

// Import css
import "./App.css";
// Reset css
import CssBaseline from "@mui/material/CssBaseline";

import { ThemeProvider, createTheme } from "@mui/material/styles";

// Import redux
import { useSelector } from "react-redux";
// import { login, logout } from "./Slices/userSlice";
// import { Button } from "@mui/material";
import LoginModal from "./Features/Authentication/Components/LoginModal/LoginModal";
import SignUpModal from "./Features/Authentication/Components/SignUpModal/SignUpModal";
// import Dashboard from "./Features/Dashboard/Pages/Dashboard/Dashboard";

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-seri", "Neucha", "cursive"].join(","),
    body1: {
      color: "#1A1A1A",
    },
    muted: {
      color: "#939094",
    },
  },
  palette: {
    action: {
      disabledBackground: "#E3E3E4",
    },
    background: {
      muted: "#EFEFEF",
    },
    primary: {
      main: "#333E96",
    },
  },
});
/**
 * The main app of our application it handles routing
 *
 * @returns {React.Component} The app component
 */
function App() {
  const { userName } = useSelector((state) => state.user);
  // const dispatch = useDispatch();
  console.log(userName);

  return (
    <div>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        {/* <Button onClick={() => dispatch(login({ userName: "user" }))}>
        Logged in
      </Button> */}
        <LoginModal />
        <SignUpModal />
        {/* <Dashboard /> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
