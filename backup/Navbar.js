import React, { Component } from "react";
// import "./Navbar.css";
import Logo from "../../img/bw_logo.jpg";
import { Link } from "react-router-dom";

//COMPONENTS

export default class Navbar extends Component {
  constructor() {
    super();
  }

  render() {
    let leftNavItem, rightNavItem;

    leftNavItem = [
      {
        text: "logo",
        to: "/"
      },
      {
        text: "MCAP #, Lender REF # or Last Name",
        to: "/search"
      }
    ];

    rightNavItem = [
      {
        text: "Home",
        to: "/home",
        active: true
      },
      {
        text: "Documents",
        to: "/documents",
        active: false
      },
      {
        text: "Reporting",
        to: "/reporting",
        active: false
      },
      {
        text: "Support",
        to: "/support",
        active: false
      },
      {
        text: "Profile",
        to: "/profile",
        active: false
      }
    ];

    let leftNavJsx = leftNavItem.map((item, index) => {
      if (item.text === "logo") {
        return (
          <Link key={index} className="navbar-logo" to={item.to}>
            <img className="logo" src={Logo} />
          </Link>
        );
      } else if (item.text === "MCAP #, Lender REF # or Last Name") {
        return (
          <Link key={index} className="navbar-search" to={item.to}>
            {item.text}
          </Link>
        );
      }
    });

    let rightNavJsx = rightNavItem.map((item, index) => {
      return (
        <Link key={index} className="navbar-right-tabs" to={item.to}>
          {item.text}
        </Link>
      );
    });
    const logoStyle = {
      backgroundImage: `url(${Logo})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%",
      maxWidth: "100%",
      maxHeight: "100%"
    };
    return (
      <div className="navbar-container">
        {leftNavJsx}
        <div className="navbar-tabs-container">
          {rightNavJsx}
          {/* <div className="navbar-home">Home</div>
          <div className="navbar-documents"> Documents</div>
          <div className="navbar-reporting"> Reporting</div>
          <div className="navbar-support"> Support</div>
          <div className="navbar-profile"> Profile</div> */}
        </div>
      </div>
    );
  }
}
