import React, { Component } from "react";
import { Link } from "react-router-dom";

import { 
  MDBMask, 
  MDBView,
  MDBIcon,
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, 
  MDBCollapse,  
  MDBTabContent, MDBTabPane,
} from "mdbreact";

import Competence from "./competence";
import Formation from "./formation";
import Contact from "./contact";
import Experience from "./experience";

import picture from "../pictures/IMG_6767.JPG";
import "../index.css";

class NavbarPage extends Component {
state = {
    activeItem: "1"
}

toggle = tab => () => {
    if (this.state.activeItem !== tab) {
    this.setState({
    activeItem: tab
    });
    }
}

render() {
  return (
    <MDBView>
      <div className="container-area"></div>
      <header>
        <MDBNavbar dark expand="md">

          <MDBNavbarBrand>
            <MDBView hover zoom>
              <div id="haut">
                <img src={picture} className="img-fluid" alt="" />
                <MDBMask className="flex-center">
                  <strong className="white-text">MonCV</strong>
                </MDBMask>
              </div>  
            </MDBView>
          </MDBNavbarBrand>

          <MDBNavbarToggler onClick={this.toggleCollapse} />

          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>

            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBNavLink link to="#"
                active={this.state.activeItem === "1"}
                onClick={this.toggle("1")}
                role="tab">Contact</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                  <MDBNavLink link to="#!"
                  active={this.state.activeItem === "2"}
                  onClick={this.toggle("2")}
                  role="tab">Compétences</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                  <MDBNavLink link to="#!"
                  active={this.state.activeItem === "3"}
                  onClick={this.toggle("3")}
                  role="tab">Expériences</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                  <MDBNavLink link to="#!"
                  active={this.state.activeItem === "4"}
                  onClick={this.toggle("4")}
                  role="tab">Formation</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>

            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBNavLink link to="#"
                  active={this.state.activeItem === "1"}
                  onClick={this.toggle("1")}
                  role="tab">
                    <MDBIcon icon="home" className="white-text"/>
                </MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </header>

      <main>
        <MDBTabContent className="card" activeItem={this.state.activeItem}>
            <MDBTabPane tabId="1" role="tabpanel">
              <Contact />
            </MDBTabPane>
            <MDBTabPane tabId="2" role="tabpanel">
              <Competence />
            </MDBTabPane>
            <MDBTabPane tabId="3" role="tabpanel">
              <Experience />
            </MDBTabPane>
            <MDBTabPane tabId="4" role="tabpanel">
              <Formation />
            </MDBTabPane>
        </MDBTabContent>
      </main>

    </MDBView>
    );
  }
}

export default NavbarPage;