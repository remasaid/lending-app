import React, { Component } from "react";
import "./Footer.css";
import Logo from "../../img/bw_logo.jpg";
import { Link } from "react-router-dom";
//COMPONENTS

export default class Footer extends Component {
  constructor() {
    super();
  }

  render() {
    let leftNavItem, rightNavItem;

    leftNavItem = [
      {
        text: "Legal",
        to: "/legal"
      },
      {
        text: "Privacy",
        to: "/privacy"
      },
      {
        text: "Security",
        to: "/security"
      },
      {
        text: "Licenses",
        to: "/licenses"
      },
      {
        text: "Site Map",
        to: "/sitemap"
      },
      {
        text: "Accessability at MCAP",
        to: "/accessibility"
      }
    ];

    rightNavItem = [
      {
        text: "Twitter",
        to: "/twitter"
      },
      {
        text: "Linked In",
        to: "/linkedin"
      },
      {
        text: "Facebook",
        to: "/facebook"
      },
      {
        text: "Don't Know",
        to: "/dontknow"
      }
    ];

    let leftNavJsx = leftNavItem.map((item, index) => {
      return (
        <Link key={index} className="footer-left" to={item.to}>
          {item.text}
        </Link>
      );
    });

    let rightNavJsx = rightNavItem.map((item, index) => {
      return (
        <Link
          key={index}
          className="footer-right-tabs footer-left"
          to={item.to}
        >
          {item.text}
        </Link>
      );
    });

    return (
      <div className="footer-container">
        {leftNavJsx}
        <div className="">{rightNavJsx}</div>
      </div>
    );
  }
}
