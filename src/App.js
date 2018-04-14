import React, { Component } from "react";
import logo from "./logo.svg";

import "../src/css/global.css";

//COMPONENTS
import Authpage from "./pages/Authpage/Authpage";
import Dashboard from "./pages/Dashboard/Dashboard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: false,
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
    let authentication = "";
    if (isAuthenticated) {
      authentication = <Dashboard />;
    } else if (!isAuthenticated) {
      authentication = <Authpage authenticate={this.authenticate} />;
    }

    return <div className="App">{authentication}</div>;
  }
}

export default App;
