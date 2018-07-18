import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./View.css";

//COMPONENTS
import Home from "../Home/Home";
import Document from "../Documents/Documents";
import Support from "../Support/Support";
import Reporting from "../Reporting/Reporting";

export default class View extends Component {
  constructor() {
    super();
    this.state = {
      importantNewsActive: true
    };
  }

  render() {
    const { importantNewsActive, messagesOpen } = this.state;
    const { userName } = this.props;

    return (
      <div
        className={
          this.props.backgroundBlur
            ? "view-container background-blur"
            : "view-container"
        }
      >
        <Route path="/home" component={Home} />
        <Route path="/documents" component={Document} />
        <Route path="/reporting" component={Reporting} />
        <Route path="/support" component={Support} />
      </div>
    );
  }
}
