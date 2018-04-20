import React, { Component } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

//ICONS
import Twitter from "../../img/twitter-logo-button.svg";
import Facebook from "../../img/facebook-logo-button.svg";
import LinkedIn from "../../img/linkedin-logo-button.svg";
import SendMail from "../../img/send-mail.svg";
import Logo from "../../img/bw_logo.jpg";

//COMPONENTS

export default class Footer extends Component {
  constructor() {
    super();
  }

  render() {
    let leftFooterItem, rightFooterItem;

    leftFooterItem = [
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
        text: "Accessibility at MCAP",
        to: "/accessibility"
      }
    ];

    rightFooterItem = [
      {
        src: Twitter,
        href: "//twitter.com"
      },
      {
        src: LinkedIn,
        href: "//linkedin.com"
      },
      {
        src: Facebook,
        href: "//facebook.com"
      },
      {
        src: SendMail,
        href: "//gmail.com"
      }
    ];

    let leftFooterJsx = leftFooterItem.map((item, index) => {
      return (
        <Link key={index} className="footer-left-link" to={item.to}>
          {item.text}
        </Link>
      );
    });

    let rightFooterJsx = rightFooterItem.map((item, index) => {
      return (
        <a key={index} className="footer-right-link" href={item.href}>
          <img src={item.src} />
        </a>
      );
    });

    return (
      <div className="footer-container">
        <div className="footer-left-container">{leftFooterJsx}</div>
        <div className="footer-right-container">
          {rightFooterJsx}
          <div className="footer-logo-container ">
            <p className="powered-by"> Powered By &nbsp;</p>
            <img src={Logo} className="footer-logo" />
          </div>
        </div>
      </div>
    );
  }
}
