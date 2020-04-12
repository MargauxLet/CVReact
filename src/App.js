import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Routes from "./Routes";

function App() {
    return (
      <div >
        <Router>
          <Routes />
        </Router>
      </div>
    );
  }

export default App;
