// Import react (for jsdoc)
import React from "react";

// Import css
import "./App.css";

import CssBaseline from "@mui/material/CssBaseline";
import BasicButtons from "./Features/Common/Components/BasicButtons";

/**
 * The main app of our application it handles routing
 *
 * @returns {React.Component} The app component
 */
function App() {
  return (
    <div>
      <CssBaseline />
      <BasicButtons />
    </div>
  );
}

export default App;
