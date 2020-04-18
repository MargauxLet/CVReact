import React from "react";
import {Route, Switch} from "react-router-dom";

import contact from "./contact";
import competence from "./competence";
import experience from "./experience";
import formation from "./formation";

class RoutesList extends React.Component {
    render() {
        return(
          <Switch>
            {/*CONTACT*/}
            <Route path={"/contact"} component={contact} exact />

            {/*COMPETENCE*/}
            <Route path={"/competence"} component={competence} exact />

            {/*EXPERIENCE*/}
            <Route path={"/experience"} component={experience} exact />  

            {/*FORMATION*/}
            <Route path={"/formation"} component={formation} exact /> 

          </Switch>
        )
    }
}

export default RoutesList;