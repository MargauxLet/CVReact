import React, { Component } from "react";

import { 
  MDBContainer, 
  MDBCol, 
  MDBRow, 
  MDBCollapse, 
  MDBCollapseHeader, 
  MDBCard, 
  MDBCardBody, 
  MDBIcon,
  MDBAnimation
} from "mdbreact";

class CollapsePage extends Component {
state={
  collapseID: "collapse1"
}

toggleCollapse = collapseID => () =>
this.setState(prevState => ({
  collapseID: prevState.collapseID !== collapseID ? collapseID : ""
}));

render() {
    return (
      <MDBContainer>
        <div id="form">
        <MDBAnimation type="fadeInLeft" delay=".3s">
          <MDBCard className="card-image">
            <div className="py-5 px-4">
              <MDBRow className="d-flex justify-content-center">
                <MDBCol md="10" xl="8">
                  <MDBContainer className="accordion md-accordion accordion-5">

                    <MDBCard className="mb-4">
                      <MDBCollapseHeader
                        onClick={this.toggleCollapse("collapse1")}
                        className="p-0 z-depth-1"
                        tag="h5"
                        tagClassName="text-uppercase white-text mb-0 d-flex justify-content-start align-items-center">
                        <div className="d-flex justify-content-center align-items-center mr-4" class="fd-icon" >
                          <MDBIcon icon="check-circle" size="2x" className="m-3 white-text " />
                        </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                        Master Management et Gestion des Entreprises
                        <MDBIcon icon="caret-down" />
=======
                        Formation Qualifiante Développeur Web et Web Mobile 
>>>>>>> parent of b5f0e172... commit 5.1
=======
                        Formation Qualifiante Développeur Web et Web Mobile 
>>>>>>> parent of b5f0e172... commit 5.1
=======
                        Formation Qualifiante Développeur Web et Web Mobile 
>>>>>>> parent of b5f0e172... commit 5.1
=======
                        Formation Qualifiante Développeur Web et Web Mobile 
>>>>>>> parent of b5f0e172... commit 5.1
                      </MDBCollapseHeader>

                      <MDBCollapse id="collapse1" isOpen={this.state.collapseID}>
                        <MDBCardBody className="rgba-black-light white-text z-depth-1">
                          <MDBIcon icon="calendar-alt" /> 2018-2020
                          <p className="p-md-4 mb-0"> École nationale du commerce ENACO École à distance </p>
                        </MDBCardBody>
                      </MDBCollapse>
                    </MDBCard>

                    <MDBCard className="mb-4">
                      <MDBCollapseHeader
                        onClick={this.toggleCollapse("collapse2")}
                        className="p-0 z-depth-1"
                        tag="h5"
                        tagClassName="text-uppercase white-text mb-0 d-flex justify-content-start align-items-center" >
                        <div className="d-flex justify-content-center align-items-center mr-4" class="fd-icon">
                          <MDBIcon icon="check-circle" size="2x" className="m-3 white-text" />
                        </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                        Licence Management et Gestion des Organisations
                        <MDBIcon icon="caret-down" />
=======
                        Licence professionnelle Mention Commerce 
>>>>>>> parent of b5f0e172... commit 5.1
=======
                        Licence professionnelle Mention Commerce 
>>>>>>> parent of b5f0e172... commit 5.1
=======
                        Licence professionnelle Mention Commerce 
>>>>>>> parent of b5f0e172... commit 5.1
=======
                        Licence professionnelle Mention Commerce 
>>>>>>> parent of b5f0e172... commit 5.1
                      </MDBCollapseHeader>

                      <MDBCollapse id="collapse2" isOpen={this.state.collapseID}>
                        <MDBCardBody className="rgba-black-light white-text z-depth-1">
                          <MDBIcon icon="calendar-alt" /> 2017-2018
                          <p className="p-md-4 mb-0">
                          Mention A. Bien - Université de l'UPEC /ENC
                          </p>
                        </MDBCardBody>
                      </MDBCollapse>
                    </MDBCard>

                    <MDBCard className="mb-4">
                      <MDBCollapseHeader
                        onClick={this.toggleCollapse("collapse3")}
                        className="p-0 z-depth-1"
                        tag="h5"
                        tagClassName="text-uppercase white-text mb-0 d-flex justify-content-start align-items-center">
                        <div className="d-flex justify-content-center align-items-center mr-4" class="fd-icon" >
                          <MDBIcon icon="check-circle" size="2x" className="m-3 white-text" />
                        </div>
                        BTS Management des Unités Commerciales
                      </MDBCollapseHeader>

                      <MDBCollapse id="collapse3" isOpen={this.state.collapseID}>
                        <MDBCardBody className="rgba-black-light white-text z-depth-1">
                          <MDBIcon icon="calendar-alt" /> 2015-2016
                          <p className="p-md-4 mb-0">
                          VAE Académie de Paris
                          </p>
                        </MDBCardBody>
                      </MDBCollapse>
                    </MDBCard>

                    <MDBCard className="mb-4">
                      <MDBCollapseHeader
                        onClick={this.toggleCollapse("collapse4")}
                        className="p-0 z-depth-1"
                        tag="h5"
                        tagClassName="text-uppercase white-text mb-0 d-flex justify-content-start align-items-center" >
                        <div className="d-flex justify-content-center align-items-center mr-4" class="fd-icon">
                          <MDBIcon icon="check-circle" size="2x" className="m-3 white-text" />
                        </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                        Licence d'Anglais
                        <MDBIcon icon="caret-down" />
=======
                        Baccalauréat STMG  
>>>>>>> parent of b5f0e172... commit 5.1
=======
                        Baccalauréat STMG  
>>>>>>> parent of b5f0e172... commit 5.1
=======
                        Baccalauréat STMG  
>>>>>>> parent of b5f0e172... commit 5.1
=======
                        Baccalauréat STMG  
>>>>>>> parent of b5f0e172... commit 5.1
                      </MDBCollapseHeader>

                      <MDBCollapse id="collapse4" isOpen={this.state.collapseID}>
                        <MDBCardBody className="rgba-black-light white-text z-depth-1">
                          <MDBIcon icon="calendar-alt" /> 2000-2004
                        </MDBCardBody>
                      </MDBCollapse>
                    </MDBCard>

                  </MDBContainer>
                </MDBCol>
              </MDBRow>
            </div>
          </MDBCard>
        </MDBAnimation>
        </div>
      </MDBContainer>
    );
  }
}

export default CollapsePage;