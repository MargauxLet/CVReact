import React from "react";
import "../index.css";

import {
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBContainer,
  MDBCard, MDBCardBody, MDBCardText,
  MDBAnimation,
} from "mdbreact";

class Contact extends React.Component {
  render() {
    return(
      <MDBContainer>
        <MDBRow id="card1">
          <MDBAnimation type="fadeInLeft" delay=".3s"
            className="text-center text-md-left col-md-6 mt-xl-5 mb-5" >
              <MDBCardBody className="white-text">
                <h1 className="h1-responsive font-weight-bold">
                Développeuse Web junior
                </h1>
                <hr className="hr-light" />
                <h6 className="mb-4">
                  Ayant obtenu un titre professionnel (inscrit au RNCP) de niveau 5 (BTS/DUT),  
                  de développeur/se Web et Web mobile suite à une réorientation de carrière, 
                  je suis à la recherche d'une première expérience en entreprise afin d'y faire mes preuves.
                </h6>
            </MDBCardBody>
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
                      <p className="white-text" id="blabla">Accédez à mon :
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
                      </p>
                    </div>
                  </div>

                </MDBCardBody>
              </MDBCard>
            </MDBAnimation>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Contact;    