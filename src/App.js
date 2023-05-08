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
import ForgetPasswordModal from "./Features/Authentication/Components/ForgetPasswordModal/ForgetPasswordModal";
import Dashboard from "./Features/Dashboard/Pages/Dashboard/Dashboard";
import {
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "./Features/Landing/Pages/LandingPage/LandingPage";

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-seri", "Neucha", "cursive"].join(","),
    body1: {
      color: "#1A1A1A",
    },
    muted: {
      color: "#939094",
    },
    disabled: {
      color: "#CCCCCC",
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
    secondary: {
      main: "#561D25",
    },
    success: {
      main: "#358600",
    },
    gray: {
      gray1: "#CCCCCC",
      gray2: "#939094",
      gray3: "#6D6D6D",
      gray4: "#E3E3E4",
    },
    white: {
      main: "#F7F7F7",
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
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
      errorElement: <h1>Error in LandingPage</h1>,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      errorElement: <h1>Error in dashboard</h1>,
    },
  ]);
  return (
    <div>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />

        {/* <Button onClick={() => dispatch(login({ userName: "user" }))}>
        Logged in
      </Button> */}
        {/* <LoginModal />
        <SignUpModal />
        <ForgetPasswordModal /> */}
        {/* <Dashboard /> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
