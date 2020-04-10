import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import "./index.css";
import Navbar from "./components/NavBar/navBar";
import "../src/components/NavBar/navBar.css"

class App extends Component {
  render() {
    return (
      <div id="fond">
      <Navbar/>
      </div>
    );
  }
}

export default App;
