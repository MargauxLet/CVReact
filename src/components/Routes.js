import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RoutesList from "./RoutesList";

import Navbar from "./navBar";

class Routes extends React.Component {
    render() {
        return(
            <Router>
            <div >
                <Navbar />
                <RoutesList />
            </div>
          </Router>
        )
    }
}

export default Routes;