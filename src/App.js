import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Routes from "./components/Routes";

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
