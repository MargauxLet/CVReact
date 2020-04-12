import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Routes from "./Routes";

import Navbar from "./components/NavBar/navBar";
import "../src/components/NavBar/navBar.css"

function App() {
    return (
      <Router>
        <Route path="/" exact component={Navbar} />
      </Router>
    );
  }

export default App;
