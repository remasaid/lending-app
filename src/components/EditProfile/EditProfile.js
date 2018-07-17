import React, { Component } from "react";
import "./EditProfile.css";

//ICONS
import Arrow from "../../img/arrow-down.svg";
// import Arrow from "../../img/arrow-down.svg";

export default class EditProfile extends Component {
  render() {
    const { signout, editProfile } = this.props;
    return (
      <div className="edit-profile-container">
        <div className="avatar-container">
          <div className="edit-profile-top">
            <div className="profile-img-circular" />
            <p className="edit-profile-name">JJanes</p>
            <div className="edit-profile-drop-down-arrow">
              <img onClick={editProfile} src={Arrow} />
            </div>
          </div>

          <div className="edit-profile-text-container">
            <div className="edit-profile-text">EDIT PROFILE</div>
            <div className="sign-out-text" onClick={signout}>
              SIGN OUT
            </div>
          </div>
        </div>
      </div>
    );
  }
}
