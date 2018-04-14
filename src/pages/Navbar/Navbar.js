import React, { Component } from "react";
import "./Navbar.css";
import Logo from "../../img/bw_logo.jpg";

//COMPONENTS

export default class Navbar extends Component {
  constructor() {
    super();
  }

  render() {
    let leftNavItem, rightNavItem;

    leftNavItem = [
      {
        type: "logo",
        to: "/"
      },
      {
        type: "search",
        to: "/search"
      }
    ];

    rightNavItem = [
      {
        type: "home",
        to: "/home"
      },
      {
        type: "documents",
        to: "/documents"
      },
      {
        type: "reporting",
        to: "/reporting"
      },
      {
        type: "support",
        to: "/support"
      },
      {
        type: "profile",
        tp: "/profile"
      }
    ];
    const logoStyle = {
      backgroundImage: `url(${Logo})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%",
      maxWidth: "100%",
      maxHeight: "100%"
    };
    return (
      <div className="navbar-container">
        <div className="navbar-logo">
          <img className="logo" src={Logo} />
        </div>
        <div className="navbar-search">searchbar</div>
        <div className="navbar-tabs-container">
          <div className="navbar-home">Home</div>
          <div className="navbar-documents"> Documents</div>
          <div className="navbar-reporting"> Reporting</div>
          <div className="navbar-support"> Support</div>
          <div className="navbar-profile"> Profile</div>
        </div>
      </div>
    );
  }
}
