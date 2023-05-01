// Import react (for jsdoc)
import React from "react";

// Import css
import "./App.css";
// Reset css
import CssBaseline from "@mui/material/CssBaseline";

// Import redux
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./Slices/userSlice";
import { Button } from "@mui/material";
import LoginModal from "./Features/Authentication/Components/LoginModal/LoginModal";
import SignUpModal from "./Features/Authentication/Components/SignUpModal/SignUpModal";
/**
 * The main app of our application it handles routing
 *
 * @returns {React.Component} The app component
 */
function App() {
  const { userName } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log(userName);
  return (
    <div>
      <CssBaseline />
      <Button onClick={() => dispatch(login({ userName: "user" }))}>
        Logged in
      </Button>
      <LoginModal />
      <SignUpModal />
    </div>
  );
}

export default App;
