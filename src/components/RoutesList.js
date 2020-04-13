import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Contact
import contact from "./contact";

class RoutesList extends React.Component {
    render() {
        return(
            <Router>
            <div >
                  {/*CONTACT*/}
                <Route exact path="/contact" component={contact}></Route>

                {/*COMPETENCE*/}

            </div>
          </Router>
        )
    }
}

export default RoutesList;