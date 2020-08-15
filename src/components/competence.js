import React from "react";

import { MDBAnimation,
  MDBCarousel, 
  MDBCarouselInner, 
  MDBCarouselItem, 
  MDBContainer, 
  MDBRow, 
  MDBCol, 
  MDBCard, 
  MDBCardImage,
  MDBCardBody, 
  MDBCardTitle, 
  MDBCardText, 
  MDBProgress
} from "mdbreact";

const MultiCarouselPage = () => {

  return (
    <div id="noFond">
      <MDBContainer>
        <MDBCarousel activeItem={1} length={5} slide={true} showControls={true} showIndicators={true} multiItem interval={30000}>
          <MDBCarouselInner>
            <MDBRow>

              <MDBCarouselItem itemId="1">
              <MDBAnimation type="fadeInLeft" delay=".3s">
                <MDBCol md="4">
                  <MDBCard className="mb-2">
                    <MDBCardImage className="img-fluid" src={require('../pictures/HTML.png')} />
                    <MDBCardBody>
                      <MDBCardTitle align="center"> HTML / CSS / JS </MDBCardTitle>
                      <MDBCardText>HTML</MDBCardText>
                      <MDBProgress material value={60} animated height="20px" color="info" >60%</MDBProgress>
                      <MDBCardText>CSS</MDBCardText>
                      <MDBProgress material value={60} animated height="20px" color="info" >60%</MDBProgress>
                      <MDBCardText>JavaScript</MDBCardText>
                      <MDBProgress material value={40} animated height="20px" color="info" >40%</MDBProgress>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="4">
                  <MDBCard className="mb-2">
                    <MDBCardImage className="img-fluid" src={require('../pictures/java.png')} />
                    <MDBCardBody>
                      <MDBCardTitle align="center"> JSE / JEE </MDBCardTitle>
                      <MDBCardText>JSE</MDBCardText>
                      <MDBProgress material value={40} animated height="20px" color="info" >40%</MDBProgress>
                      <MDBCardText>JEE</MDBCardText>
                      <MDBProgress material value={40} animated height="20px" color="info" >40%</MDBProgress>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="4">
                  <MDBCard className="mb-2">
                    <MDBCardImage className="img-fluid" src={require('../pictures/cms.PNG')} />
                    <MDBCardBody>
                      <MDBCardTitle align="center">CMS</MDBCardTitle>
                      <MDBCardText> Prestashop - Wordpress </MDBCardText>
                      <MDBProgress material value={60} animated height="20px" color="info" >60%</MDBProgress>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                </MDBAnimation>
              </MDBCarouselItem>

              <MDBCarouselItem itemId="2">
              <MDBAnimation type="fadeInLeft" delay=".3s">
                <MDBCol md="4">
                  <MDBCard className="mb-2">
                    <MDBCardImage className="img-fluid" src={require('../pictures/bootstrap.jpg')} />
                    <MDBCardBody>
                      <MDBCardTitle align="center">Bootstrap</MDBCardTitle>
                      <MDBCardText> Bootstrap </MDBCardText>
                      <MDBProgress material value={60} animated height="20px" color="info" >60%</MDBProgress>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="4">
                  <MDBCard className="mb-2">
                    <MDBCardImage className="img-fluid" src={require('../pictures/hibernate.png')} />
                    <MDBCardBody>
                      <MDBCardTitle align="center">Hibernate</MDBCardTitle>
                      <MDBCardText> Hibernate </MDBCardText>
                      <MDBProgress material value={20} animated height="20px" color="info" >20%</MDBProgress>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="4">
                  <MDBCard className="mb-2">
                    <MDBCardImage className="img-fluid" src={require('../pictures/eclipselink.jpg')} />
                    <MDBCardBody>
                      <MDBCardTitle align="center">EclipseLink</MDBCardTitle>
                      <MDBCardText> EclipseLink </MDBCardText>
                      <MDBProgress material value={20} animated height="20px" color="info" >20%</MDBProgress>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                </MDBAnimation>
              </MDBCarouselItem>

              <MDBCarouselItem itemId="3">
              <MDBAnimation type="fadeInLeft" delay=".3s">
                <MDBCol md="4">
                  <MDBCard className="mb-2">
                    <MDBCardImage className="img-fluid" src={require('../pictures/react.png')} />
                    <MDBCardBody>
                      <MDBCardTitle align="center">React</MDBCardTitle>
                      <MDBCardText> React </MDBCardText>
                      <MDBProgress material value={40} animated height="20px" color="info" >40%</MDBProgress>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="4">
                  <MDBCard className="mb-2">
                    <MDBCardImage className="img-fluid" src={require('../pictures/git.png')} />
                    <MDBCardBody>
                      <MDBCardTitle align="center">Git</MDBCardTitle>
                      <MDBCardText> Git </MDBCardText>
                      <MDBProgress material value={40} animated height="20px" color="info" >40%</MDBProgress>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="4">
                  <MDBCard className="mb-2">
                    <MDBCardImage className="img-fluid" src={require('../pictures/maven.PNG')} />
                    <MDBCardBody>
                      <MDBCardTitle align="center">Maven</MDBCardTitle>
                      <MDBCardText> Maven </MDBCardText>
                      <MDBProgress material value={20} animated height="20px" color="info" >20%</MDBProgress>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                </MDBAnimation>
              </MDBCarouselItem>

              <MDBCarouselItem itemId="4">
              <MDBAnimation type="fadeInLeft" delay=".3s">
                <MDBCol md="4">
                  <MDBCard className="mb-2">
                    <MDBCardImage className="img-fluid" src={require('../pictures/office.jpg')} />
                    <MDBCardBody>
                      <MDBCardTitle align="center">Office</MDBCardTitle>
                      <MDBCardText> Word </MDBCardText>
                      <MDBProgress material value={80} animated height="20px" color="info" >80%</MDBProgress>
                      <MDBCardText> Excel </MDBCardText>
                      <MDBProgress material value={60} animated height="20px" color="info" >60%</MDBProgress>
                      <MDBCardText> PowerPoint </MDBCardText>
                      <MDBProgress material value={80} animated height="20px" color="info" >80%</MDBProgress>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="4">
                  <MDBCard className="mb-2">
                    <MDBCardImage className="img-fluid" src={require('../pictures/eclipse.png')} />
                    <MDBCardBody>
                      <MDBCardTitle align="center">Eclipse</MDBCardTitle>
                      <MDBCardText> Eclipse JEE </MDBCardText>
                      <MDBProgress material value={60} animated height="20px" color="info" >60%</MDBProgress>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="4">
                  <MDBCard className="mb-2">
                    <MDBCardImage className="img-fluid" src={require('../pictures/VS Code.png')} />
                    <MDBCardBody>
                      <MDBCardTitle align="center">Visual Studio Code</MDBCardTitle>
                      <MDBCardText> VS Code </MDBCardText>
                      <MDBProgress material value={80} animated height="20px" color="info" >80%</MDBProgress>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                </MDBAnimation>
              </MDBCarouselItem>

              <MDBCarouselItem itemId="5">
              <MDBAnimation type="fadeInLeft" delay=".3s">
                <MDBCol md="4">
                  <MDBCard className="mb-2">
                    <MDBCardImage className="img-fluid" src={require('../pictures/wamp-xampp.png')} />
                    <MDBCardBody>
                      <MDBCardTitle align="center">Wamp / Xampp</MDBCardTitle>
                      <MDBCardText> Wamp </MDBCardText>
                      <MDBProgress material value={60} animated height="20px" color="info" >60%</MDBProgress>
                      <MDBCardText> Xampp </MDBCardText>
                      <MDBProgress material value={60} animated height="20px" color="info" >60%</MDBProgress>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="4">
                  <MDBCard className="mb-2">
                    <MDBCardImage className="img-fluid" src={require('../pictures/mariaDB-MySQL.jpg')} />
                    <MDBCardBody>
                      <MDBCardTitle align="center">SGBD</MDBCardTitle>
                      <MDBCardText> MySql </MDBCardText>
                      <MDBProgress material value={60} animated height="20px" color="info" >60%</MDBProgress>
                      <MDBCardText> MariaDB </MDBCardText>
                      <MDBProgress material value={40} animated height="20px" color="info" >40%</MDBProgress>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="4">
                  <MDBCard className="mb-2">
                    <MDBCardImage className="img-fluid" src={require('../pictures/angEsp.png')} />
                    <MDBCardBody>
                      <MDBCardTitle align="center">Langues</MDBCardTitle>
                      <MDBCardText> Anglais </MDBCardText>
                      <MDBProgress material value={60} animated height="20px" color="info" >60%</MDBProgress>
                      <MDBCardText> Espagnol </MDBCardText>
                      <MDBProgress material value={40} animated height="20px" color="info" >40%</MDBProgress>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                </MDBAnimation>
              </MDBCarouselItem>

            </MDBRow>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    </div>
  );
}

export default MultiCarouselPage;