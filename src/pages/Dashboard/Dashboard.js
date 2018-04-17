import React, { Component } from "react";
import "./Dashboard.css";
//COMPONENTS

import Navbar2 from "../Navbar/Navbar2";
import Footer from "../Footer/Footer";

export default class Dashboard extends Component {
  render() {
    console.log(this.props.match);
    const { match } = this.props;
    const { activeLink } = match.params;
    return (
      <div className="dashboard-container">
        <Navbar2 activeLink={activeLink} />
        <Footer />
      </div>
    );
  }
}
