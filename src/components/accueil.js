import React from "react";
import { Link } from "react-router-dom";

import { 
    MDBAvatar, 
    MDBRow, 
    MDBCol, 
    MDBCard, MDBCardUp,
    MDBCardBody, 
    MDBMask, 
    MDBIcon, 
    MDBView, 
    MDBBtn, 
    MDBAnimation 
} from "mdbreact";

import "./accueil.css";
import picture from "../pictures/IMG_1.jpg";

class accueil extends React.Component {
    render() {
        return (

            <div className="classic-form-page" id="login">
                <MDBView className="light-text">
                    <MDBMask className="d-flex justify-content-center align-items-center gradient">
                        <MDBAnimation type="fadeInLeft" delay=".3s" className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                            <MDBRow >
                                <MDBCol>
                                    <MDBCard testimonial>
                                        <MDBCardUp className='indigo lighten-1' />
                                        <MDBAvatar className='mx-auto white'>
                                            <img src={picture} alt='' />
                                        </MDBAvatar>
                                        <MDBCardBody>
                                            <h4 className='card-title'>Margaux LETELLIER</h4>
                                            <h6 className="h6-responsive font-weight-bold">Développeuse Web junior</h6>
                                            <hr className="hr-light" />
                                            <p> <MDBIcon icon='quote-left' />
                                            {' '}Ayant obtenu un titre professionnel (inscrit au RNCP) de niveau 5 (BTS/DUT),  
                                            de développeur/se Web et Web mobile suite à une réorientation de carrière, 
                                            je suis à la recherche d'une première expérience en entreprise afin d'y faire mes preuves.{' '}
                                            <MDBIcon icon='quote-right' /> </p>
                                        </MDBCardBody>
                                        <Link id="btn" to={'/navBar'}><MDBBtn gradient="blue"><span> Mon CV </span></MDBBtn></Link>
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>
                        </MDBAnimation>
                    </MDBMask>
                </MDBView>
            </div>
     
        );
    }
}

export default accueil;