import React, { Component } from "react";
import "./ToolBar.css";
import { Link } from "react-router-dom";

//ICONS
import Message from "../../img/mail.svg";
import Toolbox from "../../img/toolbox.svg";
import Documents from "../../img/file.svg";
import { MapsTransferWithinAStation } from "material-ui";

//COMPONENTS
import Messages from "../Messages/Messages";

export default class ToolBar extends Component {
  constructor() {
    super();
    this.state = {
      toolbar: [
        {
          type: "toolbox",
          text: "MORTGAGE TOOLBOX",
          number: "",
          to: "/toolbox",
          src: Toolbox
        },
        {
          type: "messages",
          text: "NEW MESSAGE IN YOUR INBOX",
          number: 4,
          to: "/messages",
          src: Message,
          component: Messages
        },
        {
          type: "documents",
          text: "NEW DOCUMENTS TO REVIEW",
          number: 8,
          to: "/documents",
          src: Documents,
          component: ""
        }
      ],
      toolBoxOpen: false
    };
  }

  onClick = type => {
    if (type === "toolbox") {
      this.setState({
        toolBoxOpen: !this.state.toolboxOpen
      });
    } else if (type === "messages") {
      this.props.toggleMessages();
    }
  };

  render() {
    let { toolbar } = this.state;
    let toolbarJsx = toolbar.map((toolbar, index) => {
      if (toolbar.type === "toolbox") {
        return (
          <div
            className="toolbar"
            key={index}
            onClick={() => this.onClick(toolbar.type)}
          >
            <img src={toolbar.src} alt="" className="toolbar-img" />
            <div className="toolbar-text"> {toolbar.text} </div>
          </div>
        );
      } else {
        return (
          <div
            className="toolbar"
            key={index}
            onClick={() => this.onClick(toolbar.type)}
          >
            <img src={toolbar.src} alt="" className="toolbar-img" />
            <div className="toolbar-number"> {toolbar.number}</div>
            <div className="toolbar-text"> {toolbar.text}</div>
          </div>
        );
      }
    });
    return <div className="toolbar-container">{toolbarJsx}</div>;
  }
}
