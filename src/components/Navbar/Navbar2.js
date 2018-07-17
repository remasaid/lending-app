import React, { Component } from "react";
import "./Navbar2.css";
import "../Form/Form.css";
import TextField from "material-ui/TextField";

//ICONS
import Logo from "../../img/bw_logo.jpg";
import MagnifyingGlass from "../../img/search-glass.svg";
import Arrow from "../../img/dropdown_arrow.svg";
import { Link } from "react-router-dom";

//COMPONENTS
import Form from "../Form/Form";
import EditProfile from "../EditProfile/EditProfile";

export default class Navbar2 extends Component {
  constructor() {
    super();
    this.state = {
      formFieldActive: false,
      editProfileActive: false,
      userId: ""
    };
  }

  formField = () => {
    const { formFieldActive } = this.state;
    if (formFieldActive) {
      this.setState({
        formFieldActive: false
      });
    } else {
      this.setState({
        formFieldActive: true
      });
    }
    this.props.backgroundBlurToggle();
    console.log(formFieldActive);
  };

  editProfile = () => {
    const { editProfileActive } = this.state;
    if (!editProfileActive) {
      this.setState({
        editProfileActive: true
      });
    } else {
      this.setState({
        editProfileActive: false
      });
    }
    console.log(editProfileActive);
  };
  render() {
    const styles = {
      inputStyle: {
        // height: "19px",
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        // textDecoration: "none",
        // "border-bottom": "0px"
      },
      underlineStyle: {
        border: "none"
      },
      hintStyle: {
        "font-style": "bold",
        fontSize: "14px",
        color: "#101542",
        opacity: ".5"
      }
    };

    let rightNavItem;
    let { activeLink } = this.props;
    let { formFieldActive } = this.state;
    console.log(activeLink);
    rightNavItem = [
      {
        text: "Home",
        to: "/home",
        active: activeLink === "home" ? true : false
      },
      {
        text: "Documents",
        to: "/documents",
        active: activeLink === "documents" ? true : false
      },
      {
        text: "Reporting",
        to: "/reporting",
        active: activeLink === "reporting" ? true : false
      },
      {
        text: "Support",
        to: "/support",
        active: activeLink === "support" ? true : false
      }
    ];

    let rightNavJsx = rightNavItem.map((item, index) => {
      return (
        <Link
          className={
            item.active ? "navbar2-link navbar-active" : "navbar2-link"
          }
          key={index}
          to={item.to}
        >
          {item.text}
        </Link>
      );
    });
    const { signout } = this.props;
    return (
      <div className="navbar2-container">
        <div className="navbar2-wrapper">
          <div className="navbar2-left">
            <div className="navbar-logo-container">
              <div className="navbar2-logo">
                <img src={Logo} />
              </div>
            </div>

            <div className="navbar2-search-container">
              {formFieldActive && (
                <Form
                  formFieldActive={formFieldActive}
                  formField={this.formField}
                />
              )}
              <div className="navbar2-magnifying-glass">
                <img src={MagnifyingGlass} />
              </div>
              <input
                className="navbar2-searchbar"
                placeHolder="MCAP #, Lender Ref # or Last Name"
              />
              <div className="navbar2-search-dropdown-arrow">
                <img
                  src={Arrow}
                  onClick={this.formField}
                  className="drop-down-arrow"
                />
              </div>
            </div>
          </div>
          <div className="navbar2-right">
            {rightNavJsx}
            <div className="profile-container">
              {this.state.editProfileActive && (
                <EditProfile
                  editProfileActive={this.state.editProfileActive}
                  editProfile={this.editProfile}
                  signout={signout}
                />
              )}
              <div className="img-circular" />
              <p className="profile-name">JonJanes</p>
              <div className="navbar2-search-dropdown-arrow-adjustment">
                <img src={Arrow} onClick={this.editProfile} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
