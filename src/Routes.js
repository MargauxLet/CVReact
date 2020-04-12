import React from "react";
import { Route, Router } from "react-router-dom";

//Contact
import contact from "./components/Contact/contact";

class Routes extends React.Component {
    render() {
        return(
            <Router>
            <div>
              <Route exact path="/" component={contact}></Route>
              {/*<Route exact path="/character" component={}></Route>*/}
            </div>
          </Router>
        )
    }
}

export default Routes;