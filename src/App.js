// Import react (for jsdoc)
import React from "react";

// Import Images
import logo from "./logo.svg";

// Import css
import "./App.css";

//
import CssBaseline from "@mui/material/CssBaseline";

/**
 * The main app of our application it handles routing
 *
 * @returns {React.Component} The app component
 */
function App() {
  return (
    <div className="App">
      <CssBaseline />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
