import React, { Component } from "react";
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
    const { activeLink } = this.props;

    let activeView = <Home />;
    if (activeLink === "documents") {
      activeView = <Document />;
    } else if (activeLink === "reporting") {
      activeView = <Reporting />;
    } else if (activeLink === "support") {
      activeView = <Support />;
    }
    return (
      <div
        className={
          this.props.backgroundBlur
            ? "view-container background-blur"
            : "view-container"
        }
      >
        {activeView}
      </div>
    );
  }
}
