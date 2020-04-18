import React from "react";

import { MDBCarousel, 
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
  MDBBtn,
  MDBProgress
} from "mdbreact";

const MultiCarouselPage = () => {

  return (
    <div id="noFond">
      <MDBContainer>
        <MDBCarousel activeItem={1} length={5} slide={true} showControls={false} showIndicators={true} multiItem>
          <MDBCarouselInner>
            <MDBRow>

              <MDBCarouselItem itemId="1">

                <MDBCol md="4">
                  <MDBCard className="mb-2">
                    <MDBCardImage className="img-fluid" src={require('../pictures/HTML.png')} />
                    <MDBCardBody>
                      <MDBCardTitle align="center"> HTML / CSS / JS </MDBCardTitle>
                      <MDBCardText>HTML</MDBCardText>
                      <MDBProgress material value={65} animated height="20px" color="info" >65%</MDBProgress>
                      <MDBCardText>CSS</MDBCardText>
                      <MDBProgress material value={65} animated height="20px" color="info" >65%</MDBProgress>
                      <MDBCardText>JavaScript</MDBCardText>
                      <MDBProgress material value={50} animated height="20px" color="info" >50%</MDBProgress>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>

                <MDBCol md="4">
                  <MDBCard className="mb-2">
                    <MDBCardImage className="img-fluid" src={require('../pictures/java.png')} />
                    <MDBCardBody>
                      <MDBCardTitle align="center"> JSE / JEE </MDBCardTitle>
                      <MDBCardText>JSE</MDBCardText>
                      <MDBProgress material value={25} animated height="20px" color="info" >25%</MDBProgress>
                      <MDBCardText>JEE</MDBCardText>
                      <MDBProgress material value={25} animated height="20px" color="info" >25%</MDBProgress>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>

                <MDBCol md="4">
                  <MDBCard className="mb-2">
                    <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" />
                    <MDBCardBody>
                      <MDBCardTitle>MDBCard title</MDBCardTitle>
                      <MDBCardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </MDBCardText>
                      <MDBBtn color="primary">MDBBtn</MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>

              </MDBCarouselItem>

              <MDBCarouselItem itemId="2">
                <MDBCol md="4">
                  <MDBCard className="mb-2">
                    <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(60).jpg" />
                    <MDBCardBody>
                      <MDBCardTitle>MDBCard title</MDBCardTitle>
                      <MDBCardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </MDBCardText>
                      <MDBBtn color="primary">MDBBtn</MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="4">
                  <MDBCard className="mb-2">
                    <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(47).jpg" />
                    <MDBCardBody>
                      <MDBCardTitle>MDBCard title</MDBCardTitle>
                      <MDBCardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </MDBCardText>
                      <MDBBtn color="primary">MDBBtn</MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="4">
                  <MDBCard className="mb-2">
                    <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(48).jpg" />
                    <MDBCardBody>
                      <MDBCardTitle>MDBCard title</MDBCardTitle>
                      <MDBCardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </MDBCardText>
                      <MDBBtn color="primary">MDBBtn</MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBCarouselItem>

              <MDBCarouselItem itemId="3">

                <MDBCol md="4">
                  <MDBCard className="mb-2">
                    <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg" />
                    <MDBCardBody>
                      <MDBCardTitle>MDBCard title</MDBCardTitle>
                      <MDBCardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </MDBCardText>
                      <MDBBtn color="primary">MDBBtn</MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="4">
                  <MDBCard className="mb-2">
                    <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(45).jpg" />
                    <MDBCardBody>
                      <MDBCardTitle>MDBCard title</MDBCardTitle>
                      <MDBCardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </MDBCardText>
                      <MDBBtn color="primary">MDBBtn</MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="4">
                  <MDBCard className="mb-2">
                    <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(41).jpg" />
                    <MDBCardBody>
                      <MDBCardTitle>MDBCard title</MDBCardTitle>
                      <MDBCardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </MDBCardText>
                      <MDBBtn color="primary">MDBBtn</MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>

              </MDBCarouselItem>

              <MDBCarouselItem itemId="4">

                <MDBCol md="4">
                  <MDBCard className="mb-2">
                    <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg" />
                    <MDBCardBody>
                      <MDBCardTitle>MDBCard title</MDBCardTitle>
                      <MDBCardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </MDBCardText>
                      <MDBBtn color="primary">MDBBtn</MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="4">
                  <MDBCard className="mb-2">
                    <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(45).jpg" />
                    <MDBCardBody>
                      <MDBCardTitle>MDBCard title</MDBCardTitle>
                      <MDBCardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </MDBCardText>
                      <MDBBtn color="primary">MDBBtn</MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="4">
                  <MDBCard className="mb-2">
                    <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(41).jpg" />
                    <MDBCardBody>
                      <MDBCardTitle>MDBCard title</MDBCardTitle>
                      <MDBCardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </MDBCardText>
                      <MDBBtn color="primary">MDBBtn</MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>

              </MDBCarouselItem>

              <MDBCarouselItem itemId="5">

                <MDBCol md="4">
                  <MDBCard className="mb-2">
                    <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg" />
                    <MDBCardBody>
                      <MDBCardTitle>MDBCard title</MDBCardTitle>
                      <MDBCardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </MDBCardText>
                      <MDBBtn color="primary">MDBBtn</MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="4">
                  <MDBCard className="mb-2">
                    <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(45).jpg" />
                    <MDBCardBody>
                      <MDBCardTitle>MDBCard title</MDBCardTitle>
                      <MDBCardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </MDBCardText>
                      <MDBBtn color="primary">MDBBtn</MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="4">
                  <MDBCard className="mb-2">
                    <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(41).jpg" />
                    <MDBCardBody>
                      <MDBCardTitle>MDBCard title</MDBCardTitle>
                      <MDBCardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </MDBCardText>
                      <MDBBtn color="primary">MDBBtn</MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>

              </MDBCarouselItem>

            </MDBRow>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    </div>
  );
}

export default MultiCarouselPage;