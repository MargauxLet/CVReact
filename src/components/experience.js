import React from "react";

import { MDBTimeline, 
    MDBTimelineStep, 
    MDBIcon, 
    MDBAnimation,
    MDBContainer
} from "mdbreact";

import BackToTop from "react-back-to-top-button";

const TimelinePage = () => {

  return (
    <MDBContainer>
        <div id="exp">
            <MDBAnimation type="zoomIn" delay=".3s">
                <MDBTimeline responsive>
                    <MDBTimelineStep colorful hoverable color="blue-gradient" label=" ">
                        <img src={require('../pictures/insy2s.PNG')} className="img-fluid" alt="" />
                        <h4 className="font-weight-bold p-4 mb-0 white-text">
                        INSY2S Lille - Stagiaire développement web 
                        </h4>
                        <p className="white-text text-muted px-4 mb-0">
                        <MDBIcon icon="clock" /> 2019 - 2020 (12 semaines)
                        </p>
                        <p className="white-text mb-0 p-4">
                        Travail en collaboration sur un projet de développement Web destiné aux centre Afpa de la région Haut de France. 
                        Utilisation de technologies Front et Back-end comme JHipster, React et SpringBoot.
                        </p>
                    </MDBTimelineStep>
                    <MDBTimelineStep colorful inverted hoverable color="blue-gradient" label=" ">
                        <img src={require('../pictures/intermarche.jpg')} className="img-fluid" alt="" />
                        <h4 className="font-weight-bold p-4 mb-0 white-text">
                        Intermarché Pont ste Maxence - Hotesse de caisse 
                        </h4>
                        <p className="white-text text-muted px-4 mb-0">
                        <MDBIcon icon="clock" /> 2019 (1 mois)
                        </p>
                        <p className="white-text mb-0 p-4">
                        Remplacement en tant qu'hotesse de caisse. 
                        </p>
                    </MDBTimelineStep>
                    <MDBTimelineStep colorful hoverable color="blue-gradient" label=" ">
                        <img src={require('../pictures/Conforama.PNG')} className="img-fluid" alt="" />
                        <h4 className="font-weight-bold p-4 mb-0 white-text">
                        Conforama Compiègne - Stagiaire rayon décoration
                        </h4>
                        <p className="white-text text-muted px-4 mb-0">
                        <MDBIcon icon="clock" /> 2018 (16 semaines)
                        </p>
                        <p className="white-text mb-0 p-4">
                        Vente, animation, conseils aux clients, facing, gestion d’un rayon, management, marchandising, 
                        réalisation d'un mémoire sur l’amélioration de la rentabilité d’un rayon.
                        </p>
                    </MDBTimelineStep>
                    <MDBTimelineStep colorful inverted hoverable color="blue-gradient" label=" ">
                        <img src={require('../pictures/boulanger.PNG')} className="img-fluid" alt="" />
                        <h4 className="font-weight-bold p-4 mb-0 white-text">
                        Boulanger Compiègne - Stagiaire rayon confort 
                        </h4>
                        <p className="white-text text-muted px-4 mb-0">
                        <MDBIcon icon="clock" /> 2015-2017 (14 semaines)
                        </p>
                        <p className="white-text mb-0 p-4">
                        Vente, animation, conseils aux clients, préparations de commandes, facing, étiquetage, réapprovisionnement 
                        des rayons, préparation en vue des soldes, réalisation d'un projet sur la valeur des stocks des produits 
                        en fin de vie.
                        </p>
                    </MDBTimelineStep>
                    <MDBTimelineStep colorful hoverable color="blue-gradient" label=" ">
                        <img src={require('../pictures/vandesype.PNG')} className="img-fluid" alt="" />
                        <h4 className="font-weight-bold p-4 mb-0 white-text">
                        Fleuriste-horticulture Van de Sype Estrées st Denis - Stagiaire
                        </h4>
                        <p className="white-text text-muted px-4 mb-0">
                        <MDBIcon icon="clock" /> 2009-2010
                        </p>
                        <p className="white-text mb-0 p-4">
                        Mise en exposition, réorganisation des rayons, création de décoration (Noël), conseils aux clients...
                        </p>
                    </MDBTimelineStep>
                </MDBTimeline>
            </MDBAnimation>
        </div>  
        <BackToTop
        showOnScrollUp
        showAt={100}
        speed={1500}
        easing="easeInOutQuint">
        <MDBIcon icon="chevron-up" className="white-text" />
      </BackToTop>
    </MDBContainer>
  );
};

export default TimelinePage;