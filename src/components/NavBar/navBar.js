import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Routes from"../../Routes";

import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBView,
  MDBContainer,
  MDBCard, MDBCardBody, MDBCardText,
  MDBAnimation,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, 
} from "mdbreact";

import "./navBar.css";
import picture from "../../pictures/IMG_6767.JPG";

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

        <Router>

          <div>
            <MDBNavbar dark expand="md" fixed="top">

              <MDBContainer>

                <MDBNavbarBrand>
                  <img alt="Ma photo" id="pic" src={picture} />
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
                  <MDBNavItem active>
                    <MDBNavLink to={'/contact'}>Contact</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/competence">Compétences</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/experience">Expérience</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/formation">Formation</MDBNavLink>
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

        </Router>

        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <MDBAnimation
                  type="fadeInLeft"
                  delay=".3s"
                  className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5"
                >
                  <h1 className="h1-responsive font-weight-bold">
                  Développeuse Web junior
                  </h1>
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                    Ayant obtenu un titre professionnel (RNCP) de niveau 3 (BTS/DUT) 
                    de développeur/se Web et Web mobile suite à une réorientation de carrière, 
                    je suis à la recherche d'une première expérience en entreprise afin d'y faire mes preuves.
                  </h6>
                </MDBAnimation>

                <MDBCol md="6" xl="5" className="mb-4">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <MDBCard id="classic-card">
                      <MDBCardBody className="white-text">

                        <h3 className="text-center">
                          <MDBIcon icon="user" /> Margaux Letellier
                        </h3>
                        <hr className="hr-light" />

                        <MDBCardText className="white-text">
                        <p><MDBIcon icon="birthday-cake" /> 20/11/1996 - 23ans</p>
                        <p><MDBIcon icon="envelope" /> lmargauxgo@aol.com</p>
                        <p><MDBIcon icon="car" /> Permis B + voiture</p>
                        </MDBCardText>

                        <div className="text-center mt-4 black-text">
                          <hr className="hr-light" />
                          <div className="text-center d-flex justify-content-center white-label">
                            <a href="https://www.linkedin.com/in/margaux-letellier-a0447517b/" className="p-2 m-2">
                              <MDBIcon
                                fab
                                icon="linkedin"
                                className="white-text"
                              />
                            </a>
                            <a href="https://github.com/MargauxLet" className="p-2 m-2">
                              <MDBIcon
                                fab
                                icon="github"
                                className="white-text"
                              />
                            </a>
                            <a href="https://gitlab.com/MargauxLet" className="p-2 m-2">
                              <MDBIcon
                                fab
                                icon="gitlab"
                                className="white-text"
                              />
                            </a>
                          </div>
                        </div>

                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>

      </div>
    );
  }
}

export default ClassicFormPage;