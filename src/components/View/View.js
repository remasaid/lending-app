import React, { Component } from "react";
import "./View.css";

//COMPONENTS
import ToolBar from "../ToolBar/ToolBar";
import Welcome from "../Welcome/Welcome";
import Widget from "../Widget/Widget";

export default class View extends Component {
  render() {
    const { userName } = this.props;
    return (
      <div
        className={
          this.props.backgroundBlur
            ? "view-container background-blur"
            : "view-container"
        }
      >
        <Welcome userName={userName} />
        <ToolBar />
        <Widget />
      </div>
    );
  }
}
