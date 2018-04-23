import React, { Component } from "react";
import "./Dashboard.css";

//COMPONENTS
import Navbar2 from "../../components/Navbar/Navbar2";
import View from "../../components/View/View";
import Footer from "../../components/Footer/Footer";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      backgroundBlur: false,
      userId: "",
      userName: "Thomas Glazo"
    };
  }

  backgroundBlurToggle = () => {
    const { backgroundBlur } = this.state;
    if (backgroundBlur) {
      this.setState({
        backgroundBlur: false
      });
    } else {
      this.setState({
        backgroundBlur: true
      });
    }
    console.log("background" + backgroundBlur);
  };
  render() {
    console.log(this.props.match);
    const { userName } = this.state;
    const { match } = this.props;
    const { activeLink } = match.params;

    return (
      <div className="dashboard-container">
        <Navbar2
          activeLink={activeLink}
          backgroundBlurToggle={this.backgroundBlurToggle}
        />
        <View backgroundBlur={this.state.backgroundBlur} userName={userName} />
        <Footer />
      </div>
    );
  }
}
