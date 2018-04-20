import React, { Component } from "react";
import "./ToolBar.css";
import { Link } from "react-router-dom";

//ICONS
import Message from "../../img/mail.svg";
import Toolbox from "../../img/toolbox.svg";
import Documents from "../../img/file.svg";
import { MapsTransferWithinAStation } from "material-ui";

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
          src: Message
        },
        {
          type: "documents",
          text: "NEW DOCUMENTS TO REVIEW",
          number: 8,
          to: "/documents",
          src: Documents
        }
      ]
    };
  }
  render() {
    let { toolbar } = this.state;
    let toolbarJsx = toolbar.map((toolbar, index) => {
      if (toolbar.type === "toolbox") {
        return (
          <Link className="toolbar" key={index} to={toolbar.to}>
            <img src={toolbar.src} alt="" className="toolbar-img" />
            <div className="toolbar-text"> {toolbar.text} </div>
          </Link>
        );
      } else {
        return (
          <Link className="toolbar" key={index} to={toolbar.to}>
            <img src={toolbar.src} alt="" className="toolbar-img" />
            <div className="toolbar-number"> {toolbar.number}</div>
            <div className="toolbar-text"> {toolbar.text}</div>
          </Link>
        );
      }
    });
    return <div className="toolbar-container">{toolbarJsx}</div>;
  }
}
