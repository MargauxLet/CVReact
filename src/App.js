import React from "react";
import "./index.css";
import { BrowserRouter as Router} from "react-router-dom";
import Routes from "../src/components/routes";

function App() {
    return (
      <Router>
        <Routes />
      </Router>
    );
  }

export default App;
