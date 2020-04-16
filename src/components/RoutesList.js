import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import contact from "./contact";
import competence from "./competence";

import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();

const PathUnknown = () => (
  <Redirect to="/" />
)

class RoutesList extends React.Component {
    render() {
        return(
          <Switch history={customHistory}>
            {/*CONTACT*/}
            <Route path={"/contact"} component={contact} exact />

            {/*COMPETENCE*/}
            <Route path={"/competence"} component={competence} exact />
          </Switch>
        )
    }
}

export default RoutesList;