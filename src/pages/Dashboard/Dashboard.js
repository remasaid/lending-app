import React, { Component } from "react";
import "./Dashboard.css";

//COMPONENTS
import Navbar2 from "../../components/Navbar/Navbar2";
import View from "../../components/View/View";
import Footer from "../../components/Footer/Footer";
import Messages from "../../components/Messages/Messages";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      backgroundBlur: false,
      userId: "",
      userName: "Thomas Glazo",
      messagesOpen: false
    };
  }

  toggleMessages = () => {
    this.setState({
      messagesOpen: !this.state.messagesOpen
    });
  };

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
    const { userName, messagesOpen } = this.state;
    const { match } = this.props;
    const { activeLink } = match.params;
    const { signout } = this.props;

    return (
      <div className="dashboard-container">
        <Navbar2
          activeLink={activeLink}
          backgroundBlurToggle={this.backgroundBlurToggle}
          signout={signout}
        />
        <View
          backgroundBlur={this.state.backgroundBlur}
          userName={userName}
          toggleMessages={this.toggleMessages}
        />
        <Footer />
        {messagesOpen ? <Messages /> : ""}
      </div>
    );
  }
}
