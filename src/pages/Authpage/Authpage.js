import React, { Component } from "react";
import TextField from "material-ui/TextField";
import "./Authpage.css";
import Background from "../../img/bg.jpg";
import Logo from "../../img/bw_logo.jpg";

export default class Authpage extends Component {
  constructor() {
    super();
    this.state = {
      usernameFieldFocus: false,
      passwordFieldFocus: false,
      formBody: {
        username: "",
        password: ""
      }
    };
  }

  handleFocus = e => {
    let field = e.target.name;
    let fieldFocus = field + "FieldFocus";
    this.setState(
      {
        [fieldFocus]: true
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handleBlur = e => {
    let field = e.target.name;
    let fieldFocus = field + "FieldFocus";
    if (!this.state.formBody[field]) {
      console.log("here");
      this.setState(
        {
          [fieldFocus]: false
        },
        () => {
          console.log(this.state);
        }
      );
    }
  };

  handleChange = e => {
    let field = e.target.name;
    this.setState({
      formBody: {
        ...this.state.formBody,
        [field]: e.target.value
      }
    });
  };

  componentWillMount() {
    const { username, password } = this.state.formBody;
    if (username) {
      this.setState({
        usernameFieldFocus: true
      });
    }
    if (password) {
      this.setState({
        passwordFieldFocus: true
      });
    }
  }
  render() {
    const styles = {
      usernameFloatingLabel: {
        top: this.state.usernameFieldFocus ? "45px" : "33px",
        left: "18px",
        color: "#000000",
        opacity: ".5",
        "font-size": "14px",
        "font-style": "bold",
        marginBottom: "50px"
      },
      passwordFloatingLabel: {
        top: this.state.passwordFieldFocus ? "45px" : "33px",
        left: "18px",
        color: "#000000",
        opacity: ".5",
        "font-size": "14px",
        "font-style": "bold",
        marginBottom: "50px"
      },
      underlineStyle: {
        border: "none"
      },
      inputStyle: {
        border: "solid 1px #E0E0E9",
        width: "335px",
        height: "56px",
        "border-radius": "4px",
        "padding-left": "18px",
        paddingTop: "18px",
        "font-style": "bold",
        fontSize: "14px",
        marginTop: "14px"
      },
      hintStyle: {
        "font-style": "bold",
        fontSize: "14px",
        "padding-left": "18px",
        top: "38px"
      }
    };
    const logoStyle = {
      backgroundImage: `url(${Logo})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%"
    };
    const backgroundstyle = {
      backgroundImage: `url(${Background})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%"
    };
    return (
      <div>
        <div className="authpage-container">
          <div className="left-container " style={backgroundstyle} />
          <div className="right-container">
            <div className="form-container">
              <div className="logo-container">
                <img className="logo" src={Logo} />
              </div>
              <h1 className="sign-in">Sign in</h1>
              <div className="input-container">
                <TextField
                  defaultValue=""
                  hintText="Username"
                  name="username"
                  value={this.state.formBody.username}
                  floatingLabelText="Username"
                  floatingLabelStyle={styles.usernameFloatingLabel}
                  underlineStyle={styles.underlineStyle}
                  inputStyle={styles.inputStyle}
                  hintStyle={styles.hintStyle}
                  hintStyle={styles.hintStyle}
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  onChange={this.handleChange}
                />
              </div>
              <div className="input-container">
                <TextField
                  hintText="Password"
                  floatingLabelText="Password"
                  name="password"
                  value={this.state.formBody.password}
                  floatingLabelStyle={styles.passwordFloatingLabel}
                  underlineStyle={styles.underlineStyle}
                  inputStyle={styles.inputStyle}
                  type="password"
                  hintStyle={styles.hintStyle}
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  onChange={this.handleChange}
                />
              </div>
              <a className="forgot-password" href="#">
                Forgot password
              </a>

              <div className="button-container">
                <button
                  className="button"
                  id="show-hide"
                  onClick={this.props.authenticate}
                >
                  SIGN IN
                </button>
              </div>
              <a className="need-assistance forgot-password" href="#">
                Need assistance?
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
