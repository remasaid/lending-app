import React, { Component } from "react";
import "./Home.css";

//COMPONENTS
import ToolBar from "../ToolBar/ToolBar";
import Welcome from "../Welcome/Welcome";
import Widget from "../Widget/Widget";
import Carousel from "../Carousel/Carousel";
import DocumentExchange from "../DocumentExchange/DocumentExchange";
import ImportantNews from "../ImportantNews/ImportantNews";

export default class Home extends Component {
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
      <div className="home-container">
        {importantNewsActive && (
          <ImportantNews importantNewsActive={importantNewsActive} />
        )}

        <div className="view-row">
          <Welcome userName={userName} />
          <ToolBar toggleMessages={this.props.toggleMessages} />
        </div>
        <Widget />
        <div className="view-row">
          <Carousel />
          <DocumentExchange />
        </div>
      </div>
    );
  }
}
