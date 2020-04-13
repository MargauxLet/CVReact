import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import RoutesList from "./RoutesList";
import Navbar from "./navBar";

import {
    MDBMask,
    MDBView,
  } from "mdbreact";

class Routes extends React.Component {
    render() {
        return(
            <div id="classicformpage">
                <Navbar />
                <MDBView>
                    <MDBMask className="d-flex justify-content-center align-items-center gradient">
                        <RoutesList />
                    </MDBMask>
                </MDBView>
            </div>
        )
    }
}

export default Routes;