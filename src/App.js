import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import logo from "./logo.svg";

import "../src/css/global.css";

//COMPONENTS
import Authpage from "./pages/Authpage/Authpage";
import Dashboard from "./pages/Dashboard/Dashboard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: true,
      userId: ""
    };
  }

  authenticate = () => {
    this.setState({
      isAuthenticated: true
    });
  };

  render() {
    const { isAuthenticated } = this.state;
    // let authentication = "";
    // if (isAuthenticated) {
    //   authentication = <Dashboard />;
    // } else if (!isAuthenticated) {
    //   authentication = <Authpage authenticate={this.authenticate} />;
    // }

    return (
      <div className="App">
        <Switch>
          <Route
            path="/signin"
            exact
            component={() =>
              !isAuthenticated ? <Authpage /> : <Redirect to="/home" />
            }
          />
          <Route
            path="/:activeLink"
            exact
            component={props =>
              isAuthenticated ? (
                <Dashboard match={props.match} />
              ) : (
                <Redirect to="/signin" />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
