import React, { Component } from "react";
import "./Welcome.css";
import { Link } from "react-router-dom";

//ICONS
import EditUser from "../../img/edit-user.svg";

//EXTERNAL COMPONENTS
var dateFormat = require("dateformat");

export default class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      date: this.date
    };
  }
  componentWillMount() {
    let now = new Date();
    let date = dateFormat(now, "dddd mmmm dS, yyyy");
    this.setState({
      date: date
    });
  }
  render() {
    const { userName } = this.props;
    const { date } = this.state;
    return (
      <div className="welcome-container">
        <div className="welcome-username">
          Welcome {userName}
          <Link to="#">
            <img src={EditUser} alt="" className="welcome-img" />
          </Link>
        </div>
        <div className="welcome-date">It's {date}</div>
      </div>
    );
  }
}
