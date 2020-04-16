import React from "react";

import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler,
  MDBCollapse,
  MDBIcon,
  MDBContainer,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, 
} from "mdbreact";

import "../index.css";
import picture from "../pictures/IMG_6767.JPG";

class ClassicFormPage extends React.Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {

    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("navbarCollapse")}
      />
    );

    return (
      
      <div id="classicformpage">

          <div>
            <MDBNavbar dark expand="md" fixed="top">

              <MDBContainer>

                <MDBNavbarBrand>
                  <img id="pic" src={picture} />
                  <strong id="haut" className="white-text">MonCV</strong>
                </MDBNavbarBrand>

                <MDBNavbarToggler
                  onClick={this.toggleCollapse("navbarCollapse")}
                />
                <MDBCollapse
                  id="navbarCollapse"
                  isOpen={this.state.collapseID}
                  navbar
                >
                <MDBNavbarNav left>
                  <MDBNavItem>
                    <MDBNavLink to={'/contact'}>Contact</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to={'/competence'}>Compétences</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to={'/experience'}>Expérience</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to={'/formation'}>Formation</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>

                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBNavLink className="waves-effect waves-light" to="#!">
                      <MDBIcon fab icon="twitter" />
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink className="waves-effect waves-light" to="#!">
                      <MDBIcon fab icon="google-plus-g" />
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBDropdown>
                      <MDBDropdownToggle nav caret>
                        <MDBIcon icon="user" />
                      </MDBDropdownToggle>
                      <MDBDropdownMenu className="dropdown-default">
                        <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                        <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                        <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                        <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavItem>
                </MDBNavbarNav>

                </MDBCollapse>

              </MDBContainer>

            </MDBNavbar>
            {this.state.collapseID && overlay}
          </div>

      </div>
    );
  }
}

export default ClassicFormPage;